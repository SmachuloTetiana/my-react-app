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
    const id = event.target.id;

    this.setState(prevState => {  
      const images = prevState.images.map(item => (
        item.id === +id ? {...item, checked: !item.checked } : item
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

  handleAllChecked = (event) => {
    let images = this.state.images;
    images.forEach(item => item.checked = event.target.checked);

    this.setState({
      images,
      counter: images.filter(item => item.checked).length
    })
  }

  addActiveClass = () => {
    let itemChecked = this.state.images.filter(item => item.checked).length > 0;
    return itemChecked ? 'active' : '';
  }

  render() {
    return (
      <div className="container" style={{marginTop: '30px'}}>
        <Menu 
          counter={this.state.counter} 
          click={this.deleteChecked} 
          checked={this.handleAllChecked}
          changed={this.checkedChanged} />

        <div className="row">
          {
            this.state.images.map(item => {
              return <Banner 
                        className={this.addActiveClass()}
                        key={item.id} 
                        id={item.id}
                        src={item.src} 
                        title={item.title}   
                        checked={item.checked}         
                        changed={this.checkedChanged}>
                          <p>Sent by admin: <span>No</span></p>
                          <p>Installed by user: <span>No</span></p>
                          <p>Last edited: <span>03.04.2019 16:43</span></p>
                      </Banner>
            })
          }
        </div>
      </div>
    )
  }
 
}

export default App;
