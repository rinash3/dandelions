import React from 'react';
export default class Background extends React.Component {
    render() {
        return (
            <video className='background-width' autoPlay loop muted>
                <source src={this.props.src} type='video/mp4' />
            </video>
        )
    }
}
