import React from 'react';
import bgvideo from './background.mp4';

export default class Background extends React.Component {
    render() {
        return (
            <video className='background-width' autoPlay loop muted>
                <source src={bgvideo} type='video/mp4' />
            </video>
        )
    }
}
