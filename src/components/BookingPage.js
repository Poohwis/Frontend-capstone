import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guest, setGuest] = useState({
    value: "",
    isTouched: false,
    isValid: false
  });
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (event) => {
    setDate(event.target.value);
    const selectedDate = new Date(event.target.value);
    const times = fetchAPI(selectedDate);
    dispatch({ type: 'SET_TIMES', payload: times });
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestChange = (event) => {
    const value = event.target.value
    setGuest({
      ...guest,
      value: value,
      isTouched: true,
      isValid: value > 0 && value % 1 === 0});
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_TIMES':
        return action.payload;
        default:
        return state;
      }
    };

  const [availableTimes, dispatch] = useReducer(reducer, []);

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed-booking');
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <BookingForm
        date={date}
        time={time}
        guest={guest}
        occasion={occasion}
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
        onGuestChange={handleGuestChange}
        onOccasionChange={handleOccasionChange}
        onFormSubmit = {submitForm}
      />
    </>
  );
};

export default Main;
