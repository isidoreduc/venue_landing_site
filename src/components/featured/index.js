import React from 'react';
import Slider from './Carousel'

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Slider />

            <div className='artist_name'>
                <div className='wrapper'>
                    Rammstein
                    <br />
                    <span style={{
                        fontFamily: 'Righteous',
                        textTransform: 'lowercase'
                    }}>
                        aarhus, dk
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Featured;