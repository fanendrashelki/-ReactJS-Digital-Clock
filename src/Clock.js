import {  useState } from "react";

function Clock() {
    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time)

    const Updatetime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    };

    let date = new Date();
    let day = date.getDay()
    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



    setInterval(Updatetime, 1000)
    return (
        <>
            <div className="bg">
                <div className="clock">
                    <h1>{ctime}</h1>
                    <h1>{`${days[day]}, ${d} ${month[m]}, ${y}`}</h1>
                </div>

            </div>

        </>
    );
}


export default Clock;