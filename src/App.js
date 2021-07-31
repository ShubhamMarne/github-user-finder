import React from 'react';
import './App.css';
import NavBar  from './components/layouts/NavBar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar title="Github Finder"></NavBar>
        <Users></Users>
      </div>
    )
  };
}

export default App;