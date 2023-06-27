import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Toolbar,
  MonthView,
  WeekView,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel,
  DateNavigator,
  TodayButton,
  CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import LocationOn from '@mui/icons-material/LocationOn';
import Notes from '@mui/icons-material/Notes';
import Close from '@mui/icons-material/Close';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Create from '@mui/icons-material/Create';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import GrassIcon from '@mui/icons-material/Grass';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import SpeedIcon from '@mui/icons-material/Speed';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { blue, pink, orange, green, purple, red } from '@mui/material/colors';

import "./TestCal.scss"


const IconComp = ({ title, fontSize = "large", paddingTop = "0.5rem" }) => {
  let Icon = () => <div></div>
  if (title.includes("Water")) Icon = () => <WaterDropIcon fontSize={fontSize} sx={{ color: blue[200], margin: `${paddingTop} 0 0 0.85rem` }} />
  if (title.includes("Feed")) Icon = () => <LunchDiningIcon fontSize={fontSize} sx={{ color: pink[200], margin: `${paddingTop} 0 0 0.85rem` }} />
  if (title.includes("Defoliate")) Icon = () => <ContentCutIcon fontSize={fontSize} sx={{ color: orange[200], margin: `${paddingTop} 0 0 0.85rem` }} />
  if (title.includes("Transplant")) Icon = () => <GrassIcon fontSize={fontSize} sx={{ color: green[200], margin: `${paddingTop}0 0 0.85rem` }} />
  if (title.includes("CheckPH")) Icon = () => <SpeedIcon fontSize={fontSize} sx={{ color: purple[200], margin: `${paddingTop} 0 0 0.85rem` }} />
  if (title.includes("Harvest")) Icon = () => <AgricultureIcon fontSize={fontSize} sx={{ color: red[200], margin: `${paddingTop} 0 0 0.85rem` }} />
  
  return <Icon />
}
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(theme => ({
//   line: {
//     height: "2px",
//     width: "100%",
//     transform: "translate(0, -1px)"
//   },
//   circle: {
//     width: theme.spacing(1.5),
//     height: theme.spacing(1.5),
//     borderRadius: "50%",
//     transform: "translate(-50%, -50%)"
//   },
//   nowIndicator: {
//     position: "absolute",
//     left: 0,
//     top: ({ top }) => top,
//     background: theme.palette.secondary.main,
//     zIndex: 1
//   }
// }));

const StyledDivIndicator = styled('div')(({ theme }) => ({
  [`& .line`]: {
    height: "2px",
    width: "100%",
    transform: "translate(0, -1px)"
  },
  ['& .circle']: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    borderRadius: "50%",
    transform: "translate(-50%, -50%)"
  },
  ['& .nowIndicator']: {
    position: "absolute",
    left: 0,
    top: ({ top }) => top,
    background: theme.palette.secondary.main,
    zIndex: 1
  }
}))

const colors = {
  2: '#33b679',
  6: "#f5511d",
  7: "#039be5",
  3: "#8e24aa",
  1: "#7986cb" 
}



const PREFIX = 'Demo';
// #FOLD_BLOCK
const classes = {
  content: `${PREFIX}-content`,
  header: `${PREFIX}-header`,
  closeButton: `${PREFIX}-closeButton`,
  buttonGroup: `${PREFIX}-buttonGroup`,
  button: `${PREFIX}-button`,
  picker: `${PREFIX}-picker`,
  wrapper: `${PREFIX}-wrapper`,
  icon: `${PREFIX}-icon`,
  textField: `${PREFIX}-textField`,
  addButton: `${PREFIX}-addButton`,
};

// #FOLD_BLOCK
const StyledDiv = styled('div')(({ theme }) => ({
  [`& .${classes.icon}`]: {
    margin: theme.spacing(2, 0),
    marginRight: theme.spacing(2),
  },
  [`& .${classes.header}`]: {
    overflow: 'hidden',
    paddingTop: theme.spacing(0.5),
  },
  [`& .${classes.textField}`]: {
    width: '100%',
  },
  [`& .${classes.content}`]: {
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  [`& .${classes.closeButton}`]: {
    float: 'right',
  },
  [`& .${classes.picker}`]: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
    width: '50%',
  },
  [`& .${classes.wrapper}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0),
  },
  [`& .${classes.buttonGroup}`]: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 2),
  },
  [`& .${classes.button}`]: {
    marginLeft: theme.spacing(2),
  },
}));
const StyledFab = styled(Fab)(({ theme }) => ({
  [`&.${classes.addButton}`]: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(4),
  },
}));

const AppointmentFormContainerBasic = (props) => {
  const {
    commitChanges,
    visible,
    visibleChange,
    appointmentData,
    cancelAppointment,
    target,
    onHide,
  } = props
  const [appointmentChanges, setAppointmentChanges] = useState()

  const changeAppointment = ({ field, changes }) => {
    const nextChanges = {
      ...appointmentChanges,
      [field]: changes,
    };
   setAppointmentChanges(nextChanges)
  }

  const commitAppointment = (type) => {
    const appointment = {
      ...appointmentData,
      ...appointmentChanges,
    };
    if (type === 'deleted') {
      commitChanges({ [type]: appointment.id });
    } else if (type === 'changed') {
      commitChanges({ [type]: { [appointment.id]: appointment } });
    } else {
      commitChanges({ [type]: appointment });
    }
    setAppointmentChanges({})
  }

  const displayAppointmentData = {
    ...appointmentData,
    ...appointmentChanges,
  };

  const isNewAppointment = appointmentData.id === undefined;
  const applyChanges = isNewAppointment
    ? () => commitAppointment('added')
    : () => commitAppointment('changed');

  const textEditorProps = field => ({
    variant: 'outlined',
    onChange: ({ target: change }) => changeAppointment({
      field: [field], changes: change.value,
    }),
    value: displayAppointmentData[field] || '',
    label: field[0].toUpperCase() + field.slice(1),
    className: classes.textField,
  });

  const pickerEditorProps = field => ({
    // keyboard: true,
    value: displayAppointmentData[field],
    onChange: date => changeAppointment({
      field: [field], changes: date ? date.toDate() : new Date(displayAppointmentData[field]),
    }),
    ampm: false,
    inputFormat: 'DD/MM/YYYY HH:mm',
    onError: () => null,
  });
  const startDatePickerProps = pickerEditorProps('startDate');
  const endDatePickerProps = pickerEditorProps('endDate');
  const cancelChanges = () => {
    setAppointmentChanges({})
    visibleChange();
    cancelAppointment();
  };

  return (
    <AppointmentForm.Overlay
      visible={visible}
      target={target}
      fullSize
      onHide={onHide}
    >
      <StyledDiv>
        <div className={classes.header}>
          <IconButton className={classes.closeButton} onClick={cancelChanges} size="large">
            <Close color="action" />
          </IconButton>
        </div>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <Create className={classes.icon} color="action" />
            <TextField
              {...textEditorProps('title')}
            />
          </div>
          <div className={classes.wrapper}>
            <CalendarToday className={classes.icon} color="action" />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                label="Start Date"
                renderInput={
                  props => <TextField className={classes.picker} {...props} />
                }
                {...startDatePickerProps}
              />
              <DateTimePicker
                label="End Date"
                renderInput={
                  props => <TextField className={classes.picker} {...props} />
                }
                {...endDatePickerProps}
              />
            </LocalizationProvider>
          </div>
          <div className={classes.wrapper}>
            <LocationOn className={classes.icon} color="action" />
            <TextField
              {...textEditorProps('location')}
            />
          </div>
          <div className={classes.wrapper}>
            <Notes className={classes.icon} color="action" />
            <TextField
              {...textEditorProps('notes')}
              multiline
              rows="6"
            />
          </div>
        </div>
        <div className={classes.buttonGroup}>
          {!isNewAppointment && (
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={() => {
                visibleChange();
                commitAppointment('deleted');
              }}
            >
              Delete
            </Button>
          )}
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() => {
              visibleChange();
              applyChanges();
            }}
          >
            {isNewAppointment ? 'Create' : 'Save'}
          </Button>
        </div>
      </StyledDiv>
    </AppointmentForm.Overlay>
  );
}

/* eslint-disable-next-line react/no-multi-comp */
const Demo = ({ calendarData }) => {
  const [data, setData] = useState([]);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [editingFormVisible, setEditingFormVisible] = useState(false);
  const [deletedAppointmentId, setDeletedAppointmentId] = useState();
  const [editingAppointment, setEditingAppointment] = useState();
  const [previousAppointment, setPreviousAppointment] = useState();
  const [addedAppointment, setAddedAppointment] = useState({});
  const [isNewAppointment, setIsNewAppointment] = useState(false)
  const currentDate = new Date();
  const startDayHour = 0;
  const endDayHour = 24;

  useEffect(() => {
    setData(calendarData)
  }, [calendarData])
  
  const HeaderComponent = (props) => {
    console.log('debug', props)

    return (
      <AppointmentTooltip.Header {...props} style={{ justifyContent: 'space-between'}}>
        <IconComp title={props.appointmentData.title} />
      </AppointmentTooltip.Header>
    )
  }

  const AppointmentComponent = ({ children, style, ...restProps }) => {
    // console.log('restProps', restProps)
    return <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: colors[restProps.data.colorId],
        borderRadius: '8px',
        display: 'flex',
        paddingTop: '0.5rem'
        // alignItems: 'baseline'
      }}
    >
      <IconComp title={restProps.data.title} fontSize="small" paddingTop="0" />
      {children}
    </Appointments.Appointment>
  }

  // const AppointmentForm = connectProps(AppointmentFormContainerBasic, () => {
  //   const [data, setData] = useState(appointments);
  //   const [editingFormVisible, setEditingFormVisible] = useState(false);
  //   const [editingAppointment, setEditingAppointment] = useState();
  //   const [addedAppointment, setAddedAppointment] = useState({});
  //   const [isNewAppointment, setIsNewAppointment] = useState(false)
  //   const [previousAppointment, setPreviousAppointment] = useState();

  //   const currentAppointment = data
  //     .filter(appointment => editingAppointment && appointment.id === editingAppointment.id)[0]
  //     || addedAppointment;
  //   const cancelAppointment = () => {
  //     if (isNewAppointment) {
  //       setEditingAppointment(previousAppointment)
  //       setIsNewAppointment(false);
  //     }
  //   };

  //   return {
  //     visible: editingFormVisible,
  //     appointmentData: currentAppointment,
  //     cancelAppointment,
  //   };
  // });

  // componentDidUpdate() {
  //   this.appointmentForm.update();
  // }

  const onEditingAppointmentChange = (editingAppointment) => {
    setEditingAppointment(editingAppointment)
  }

  const onAddedAppointmentChange = (addedAppointment) => {
    setAddedAppointment(addedAppointment)
    if (editingAppointment !== undefined) {
      setPreviousAppointment(editingAppointment)
    }
    setEditingAppointment(undefined)
    setIsNewAppointment(true)
  }

  const toggleEditingFormVisibility = () => {
    setEditingFormVisible(!editingFormVisible)
  }

  const toggleConfirmationVisible = () => {
    setConfirmationVisible(!confirmationVisible)
  }

  const commitDeletedAppointment = () => {
    const nextData = data.filter(appointment => appointment.id !== deletedAppointmentId);
    setData(nextData);
    setDeletedAppointmentId(null);
    toggleConfirmationVisible();
  }

  const commitChanges = ({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      data = [...data, { id: startingAddedId, ...added }];
    }
    if (changed) {
      data = data.map(appointment => (
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
    }
    if (deleted !== undefined) {
      setDeletedAppointmentId(deleted);
      toggleConfirmationVisible();
    }
    setData(data)
    setAddedAppointment({})
  }
  const indicatorRef = React.useRef(null);
  const Indicator = ({ top, ...restProps }) => {
    return (
      <StyledDivIndicator {...restProps} ref={indicatorRef}>
        <div className="nowIndicator circle" />
        <div className="nowIndicator line" />
      </StyledDivIndicator>
    );
  };
  
  useEffect(() => {
    console.log('indicatorRef', indicatorRef.current)
    if (indicatorRef) {
      indicatorRef.current.scrollIntoView({ block: "center" }); 
    }
  }, [indicatorRef]);
  console.log('data', data)

  return (
    <Paper>
      <Scheduler
        data={data}
        height={800}
      >
        <ViewState
          defaultCurrentDate={currentDate}
        />
        <EditingState
          onCommitChanges={commitChanges}
          onEditingAppointmentChange={onEditingAppointmentChange}
          onAddedAppointmentChange={onAddedAppointmentChange}
        />
        <WeekView
          startDayHour={startDayHour}
          endDayHour={endDayHour}
        />
        <MonthView
          startDayHour={startDayHour}
          endDayHour={endDayHour}/>
        <AllDayPanel />
        <Appointments
          appointmentComponent={AppointmentComponent}
        />
        <AppointmentTooltip
          // showOpenButton
          showCloseButton
          // showDeleteButton
          headerComponent={HeaderComponent}
          contentComponent={(props) => {
            console.log(props)
            return <AppointmentTooltip.Content {...props}>
              <div className='cal__description'>{props.appointmentData.description}</div>
            </AppointmentTooltip.Content>
          }}
        />
        <CurrentTimeIndicator indicatorComponent={Indicator} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        {/* <AppointmentForm
          overlayComponent={appointmentForm}
          visible={editingFormVisible}
          onVisibilityChange={toggleEditingFormVisibility}
        /> */}
      </Scheduler>

      <Dialog
        open={confirmationVisible}
        // onClose={cancelDelete}
      >
        <DialogTitle>
          Delete Appointment
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this appointment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={toggleConfirmationVisible} color="primary" variant="outlined">
            Cancel
          </Button> */}
          {/* <Button onClick={commitDeletedAppointment} color="secondary" variant="outlined">
            Delete
          </Button> */}
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
export default Demo;