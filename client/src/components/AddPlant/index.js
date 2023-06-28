import React, { useState, } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useSession } from '@supabase/auth-helpers-react';
import  Button  from '../Button';
import './AddPlant.scss';

const colors = {
  2: '#33b679',
  6: "#f5511d",
  7: "#039be5",
  3: "#8e24aa",
  1: "#7986cb" 
}

const AddPlant = ({ fetchPlants }) => {
  const [name, setName] = useState('');
  const [stageOfLife, setStageOfLife] = useState('');
  const [growingMedium, setGrowingMedium] = useState('');
  const [growingEnvironment, setGrowingEnvironment] = useState('');
  const [nutrients, setNutrients] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [helperText, setHelperText] = useState('');
  const [color, setColor] = useState("")
  const session = useSession();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !name ||
      !stageOfLife ||
      !growingMedium ||
      !growingEnvironment ||
      !nutrients ||
      !time ||
      !date ||
      !session ||
      !color
    ) {
      setHelperText('Please fill in all fields and make sure you are logged in.');
      return;
    }

    date.setHours(time.getHours(), time.getMinutes(), 0)
    console.log('startTime', date)
    const startTime = date.toISOString().slice(0, 19).replace('T', ' ');
    setHelperText('');

    try {
      const plantData = {
      name: name,
      stageOfLife: stageOfLife.toLowerCase(),
      growingMedium: growingMedium.toLowerCase(),
      growingEnvironment: growingEnvironment,
      nutrients: nutrients,
      startTime: startTime,
      email: session.user.email,
      color: color
      };

      const result = await axios.post("http://localhost:8008/plants", plantData, { withCredentials: true });
      alert(`${name} Added!`)
      setName("")
      setStageOfLife("")
      setGrowingEnvironment("")
      setGrowingMedium("")
      setNutrients("")
      setTime(null)
      setDate(null)
      setColor("")
      fetchPlants()

    } catch (error) {
    console.error("Error adding plant", error)
    alert(`Sorry, Creating a schedule for ${name} failed. Please try again later.`)
  }
};

  return (
      <Box
        className="add-plant"
        component="form"
        sx={{
          '& .MuiTextField-root': { width: 500,
        maxWidth: '100%', },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="add-plant__container--first">
          <h2 className="add-plant__title">Add Plant</h2>

        <TextField
            fullWidth
            id="outlined-required"
            label="Name or Strain"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              views={['year', 'month', 'day']}
              value={date}
              label="Start Date of Grow"
              onChange={(newDate) => {
                const selectedDate = new Date(newDate);
                setDate(selectedDate);
              }}
            />
          <TimePicker
              label="Time of Grow Events"
              value={time}
              onChange={(newTime) => {
              const selectedTime = new Date(newTime);
                setTime(selectedTime);
              }}
            />
          </LocalizationProvider>
          <FormHelperText className='add-plant__helper-text'>
            {helperText}
          </FormHelperText>
        </div>
      <div className='add-plant__radio-container'>
               <div className="add-plant-container">
            <FormControl>
              <FormLabel id="color">Colour of Events</FormLabel>
              <RadioGroup
                aria-labelledby="color"
                name="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              >
                <FormControlLabel value="2" control={<Radio />} label={<div className="add-plant__color" style={{ backgroundColor: colors[2] }}></div>} />
                <FormControlLabel value="6" control={<Radio />} label={<div className="add-plant__color" style={{ backgroundColor: colors[6] }}></div>} />
                <FormControlLabel value="7" control={<Radio />} label={<div className="add-plant__color" style={{ backgroundColor: colors[7] }}></div>} />
                <FormControlLabel value="3" control={<Radio />} label={<div className="add-plant__color" style={{ backgroundColor: colors[3] }}></div>} />
                 <FormControlLabel value="1" control={<Radio />} label={<div className="add-plant__color" style={{ backgroundColor: colors[1] }}></div>} />
              </RadioGroup>
            </FormControl>
          </div>  
          <div className="add-plant-container">
            <FormControl>
              <FormLabel id="stage-of-life">Stage of Life</FormLabel>
              <RadioGroup
                aria-labelledby="stage-of-life"
                name="stage-of-life"
                value={stageOfLife}
                onChange={(event) => setStageOfLife(event.target.value)}
              >
                <FormControlLabel
                  value="Seedling"
                  control={<Radio />}
                  label="Seedling"
                />
                <FormControlLabel
                  value="Vegetative"
                  control={<Radio />}
                  label="Vegetative"
                />
                <FormControlLabel
                  value="Flowering"
                  control={<Radio />}
                  label="Flowering"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="add-plant-container">
            <FormControl>
            <FormLabel id="growing-medium">Growing Medium</FormLabel>
              <RadioGroup
                aria-labelledby="growing-medium"
                name="growing-medium"
                value={growingMedium}
                onChange={(event) => setGrowingMedium(event.target.value)}
              >
                <FormControlLabel value="Soil" control={<Radio />} label="Soil" />
                <FormControlLabel value="Soilless" control={<Radio />} label="Soilless" />
                <FormControlLabel value="Hydroponic" control={<Radio />} label="Hydroponic" />
              </RadioGroup>
            </FormControl>
          </div>  
        </div>
        <div className='add-plant__radio-container'>            
          <div className="add-plant-container">
            <FormControl>
              <FormLabel id="growing-environment">Growing Environment</FormLabel>
              <RadioGroup
                aria-labelledby="growing-environment"
                name="growing-environment"
                value={growingEnvironment}
                onChange={(event) => setGrowingEnvironment(event.target.value)}
              >
                <FormControlLabel value="Indoor" control={<Radio />} label="Indoor" />
                <FormControlLabel value="Outdoor" control={<Radio />} label="Outdoor" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="add-plant-container">
            <FormControl>
              <FormLabel id="nutrients">Nutrients</FormLabel>
              <RadioGroup
                aria-labelledby="nutrients"
                name="nutrients"
                value={nutrients}
                onChange={(event) => setNutrients(event.target.value)}
              >
                <FormControlLabel value="Liquid" control={<Radio />} label="Liquid" />
                <FormControlLabel value="Granular" control={<Radio />} label="Granular" />
                <FormControlLabel value="Fertilizer" control={<Radio />} label="Fertilizer" />
                <FormControlLabel value="None" control={<Radio />} label="None" />
              </RadioGroup>
            </FormControl>
          </div>    
        </div>
        <div className='add-plant__button-container'>
          <Button text="GENERATE SCHEDULE" onClick={handleSubmit} />  
        </div>
      </Box>
  );
};

export default AddPlant;