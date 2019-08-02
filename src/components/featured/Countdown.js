import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';



const Countdown = () => {
    const [date, setDate] = useState('Aug, 4, 2020');
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [mins, setMins] = useState('');
    const [secs, setSecs] = useState('');


    const timeUntilDate = Date.parse(date) - Date.parse(new Date())

    const getTime = () => {
        const time = Date.parse(date) - Date.parse(new Date())
        if (time < 0)
            return (
                <div className='countdown_top'>
                    Awesomeness was awesome
                </div>
            )
        else {
            const secs = Math.floor((time / 1000) % 60)
            const mins = Math.floor((time / 1000 / 60) % 60)
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
            const days = Math.floor(time / (1000 * 60 * 60 * 24))

            setDays(days)
            setHours(hours)
            setMins(mins)
            setSecs(secs)
        }
    }

    useEffect(() => {
        setInterval(() => getTime(setDate('Aug, 4, 2020')), 1000)
    })

    const countdownElement =
        <div className='countdown_bottom'>
            {[{ name: 'Days', value: days }, { name: 'Hours', value: hours }, { name: 'Min', value: mins }, { name: 'Sec', value: secs }].map(obj =>
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

    return (
        <Slide left delay='1000'>
            <div className='countdown_wrapper'>
                {timeUntilDate < 0 ?
                    <div className='countdown_top'>Awesomeness was awesome</div>
                    :
                    <>
                        <div className='countdown_top'>
                            Awesomeness starts in
                        </div>
                        {countdownElement}
                    </>
                }



            </div>
        </Slide>
    );
};

export default Countdown;