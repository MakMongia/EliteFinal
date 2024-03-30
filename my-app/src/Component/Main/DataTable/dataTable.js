import React from 'react';
import './tableStyle.css';// Import the CSS file for styling the table
import ErrorBoundary from '../../errorBoundary'; // Import Error Boundary

function DataTable({ data }) { // Import date from JSON to display on the table
  return (
    <ErrorBoundary> {/* errorBoundary added here */}
      <table className="table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </ErrorBoundary> /* errorBoundary ends here */
  );
}

export default DataTable;
