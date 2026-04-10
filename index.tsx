import React, { useEffect, useState } from 'react';
import './TrainSchedulePage.css'; // Assuming we'll have a separate CSS file for animations.

const TrainSchedulePage = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="train-schedule-page">
            <h1>Train Schedule</h1>
            <h2>{currentTime.toUTCString()}</h2>
            <div className="train-animation">
                {/* Example of animated train representation */}
                <div className="train">🚂</div>
            </div>
            <div className="schedule">
                <h3>Upcoming Trains:</h3>
                <ul>
                    <li>Train A - Departing at 22:00 UTC</li>
                    <li>Train B - Departing at 22:30 UTC</li>
                    <li>Train C - Departing at 23:00 UTC</li>
                </ul>
            </div>
        </div>
    );
};

export default index;
