import React, { useState } from 'react';
import DataTable from '../DataTable/dataTable';
import eventsData from './eventsData.json';
import SearchBar from '../searchBar/searchBar'; // Import the SearchBar component
import '../DataTable/tableStyle.css';

function Events() {
  const [filteredData, setFilteredData] = useState(eventsData);

  const handleSearch = (searchText) => {
    const newData = eventsData.filter((item) => {
      // Search logic
      const eventName = item['Event Name'].toLowerCase();
      const date = item['Date'].toLowerCase();
      const searchLowerCase = searchText.toLowerCase();
      return eventName.includes(searchLowerCase) || date.includes(searchLowerCase);
    });
    setFilteredData(newData);
  };

  return (
    <section id="events">
      <h1>Upcoming Events</h1>
      <SearchBar placeholder={"Search by Event Name and Date"} onSearch={handleSearch} />
        {filteredData.length > 0 ? (
          <DataTable data={filteredData} />
        ) : (
          <p><strong>No events match your search criteria. Please try searching for a different event.</strong></p>
        )}
    </section>
  );
}

export default Events;
