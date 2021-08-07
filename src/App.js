import React from 'react';
import './App.css';
import NavBar  from './components/layouts/NavBar';
import { Search }  from './components/users/Search';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

class App extends React.Component {
  state = {
    users: [],
    loading : false
  }

  async componentDidMount(){
    // set state for loading 
    this.setState({loading : true});
    const res = await fetch('https://api.github.com/users').then(function(response){
      return response.json();
    });
    // reset state for loading and users
    this.setState({users: res, loading : false});
  }

  //search users
  searchUsers = async (text) => {
    // set state for loading 
    this.setState({loading : true});
    const res = await fetch(`https://api.github.com/search/users?q=${text}`).then(function(response){
      return response.json();
    });
    console.log(res);
    // reset state for loading and users
    this.setState({users: res.items, loading : false});
  }

  render() {
    return (
      <div>
        <NavBar title="Github Finder"></NavBar>
        <Search searchUsers={this.searchUsers}/>
        <Users loading={this.state.loading} users={this.state.users}></Users>
      </div>
    )
  };
}

export default App;