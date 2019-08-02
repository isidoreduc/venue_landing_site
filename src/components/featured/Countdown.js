import React from 'react';
import Slide from 'react-reveal/Slide';



const Countdown = () => {
    return (
        <Slide left delay='1000'>
            <div className='countdown_wrapper'>
                <div className='countdown_top'>
                    Awesomeness starts in
            </div>

                <div className='countdown_bottom'>
                    {[{ name: 'Days', value: 23 }, { name: 'Hours', value: 22 }, { name: 'Min', value: 12 }, { name: 'Sec', value: 59 }].map(obj =>
                        <div className='countdown_item'>
                            <div className='countdown_time'>
                                {obj.value}
                            </div>
                            <div className='countdown_tag'>
                                {obj.name}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </Slide>
    );
};

export default Countdown;