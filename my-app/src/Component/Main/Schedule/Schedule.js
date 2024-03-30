import React, { useState } from 'react';
import DataTable from '../DataTable/dataTable';
import scheduleDataJson from '../Schedule/scheduleData.json';
import SearchBar from '../searchBar/searchBar'; // Import the SearchBar component
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function Schedule() {
  const [filteredData, setFilteredData] = useState(scheduleDataJson);

  const handleSearch = (searchText) => {
    const newData = scheduleDataJson.filter((item) => {
      if (!item || typeof item.Day !== 'string' || typeof item.Time !== 'string' || typeof item.Event !== 'string') {
        return false;
      }
      const lowerCaseSearchText = searchText.toLowerCase();
      return (
        item.Day.toLowerCase().includes(lowerCaseSearchText) ||
        item.Time.toLowerCase().includes(lowerCaseSearchText) ||
        item.Event.toLowerCase().includes(lowerCaseSearchText)
      );
    });
    setFilteredData(newData);
  };

  return (
    <ErrorBoundary> {/* errorBoundary added here */}
      <section id="schedule">
        <h1>Weekly Schedule</h1>
        <div className="schedule-container">
         {/* Render the SearchBar component */}
         <SearchBar placeholder="Search by Day, Time, or Event" onSearch={handleSearch} />
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
