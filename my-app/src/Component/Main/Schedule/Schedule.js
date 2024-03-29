import React, { useState } from 'react';
import './Schedule.css';
import scheduleDataJson from '../Schedule/scheduleData.json';

function Schedule() {
  const [search, setSearch] = useState('');

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
        {scheduleDataJson.length > 0 ? (
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Days</th>
                <th>Time</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              {scheduleDataJson
                .filter((item) => {
                  const columns = Object.values(item).map((value) =>
                    value.toString().toLowerCase()
                  );
                  return columns.some((column) =>
                    column.includes(search.toLowerCase())
                  );
                })
                .map((scheduleItem, index) => (
                  <tr key={index}>
                    <td>{scheduleItem.day}</td>
                    <td>{scheduleItem.time}</td>
                    <td>{scheduleItem.event}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <p>No schedule data available</p>
        )}
      </div>
    </section>
  );
}

export default Schedule;
