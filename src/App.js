import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import './App.css';

const animate = (val) => spring(val, {
  stiffness: 53,
  damping: 27
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          top: 12,
          left: 70,
          width: 20,
          height: 10
        },
        {
          top: 12,
          left: 6,
          width: 30,
          height: 30
        },
        {
          top: 75,
          left: 15,
          width: 40,
          height: 20
        },
        {
          top: 30,
          left: 40,
          width: 40,
          height: 40
        }
      ]
    };
  }
  render() {
    return (
      <div className="segmenter">
        <div className="segmenter__background"></div>
        <div className="segmenter__pieces" style={{
            perspective: `400px`
          }}>
          { this.state.boxes.map(({ top, left, width, height }, key) =>
            <Motion key={key} defaultStyle={{ z: 0 }} style={{ z: animate(20) }}>
              {({ z }) =>
                <div className="segmenter__wrap" style={{
                  transform: `translateZ(${z}px)`
                }}>
                  <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: animate(1) }}>
                    {({ opacity }) =>
                      <div className="segmenter__shadow" style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        width: `${width}%`,
                        height: `${height}%`,
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
          ) }
        </div>
        <div className="segmenter__body">
          <Motion
            defaultStyle={{
              letterSpacing: 31,
              opacity: 0
            }}
            style={{
              letterSpacing: animate(12),
              opacity: animate(1)
            }}>
            { ({ letterSpacing, opacity }) =>
              <h1 style={{
                letterSpacing,
                opacity
              }}>SEGMENT EFFECT</h1>
            }
          </Motion>
        </div>
      </div>
    );
  }
}

export default App;
