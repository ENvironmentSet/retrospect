import React, { useCallback, useState } from 'react';

import { Alert } from '@react95/core';

function NotImplementedAlert({ onClose }) {
  return (
    <Alert
      title='Retrospect'
      type='info'
      message='This feature is not implemented yet.'
      closeAlert={onClose}
      buttons={[
        {
          value: 'OK', onClick: onClose
        }
      ]}
      css={`
        position: relative;
        z-index: 1;
      `}
    />
  );
}

export function useNotImplementedAlert(status = false) {
  const [alertVisibility, setVisibility] = useState(status);
  const showAlert = useCallback(() => setVisibility(true), []);
  const closeAlert = useCallback(() => setVisibility(false), []);

  return [showAlert, closeAlert, () => alertVisibility && <NotImplementedAlert onClose={closeAlert} />];
}