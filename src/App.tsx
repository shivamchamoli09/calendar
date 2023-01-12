import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "@shivamchamoli1997/calendar/dist";
import {generateReport} from '@shivamchamoli1997/npm-package-manager/dist';

interface CalendarPropsInterface {
  type?: 'date' | 'month' | 'year';
}

function App(props: CalendarPropsInterface) {
  function handleChange(event: any) {
    console.log('handleChange*******************', event)

  }
  return (
    <>
      <Calendar type='date' onChange={handleChange} />
    </>
  );
}

export default App;
