import React from 'react';

function SearchLogic({ searchResults }) {
  function handleClick(id) {
    const sectionIds = {
      1: 'home',
      2: 'schedule',
      3: 'program',
      4: 'events',
      5: 'news',
      6: 'weather',
      7: 'merch',
      8: 'contactus',
      9: 'footer',
    };
    const sectionId = sectionIds[id];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <>
      {searchResults && searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result, index) => (
            <div key={index} onClick={() => handleClick(result.id)}>
              {result.title}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SearchLogic;
