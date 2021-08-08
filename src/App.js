import React from 'react';
import './App.css';
import Alert from './components/layouts/Alert';
import NavBar  from './components/layouts/NavBar';
import  Search   from './components/users/Search';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import User from './components/users/User';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Fragment } from 'react';
import About from '../src/components/pages/About';

class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading : false,
    alert: null
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


  //get single user details 
  getUser = async (username) => {
    // set state for loading 
    this.setState({loading : true});
    const res = await fetch(`https://api.github.com/users/${username}`).then(function(response){
      return response.json();
    });
    // reset state for loading and users
    this.setState({user: res, loading : false});
  }

  //search users
  searchUsers = async (text) => {
    // set state for loading 
    this.setState({loading : true});
    const res = await fetch(`https://api.github.com/search/users?q=${text}`).then(function(response){
      return response.json();
    });
    // reset state for loading and users
    this.setState({users: res.items, loading : false});
  }

  //Set Alert
  setAlert = (message, type) => {
    this.setState({ alert : {message : message, type : type}});
    setTimeout(function(){
        const alertElement = document.getElementById("alert-container");
        alertElement.className += " alert-message ";
        alertElement.style.display = 'none';
    }, 1500);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar title="Github Finder"></NavBar>
          <Alert alert={this.state.alert}></Alert>
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} clearUsers={this.componentDidMount.bind(this)} setAlert={this.setAlert}/>
                  <Users loading={this.state.loading} users={this.state.users}></Users>
                </Fragment>
              )}>

              </Route>
              <Route exact path="/about" component={About}/>
              <Route exact path="/user/:login" render={props => (
                <User { ...props } getUser={this.getUser} user={this.state.user} loading={this.state.loading}/>
              )}></Route>
            </Switch>          
        </BrowserRouter>
      </div>
    )
  };
}

export default App;