import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { OpenAPI } from './6_shared/api/generated/game';
/*
import {ENV} from "./6_shared/env";
*/
import App from './1_app/App.tsx';
import './index.css';

OpenAPI.BASE = 'https://rc-revo-game-stage.herokuapp.com'; /*ENV.API_ENDPOINT*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
