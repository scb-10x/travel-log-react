/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

export default function TravelLog(props) {
  const { data } = props;
  const [travelLog, setTravelLog] = useState([]);

  useEffect(() => {
    setTravelLog(data);
  }, []);

  return (
    <>
      <div style={{ display: 'flex', marginTop: 8 }}>
        <span style={{ flex: 1, fontWeight: 'bold' }}>Passenger Name</span>
        <span style={{ flex: 1, fontWeight: 'bold' }}>Station</span>
        <span style={{ flex: 1, fontWeight: 'bold' }}>Created At</span>
        <span style={{ flex: 1, fontWeight: 'bold' }}>Type</span>
      </div>
      {travelLog.map((record) => (
        <div
          key={`${record.name}-${record.station}-${record.time}`}
          style={{ display: 'flex', marginTop: 8 }}
        >
          <span style={{ flex: 1 }}>{record.passengerName}</span>
          <span style={{ flex: 1 }}>{record.station}</span>
          <span style={{ flex: 1 }}>{record.createdAt}</span>
          <span style={{ flex: 1 }}>{record.type}</span>
        </div>
      ))}
    </>
  );
}
