import React from 'react';
import './App.css';
import FetchData from './components/FetchData'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <FetchData />
        </header>
      </div>
    </Provider>
  );
}

export default App;