import React from 'react';
import bgvideo from './background.mp4';

export default class Background extends React.Component {

    render() {
      const background={
        position:'fixed',
        left:'0',
        top:'0'
      }
        return (
            <video style={background} autoPlay loop muted>
                <source src={bgvideo} type='video/mp4' />
            </video>
        )
    }
}