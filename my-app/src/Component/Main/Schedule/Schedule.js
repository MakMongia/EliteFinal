import React from 'react';
import DataTable from '../DataTable/dataTable';
import scheduleDataJson from '../Schedule/scheduleData.json';
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function Schedule() {
  const filteredData = scheduleDataJson; // Assuming no initial filtering required

  return (
    <ErrorBoundary>
      <section id="schedule">
        <h1>Weekly Schedule</h1>
        <div className="schedule-container">
          {/* Always render DataTable */}
          <DataTable data={filteredData} />
        </div>
      </section>
    </ErrorBoundary>
  );
}

export default Schedule;
