import React from 'react';
import DataTable from '../DataTable/dataTable';
import scheduleDataJson from '../Schedule/scheduleData.json';
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function Schedule() {
  const filteredData = scheduleDataJson; // Assuming no initial filtering required

  return (
    <ErrorBoundary> {/* errorBoundary added here */}
      <section id="schedule">
        <h1>Weekly Schedule</h1>
        <div className="schedule-container">
          {/* Conditionally render DataTable or a message if no data found */}
          {filteredData.length > 0 ? (
            <DataTable data={filteredData} />
          ) : (
            <p><strong>No programs match your search criteria. Please try searching for a different event.</strong></p>
          )}
        </div>
      </section>
    </ErrorBoundary> /* errorBoundary closed here */
  );
}

export default Schedule;
