import React, { Component } from 'react';
import './App.css';
import Banner from './Containers/Banner';
import Menu from './Containers/Navigation';

class App extends Component {
  state = {
    banner: [
      {
        title: 'Banner 1'
      },
      {
        title: 'Banner 2'
      },
      {
        title: 'Banner 3'
      },
      {
        title: 'Banner 4'
      }
    ]
  }

  render() {
    return (
      <div className="container">
        <Menu />
        
        <div className="row">
          <Banner title={this.state.banner[0].title} />
          <Banner title={this.state.banner[1].title} />
          <Banner title={this.state.banner[2].title} />
          <Banner title={this.state.banner[3].title} />
        </div>
      </div>
    )
  }
 
}

export default App;
