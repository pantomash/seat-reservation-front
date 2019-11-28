import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import plLocale from 'date-fns/locale/pl';
// import { DateTimePicker } from "@material-ui/pickers";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  InputLabel,
  FormControl,
  MenuItem,
  Button,
  Select
} from "@material-ui/core";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import { makeStyles } from "@material-ui/core/styles";
// import FormControl from "@material-ui/core/FormControl";
// import MenuItem from "@material-ui/core/MenuItem";
// import Button from '@material-ui/core/Button';

import './homepage-form.styles.scss';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     // margin: theme.spacing(1),
//     minWidth: 120
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2)
//   }
// }));

const HomePageForm = () => {
  // const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCity, setCity] = useState('');
  const [selectedPeople, setPeople] = useState('');

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleCityChange = event => {
    setCity(event.target.value);
  };

  const handlePeopleChange = event => {
    setPeople(event.target.value);
  };

  return (
    <div className="form-container">
      <FormControl className='form-container_input'>
        <InputLabel id="city-label">Wybierz miasto</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <MenuItem value={1}>Trójmiasto</MenuItem>
          <MenuItem value={2}>Kraków</MenuItem>
          <MenuItem value={3}>Katowice</MenuItem>
        </Select>
      </FormControl>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={plLocale}>
        <DateTimePicker
          id="date-picker"
          label="Wybierz datę"
          value={selectedDate}
          // disabled={!selectedCity}
          disablePast
          onChange={handleDateChange}
          ampm={false}
          format="yyyy-MM-dd HH:mm"
        />
      </MuiPickersUtilsProvider>
      <FormControl className='form-container_input'>
        <InputLabel id="people-label">Ile osób</InputLabel>
        <Select
          labelId="demo-people-label"
          id="demo-simple-select"
          value={selectedPeople}
          // disabled={!selectedCity}
          onChange={handlePeopleChange}
        >
          <MenuItem value={1}>1 osoba</MenuItem>
          <MenuItem value={2}>2 osoby</MenuItem>
          <MenuItem value={3}>3 osoby</MenuItem>
          <MenuItem value={4}>4 osoby</MenuItem>
          <MenuItem value={5}>5 osób</MenuItem>
          <MenuItem value={6}>6 osób</MenuItem>
          <MenuItem value={7}>7 osób</MenuItem>
          <MenuItem value={8}>8 osób</MenuItem>
          <MenuItem value={9}>9 osób</MenuItem>
          <MenuItem value={10}>10 osób</MenuItem>
          <MenuItem value={11}>11 osób</MenuItem>
          <MenuItem value={12}>12 osób</MenuItem>
        </Select>
      </FormControl>
      <Button 
      className="form-container_button"
        variant="contained"
        color="primary"
        // disabled={!selectedPeople}
        onClick={() => {
          const formDTO = {city: selectedCity, people: selectedPeople, date: selectedDate};
          console.log(formDTO);
        }}
      >Szukaj</Button>
    </div>
  );
};

export default HomePageForm;
