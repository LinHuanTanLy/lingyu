import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.less"
import "./assets/css/common.less"
import AppRouter from "./router/router";
import "./assets/iconfont/iconfont.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <AppRouter></AppRouter>
  </React.StrictMode>
);

