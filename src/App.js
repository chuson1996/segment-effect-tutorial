import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="segmenter">
        <div className="segmenter__background"></div>
        <div className="segmenter__pieces">
          <div className="segmenter_wrap">
            <div className="segmenter__box" style={{
              clipPath: `polygon(70% 12%, 90% 12%, 90% 22%, 70% 22%)`
            }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
