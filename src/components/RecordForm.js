import React, { useCallback, useState } from 'react';

import styles from './RecordForm.module.css';

const initialData = {
  passengerName: '',
  station: '',
  createdAt: '',
};

export default function RecordForm(props) {
  const { btnTitle, onSubmit } = props;
  const [data, setData] = useState(initialData);

  const handleSubmit = useCallback(() => {
    onSubmit(data);
    setData(initialData);
  }, [data, onSubmit]);

  const handleChange = useCallback(({ target }) => {
    setData((prev) => ({ ...prev, [target.id.split('-')[1]]: target.value }));
  }, []);

  return (
    <div className={styles.formInput}>
      <input
        id={`${btnTitle}-passengerName`}
        className={styles.input}
        placeholder="Name"
        value={data.passengerName}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        id={`${btnTitle}-station`}
        className={styles.input}
        placeholder="Station"
        value={data.station}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        id={`${btnTitle}-createdAt`}
        className={styles.input}
        value={data.createdAt}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button onClick={handleSubmit}>{btnTitle}</button>
    </div>
  );
}
