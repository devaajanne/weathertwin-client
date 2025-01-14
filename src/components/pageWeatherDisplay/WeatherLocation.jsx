import React from "react";

export default function WeatherLocation({ location }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Lat</th>
            <th>Lon</th>
            <th>City</th>
            <th>Country code</th>
            <th>Weather</th>
            <th>Temp</th>
          </tr>
        </thead>
        <tbody>
          {location != null && (
            <tr>
              {Object.values(location).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
