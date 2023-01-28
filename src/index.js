import react from 'react';
import reactDOM from 'react-dom';

import data from './data.json';
import App from './App';

reactDOM.render(<App team={data}/>, document.getElementById('root'));