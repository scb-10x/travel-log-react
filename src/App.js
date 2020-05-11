import React, { useCallback, useEffect, useState } from 'react';

import RecordForm from './components/RecordForm';
import TravelLog from './components/TravelLog';
import styles from './App.module.css';
import { travelLogService } from './services/travelLog';

function App() {
  const [travelLog, setTravelLog] = useState([]);

  const handleAddRecord = useCallback(
    (type) => (record) => {
      travelLog.push({ ...record, type });
      setTravelLog(travelLog);
    },
    [travelLog]
  );

  const printLogToConsole = useCallback(() => {
    console.log(travelLog);
  }, [travelLog]);

  useEffect(() => {
    const fetch = async () => {
      const data = await travelLogService.getTravelLog();
      setTravelLog(data);
    };

    fetch();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.form}>
        <span>Check In</span>
        <RecordForm
          onSubmit={handleAddRecord('check-in')}
          btnTitle="check in"
        />
      </div>

      <div className={styles.form} style={{ marginTop: 16 }}>
        <span>Check Out</span>
        <RecordForm
          onSubmit={handleAddRecord('check-out')}
          btnTitle="check out"
        />
      </div>

      <div style={{ marginTop: 24 }}>
        <TravelLog data={travelLog} />
      </div>
      <button onClick={printLogToConsole()} style={{ marginTop: 8 }}>
        print log to console
      </button>
    </div>
  );
}

export default App;
