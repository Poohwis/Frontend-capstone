import React, { useState } from "react";

const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guest, setGuest] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value)
    }

    const handleGuestChange = (event) => {
        setGuest(event.target.value)
    }
    const handleOccasionChange = (event) => {
        setOccasion(event.target.value)
    }

    return (
        <>
            <h3>Booking Form</h3>
            <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
                <label htmlFor='res-date'>Choose date</label>
                <input type='date' id='date' value={date} onChange={handleDateChange}/>
                <label htmlFor='res-time'>Choose time</label>
                <select id='res-time' value={time} onChange={handleTimeChange}>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime}>{availableTime}</option>
                    ))}
                </select>
                <label htmlFor='guest'>Number of guests</label>
                <input type='number' placeholder="1" min="1" max="10" id="guest" value={guest} onChange={handleGuestChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"></input>
            </form>
        </>
    )
}

export default BookingForm;
