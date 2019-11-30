import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import DateFnsUtils from "@date-io/date-fns";
import plLocale from 'date-fns/locale/pl';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  InputLabel,
  FormControl,
  MenuItem,
  Button,
  Select
} from "@material-ui/core";

import './homepage-form.styles.scss';

class HomePageForm extends Component {
  state = {
      date: null,
      hour: '',
      city: '',
      people: ''
  }

  handleDateChange = event => {
    this.setState({ date: event });
  }

  handleHourChange = event => {
    this.setState({ hour: event.target.value });
  }

  handleCityChange = event => {
    this.setState({ city: event.target.value });
  }

  handlePeopleChange = event => {
    this.setState({ people: event.target.value });
  }

  onButtonSubmit = () => {
    this.props.history.push({pathname: '/checkout', state: {dto: {date: this.state.date, hour: this.state.hour, city: this.state.city, people: this.state.people}}});
  }

  render(){
    return (
      <div className="form-container">
      <FormControl className='form-container_input'>
        <InputLabel id="city-label">Wybierz miasto</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.city}
          onChange={this.handleCityChange}
        >
          <MenuItem value={1}>Trójmiasto</MenuItem>
          <MenuItem value={2}>Kraków</MenuItem>
          <MenuItem value={3}>Katowice</MenuItem>
        </Select>
      </FormControl>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={plLocale}>
        <DatePicker
          id="date-picker"
          label="Wybierz datę"
          value={this.state.date}
          disablePast
          onChange={this.handleDateChange}
          format="yyyy-MM-dd"
        />
      </MuiPickersUtilsProvider>
      <FormControl className='form-container_input'>
        <InputLabel id="hour-label">Wybierz godzinę</InputLabel>
        <Select
          labelId="demo-hour-label"
          id="demo-simple-select"
          value={this.state.hour}
          onChange={this.handleHourChange}
        >
          <MenuItem value={0}>0:00</MenuItem>
          <MenuItem value={1}>1:00</MenuItem>
          <MenuItem value={2}>2:00</MenuItem>
          <MenuItem value={3}>3:00</MenuItem>
          <MenuItem value={4}>4:00</MenuItem>
          <MenuItem value={5}>5:00</MenuItem>
          <MenuItem value={6}>6:00</MenuItem>
          <MenuItem value={7}>7:00</MenuItem>
          <MenuItem value={8}>8:00</MenuItem>
          <MenuItem value={9}>9:00</MenuItem>
          <MenuItem value={10}>10:00</MenuItem>
          <MenuItem value={11}>11:00</MenuItem>
          <MenuItem value={12}>12:00</MenuItem>
          <MenuItem value={13}>13:00</MenuItem>
          <MenuItem value={14}>14:00</MenuItem>
          <MenuItem value={15}>15:00</MenuItem>
          <MenuItem value={16}>16:00</MenuItem>
          <MenuItem value={17}>17:00</MenuItem>
          <MenuItem value={18}>18:00</MenuItem>
          <MenuItem value={19}>19:00</MenuItem>
          <MenuItem value={20}>20:00</MenuItem>
          <MenuItem value={21}>21:00</MenuItem>
          <MenuItem value={22}>22:00</MenuItem>
          <MenuItem value={23}>23:00</MenuItem>
        </Select>
      </FormControl>
      <FormControl className='form-container_input'>
        <InputLabel id="people-label">Ile osób</InputLabel>
        <Select
          labelId="demo-people-label"
          id="demo-simple-select"
          value={this.state.people}
          onChange={this.handlePeopleChange}
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
        disabled={!this.state.hour || !this.state.people || !this.state.date || !this.state.city}
        onClick={this.onButtonSubmit}
      >Szukaj</Button>
    </div>
    );
  }
}

export default withRouter(HomePageForm);