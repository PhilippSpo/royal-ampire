import React, { Component } from 'react'
import Header from './Header'
import Event from './Event'
import Footer from './Footer'
import ResponsiveContainer from './Container'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ResponsiveContainer>
          <Event/>
        </ResponsiveContainer>
        <Footer/>
      </div>
    );
  }
}

export default App;
