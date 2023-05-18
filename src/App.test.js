import React from 'react';
import { render, screen} from '@testing-library/react';
import Main, { initializeTimes, updateTimes } from './components/BookingPage';


test('initializeTimes returns the expected array', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const actualTimes = Main.initializeTimes();
  expect(actualTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same times as the state', () => {
  const state = { times: ['10:00', '11:00', '12:00'] };
  const expectedTimes = state.times;
  const actualTimes = Main.updateTimes(state);
  expect(actualTimes.times).toEqual(expectedTimes);
});

describe('Main component', () => {
  it('renders the BookingForm component with the correct props', () => {
    render(<Main />);
    // Your test assertions for the rendered BookingForm component go here
  });
});