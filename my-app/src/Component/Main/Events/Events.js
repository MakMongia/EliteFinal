import React from 'react';
import eventsData from './eventsData.json';
import DataTable from '../DataTable/dataTable';
import './Events.css';
import '../DataTable/tableStyle.css'

function Events() {
  return (
    <section id="events">
      <h1>Upcoming Events</h1>
      <DataTable data={eventsData} />
    </section>
  );
}

export default Events;
