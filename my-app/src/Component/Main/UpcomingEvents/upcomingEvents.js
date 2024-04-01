import React from 'react';
import DataTable from '../DataTable/dataTable';
import eventsData from './eventsData.json';
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function Events() {
  const filteredData = eventsData;

  return (
    <ErrorBoundary>
      <section id="events">
        <h1>Upcoming Events</h1>
        <div className="events-container">
          {/* Always render DataTable */}
          <DataTable data={filteredData} />
        </div>
      </section>
    </ErrorBoundary>
  );
}

export default Events;
