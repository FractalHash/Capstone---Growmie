import React, { useState } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import './AddPlant.scss';


const AddPlant = () => {
  const [name, setName] = useState('');
  const [stageOfLife, setStageOfLife] = useState('');
  const [growingMedium, setGrowingMedium] = useState('');
  const [growingEnvironment, setGrowingEnvironment] = useState('');
  const [nutrients, setNutrients] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [helperText, setHelperText] = useState('');

const googleCalendarDateFormat = (selectedDate) => {
  if (!selectedDate) {
    return '';
  }
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1;
  const day = selectedDate.getDate();
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

const googleCalendarTimeFormat = (time) => {
  if (!time) {
    return '';
  }
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !name ||
      !stageOfLife ||
      !growingMedium ||
      !growingEnvironment ||
      !nutrients ||
      !time ||
      !date
    ) {
      setHelperText('Please fill in all fields');
      return;
    }

    const formattedDate = googleCalendarDateFormat(date);
    const formattedTime = googleCalendarTimeFormat(time);
    console.log('Name:', name);
    console.log('Stage of Life:', stageOfLife);
    console.log('Growing Medium:', growingMedium);
    console.log('Growing Environment:', growingEnvironment);
    console.log('Nutrients:', nutrients);
    console.log('Date:', formattedDate);
    console.log('Time: ', formattedTime);
    setHelperText('');

    try {
       const plantData = {
        name: name,
        stageOfLife: stageOfLife,
        growingMedium: growingMedium,
        growingEnvironment: growingEnvironment,
        nutrients: nutrients,
        date: formattedDate,
        time: formattedTime,
      };

      await axios.post("http://localhost:8000/calendar", plantData);
      alert("Plant Added!")

    } catch (error) {
      console.error("Error adding plant", error)
    }

  };

  return (
    <section>
      <Box
        className="add-plant"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="add-plant__container--first">
          <h1 className="add-plant__title">Add a Plant</h1>

          <TextField
            id="outlined-required"
            label="Name or Strain"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              views={['year', 'month', 'day']}
              value={date}
              onChange={(newDate) => {
                const selectedDate = new Date(newDate);
                setDate(selectedDate);
              }}
            />
            <TimePicker
              onChange={(newTime) => {
              const selectedTime = new Date(newTime);
              setTime(selectedTime);
              }}
            />
          </LocalizationProvider>
          <Button className="add-plant__button" onClick={handleSubmit} variant="contained">
            Generate Schedule
          </Button>
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

        <FormHelperText>{helperText}</FormHelperText>
      </Box>
    </section>
  );
};

export default AddPlant;