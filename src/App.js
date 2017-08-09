import React, { Component } from 'react';
import './App.css';
import ListOfUsers from './components/ListOfUsers';

const users = [
  { name: 'jerry', job: 'comedian' },
  { name: 'george', job: 'architecht'},
  { name: 'elaine', job: 'JP assistant'},
  { name: 'kramer', job: 'trust-funder'},
]


const App = (props) => {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Redux Practice App</h2>
          <ListOfUsers
            users={users}
          />
        </div>
      </div>
    );
}

export default App;
