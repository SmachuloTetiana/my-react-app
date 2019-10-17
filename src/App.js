import React, { Component } from 'react';
import './App.css';
import banner from './images/banner.jpg';
import Banner from './Containers/Banner';
import Menu from './Containers/Navigation';

class App extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
      images: [
        {
          id: 1,
          src: banner,
          checked: false,
          title: 'Banner 1'
        },
        {
          id: 2,
          src: banner,
          checked: false,
          title: 'Banner 2'
        },
        {
          id: 3,
          src: banner,
          checked: false,
          title: 'Banner 3'
        },
        {
          id: 4,
          src: banner,
          checked: false,
          title: 'Banner 4'
        }
      ]
    }
  }

  checkedChanged = event => {
    const id = +event.target.id;

    this.setState(prevState => {    
      const images = prevState.images.map(item => (
        item.id === id ? {...item, checked: !item.checked } : item
      ))

      return {
        counter: images.filter(item => item.checked).length,
        images
      }
    })
  }

  deleteChecked = () => {
    this.setState(prevState => {
      return {      
        counter: 0,  
        images: prevState.images.filter(item => !item.checked)
      }
    })
  }


  render() {
    return (
      <div className="container">
        <Menu counter={this.state.counter} click={this.deleteChecked} />

        <div className="row">          
          <div className="col-4">
            {
              this.state.images.map(item => {
                return <Banner 
                          key={item.id} 
                          id={item.id}
                          src={item.src} 
                          title={item.title} 
                          changed={this.checkedChanged}>
                            {item.title}
                        </Banner>
              })
            }
          </div>
      </div>
    )
  }
 
}

export default App;
