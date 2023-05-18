import React from "react";

const BookingForm = ({ date, time, guest, occasion, availableTimes, onDateChange, onTimeChange, onGuestChange, onOccasionChange, onFormSubmit }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit({ date, time, guest, occasion });
    }
    const getIsFormValid = () => {
        return (date && time && guest.value && occasion)
    }
    const GuestErrorMessage = () => {
        return (
            <span style={{ color: 'red', fontSize: '12px' }}>Please provide the number of resevetions</span>
        )
    }

    return (
        <>
            <h3>Booking Form</h3>
            <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
                <label htmlFor='res-date'>Choose date</label>
                <input type='date' id='date' value={date} onChange={onDateChange} />
                <label htmlFor='res-time'>Choose time</label>
                <select id='res-time' value={time} onChange={onTimeChange}>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>{availableTime}</option>
                    ))}
                </select>
                <label htmlFor='guest'>Number of guests</label>
                <input type='number' placeholder="1" min="1" max="10" id="guest" value={guest.value} onChange={onGuestChange} />
                {guest.isValid && guest.isTouched ? null : <GuestErrorMessage />}
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={onOccasionChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit" disabled={!getIsFormValid()} aria-label="Make Reservation">Make your reservation</button>
            </form>
        </>
    )
}

export default BookingForm;
