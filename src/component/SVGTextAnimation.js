import React, { Component } from 'react';
import helper from '../utils/helper';

class SVGTextAnimation extends Component{

  componentWillMount(){
    this.wrapper = null;
    this.props = {
      paths: [
        'M42.7,2.9c0.2,1.7-0.8,3-1.4,4.4c-2.4,5.5-4.7,11-7,16.6c-0.3,0.7-0.6,1.4-1.1,1.9',
        'M42.7,5.3c1.3,1.3,1.7,3.2,2.4,4.8c1.9,4.4,3.8,8.8,5.6,13.2c0.2,0.6,0.4,1.2,0.4,1.8',
        'M51.4,25.2c-0.7,0.3-1.5,0.3-2.3,0.3c-3.4,0-6.7,0-10.1,0c-0.8,0-0.6,0.4-0.6,0.7',
        'M58.1,5.2c-0.5,0.5-0.5,1.1-0.5,1.7c0,6.2,0,12.4,0,18.6',
        'M57.7,3.7c0.4,1.6,1.8,2.4,2.6,3.7c3.2,5.4,6.5,10.7,9.8,16c0.3,0.4,0.6,0.8,1.1,1',
        'M71.8,3.7c0,6.2,0,12.4,0,18.6c0,0.3,0.1,0.6,0,0.8c-0.7,1-0.2,2.1-0.1,3.1',
        'M80.5,3.5c0,4.6,0,9.1-0.1,13.7c0,2.8,0,5.5,0,8.3',
        'M101.3,25.5c-3.4,0-6.9,0-10.3,0c-1.5,0-1.7-0.2-1.7-1.7c0-6.5,0-13,0-19.4c0-0.6-0.1-0.8-0.7-0.7',
        'M127.5,10.6c1.6-0.2,2.6-1.4,3.8-2.3c0.7-0.5,1.3-1.2,2.1-1.9c-0.8-1.6-2.2-2.4-3.7-2.7c-2-0.5-4.1-0.5-6.1-0.1c-2.3,0.5-3.9,1.9-4.6,4c-1.5,4.7-1.6,9.5,0.2,14.3c1,2.8,3.2,3.7,6,4c2.8,0.2,5.5-0.3,7.9-1.7',
        'M133.3,16.7c0,1.8,0.2,3.6,0,5.4c-0.2,2.1,0.2,4.2-0.2,6.4c-0.6,3.5-2.6,4.7-5.3,4.9c-1.6,0.1-3.3,0-4.9,0',
        'M141,3.2c0,3.8,0,7.6,0,11.4c0,2.3,0.3,4.5,1,6.7c1.2,3.7,4.3,4.8,6.8,4.7c3.8-0.2,5.6-1.7,6.7-5.1c0.5-1.6,0.7-3.2,0.7-4.8c0.1-4.1,0.1-8.2,0.1-12.2',
        'M174.3,16.7c0.8-0.5,1.7-1,2.5-1.6c1.8-1.4,2.4-3.4,2.1-5.5c-0.3-2.8-2.1-4.5-4.8-5.3c-1.3-0.4-2.7-0.7-4.1-0.6c-1.3,0-2.6-0.1-4-0.1c-1.3,0-1.4,0.1-1.4,1.4c0,9.7,0,19.4,0,29',
        'M191.1,4.1c0,0.4,0.1,0.9,0.1,1.3c0,6.4,0,12.7,0,19.1c0,0.6-0.1,1.1-0.1,1.7',
        'M199.6,3.7c-1.9,0-3.8,0-5.8-0.1c-1.6,0-3.2,0.2-4.8,0c-1.5-0.2-3.1-0.1-4.7,0c-0.7,0-1.4,0.1-2.2,0.1',
        'M211.5,5.3c-1.3,1.2-1.6,2.9-2.3,4.4c-2.2,5-4.3,10.1-6.4,15.1c-0.1,0.3-0.4,0.6-0.6,0.8',
        'M211.6,2.9c0,1.3,0.2,2.5,0.9,3.8c1.7,3.4,3,6.9,4.5,10.4c0.9,2,1.8,4.1,2.6,6.1c0.3,0.6,0.5,1.2,0.5,1.9',
        'M220.3,25.2c-0.7,0.3-1.5,0.3-2.3,0.3c-3.3,0-6.6,0-10,0c-0.5,0-1,0-0.8,0.7'
      ]
    };
    this.initialStyle = this.initialStyle.bind(this);
  }

  componentDidMount(){
    setTimeout(()=> this.wrapper.classList.add('animate-path'), 1000)
  }

  initialStyle(el){
     if(el){
        const transitionDuration = el.getAttribute('data-key') * 0.4,
              transitionDelay = el.getAttribute('data-key') * 0.2 + 0.3,
              length = el.getTotalLength();
              el.style.strokeDasharray = length;
              el.style.stroke = '#fff';
              el.style.strokeDashoffset = length;
              el.style.transitionDelay = `${transitionDelay}s`;
     }
  }

  render() {
    const {  paths } = this.props;
    return (
      <div ref={el => el ? this.wrapper = el : null} className="svgTextAnimation">
        <svg  viewBox="0 0 242.2 52.5">
          <g>
            {paths ? paths.map((path, key) => <path d={path} key={key} data-key={key} ref={this.initialStyle} />): null}
          </g>
        </svg>
      </div>
    )
  }
}

export default SVGTextAnimation;