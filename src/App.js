import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="segmenter">
        <div className="segmenter__background"></div>
        <div className="segmenter__pieces" style={{
            perspective: `400px`
          }}>
          <Motion defaultStyle={{ z: 0 }} style={{ z: spring(20) }}>
            {({ z }) =>
              <div className="segmenter__wrap" style={{
                transform: `translateZ(${z}px)`
              }}>
                <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
                  {({ opacity }) =>
                    <div className="segmenter__shadow" style={{
                      top: `12%`,
                      left: `70%`,
                      width: `20%`,
                      height: `10%`,
                      opacity
                    }}></div>
                  }
                </Motion>
                <div className="segmenter__box" style={{
                  clipPath: `polygon(70% 12%, 90% 12%, 90% 22%, 70% 22%)`
                }}></div>
              </div>
            }
          </Motion>
        </div>
      </div>
    );
  }
}

export default App;
