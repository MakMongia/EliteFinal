import React from 'react';
import eventsData from './eventsData.json'; // Importing event data from JSON file
import DataTable from '../DataTable/dataTable'; // Importing DataTable component
import '../DataTable/tableStyle.css'; // Importing CSS styles for DataTable

function Events() {
  return (
    <section id="events"> {/* Section for displaying upcoming events */}
      <h1>Upcoming Events</h1> {/* Heading for the section */}
      <DataTable data={eventsData} /> {/* Rendering DataTable component with event data */}
    </section>
  );
}

export default Events;
