import React, { useState } from 'react';
import DataTable from '../DataTable/dataTable';
import eventsData from './eventsData.json';
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function Events() {
  const [filteredData] = useState(eventsData);

  return (
    <ErrorBoundary> {/* errorBoundary added here */}
      <section id="events">
        <h1>Upcoming Events</h1>
        {filteredData.length > 0 ? (
          <DataTable data={filteredData} />
        ) : (
          <p><strong>No events match your search criteria. Please try searching for a different event.</strong></p>
        )}
      </section>
    </ErrorBoundary> /* errorBoundary added here */
  );
}

export default Events;
