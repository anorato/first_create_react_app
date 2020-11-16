import React, {useState, useEffect} from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(10);
    const [initialTime, setInitialTime] = useState(10);
    const [beginningTime, setBeginningTime] = useState(new Date().getTime());

    let timeout;

    useEffect(()=>{
        setBeginningTime(new Date().getTime());
        console.log(beginningTime);
    },[]);



    useEffect(() => {
        if(counter>0){
            timeout = setTimeout(() => setCounter(counter - 1), 1000);
        }
    }, [counter]);

    return (
        <div>
            <p>Countdown: {counter}</p>
            <button onClick={()=>{
                clearTimeout(timeout);
                let endingTime = new Date().getTime();
                const points = (1000 * initialTime) - (endingTime-beginningTime);
                console.log(points);
            }}>Interrompi</button>
        </div>
    );
};

