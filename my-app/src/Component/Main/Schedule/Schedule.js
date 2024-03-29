import React, { useState } from 'react';
import DataTable from '../DataTable/dataTable';
import scheduleDataJson from '../Schedule/scheduleData.json';
import './Schedule.css';

function Schedule() {
  const [search, setSearch] = useState('');

const filteredData = scheduleDataJson.filter((item) => {
  if (!item || typeof item.Day !== 'string' || typeof item.Time !== 'string' || typeof item.Event !== 'string') {
    return false;
  }
  
  const searchText = search.toLowerCase();
  return (
    item.Day.toLowerCase().includes(searchText) ||
    item.Time.toLowerCase().includes(searchText) ||
    item.Event.toLowerCase().includes(searchText)
  );
});


  return (
    <section id="schedule">
      <h1>Weekly Schedule</h1>
      <div className="schedule-container">
        <input
          type="text"
          placeholder="Search by Day, Time, or Event"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        {filteredData.length > 0 ? (
          <DataTable data={filteredData} />
        ) : (
          <p><strong>No schedule data available</strong></p>
        )}
      </div>
    </section>
  );
}

export default Schedule;
