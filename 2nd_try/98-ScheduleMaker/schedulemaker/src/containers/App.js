import React, { Component } from 'react';
import Users from '../components/Users/Users'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import './App.css';

const initialState = {
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        joined: ''
      }
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
    }})
  }  

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'users' || 'register' || 'schedulemaker') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="tc">
        <h1 className="f1">Bölüm Başkanlığı Sistemi</h1>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'users'
          ? <div>
              <Users />
              <SideDrawer />
            </div>
          : <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        }
      </div>
    );
  }
}

export default App;
