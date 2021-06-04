import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import ThemComnextProvider from './Context/Them';

axios.defaults.baseURL = 'https://jsonplaceholder.ir'
axios.defaults.headers.post['Contetnt-Type'] = 'application/json';



ReactDOM.render(
    <ThemComnextProvider>
        <App />
    </ThemComnextProvider>, document.getElementById('root'));

serviceWorker.unregister();
