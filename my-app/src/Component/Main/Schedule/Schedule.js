import React, { useState } from 'react';
import DataTable from '../DataTable/dataTable'; // Importing the DataTable component
import scheduleDataJson from '../Schedule/scheduleData.json'; // Importing schedule data from JSON file
import './Schedule.css'; // Importing the CSS file for styling

function Schedule() {
  // State hook to manage the search query
  const [search, setSearch] = useState('');

  // Filtering the schedule data based on the search query
  const filteredData = scheduleDataJson.filter((item) => {
    // Check if the item exists and has valid properties
    if (!item || typeof item.Day !== 'string' || typeof item.Time !== 'string' || typeof item.Event !== 'string') {
      return false;
    }
    // Convert search text to lowercase for case-insensitive search
    const searchText = search.toLowerCase();
    // Return true if any property contains the search text
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
        {/* Input field for searching */}
        <input
          type="text"
          placeholder="Search by Day, Time, or Event"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state on input change
          className="search-input"
        />
        {/* Conditionally render DataTable or a message if no data found */}
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
