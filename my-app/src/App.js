import React, { useState } from 'react';
import Header from './Component/Header/Navigation/Navigation';
import Home from './Component/Main/Home/Home';
import Schedule from './Component/Main/Schedule/Schedule';
import Program from './Component/Main/Program/Program';
import Events from './Component/Main/UpcomingEvents/upcomingEvents';
import ContactUs from './Component/Main/ContactUs/ContactUs';
import Merchandise from './Component/Main/Merchandise/Merchandise'; 
import News from './Component/Main/News/News';
import Footer from './Component/Footer/Footer';
import ScrollToTopButton from './Component/Main/ScrollToTop/ScrollToTop';
import Weather from './Component/Main/Weather/Weather';


// Define allData directly in App.js
const allData = [
  { id: 1, title: 'Home', component: Home },
  { id: 2, title: 'Schedule', component: Schedule },
  { id: 3, title: 'Program', component: Program },
  { id: 4, title: 'Events', component: Events },
  { id: 5, title: 'News', component: News },
  { id: 6, title: 'Weather', component: Weather },
  { id: 7, title: 'Merchandise', component: Merchandise },
  { id: 8, title: 'Contact Us', component: ContactUs },
  { id: 8, title: 'Footer', component: Footer }
  // Add more items as needed
];

function App() {
  // Define your state variables for search
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

const handleSearch = (query) => {
  setSearchText(query);
  const results = allData.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    (item.component && item.component.toString().toLowerCase().includes(query.toLowerCase()))
  );
  setSearchResults(results);
  console.log("Search Text:", query); // Log the search text
  console.log("Search Results:", results); // Log the search results
};


  // Function to render component based on title
  const renderComponent = (title) => {
    const component = allData.find(item => item.title === title);
    if (component) {
      return React.createElement(component.component, { id: `section-${component.id}` });
    }
    return null;
  };

  return (
    <div className="App">
      {/* Pass searchResults, setSearchText, and handleSearch to the Header component */}
      <Header searchResults={searchResults} setSearchText={setSearchText} handleSearch={handleSearch} setSearchResults={setSearchResults} />
      {/* Render components dynamically */}
      {allData.map((item, index) => (
        <React.Fragment key={index}>
          {renderComponent(item.title)}
        </React.Fragment>
      ))}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
