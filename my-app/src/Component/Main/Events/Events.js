// Events.js
import React from 'react';
import eventsData from './eventsData.json';

function Events() {
  return (
    <section id="events">
      <h1>Upcoming Events</h1>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {eventsData.map((event, index) => (
            <tr key={index}>
              <td>{event.eventName}</td>
              <td>{event.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Events;
