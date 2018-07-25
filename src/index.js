import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux'
import store, { history } from './store'
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <App />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
