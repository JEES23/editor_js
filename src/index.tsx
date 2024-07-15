import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import E_setting from './E_setting';
import E_setting2 from './E_setting2';
import E_cancel from './E_cancel';
import A_notification from './A_notification';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <E_setting />
    <E_cancel />
    <A_notification />
  </React.StrictMode>
);

