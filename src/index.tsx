import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MemoryRouter } from 'react-router-dom'

ReactDOM.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
  ,
  document.getElementById('root')
);