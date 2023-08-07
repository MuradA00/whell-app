import React, {useState, useEffect, useRef} from "react";
import Panel from "../Panel/Panel";
import Wheel from "../Wheel/Wheel";
import sound from '../../assets/sounds/spin-sound.mp3'; 

const Home = () => {

    // const handleResize = (marker) => {
    //     const rect = pointerRef.current.getBoundingClientRect();
        
    //     return rect.marker;
    // }

    const [spinningState, setSpinningState] = useState(false);
    const audioRef = useRef(new Audio(sound));
    const [rotationAngle, setRotationAngle] = useState(0);    
    const animationEnds = !spinningState;

    let soundState = false;

    const handleSpinning = () => {
        const randomValue = Math.floor(Math.random(Math.PI) * (720 * 2));
        setRotationAngle(prev => prev + randomValue);

        setSpinningState(true);

        audioRef.current.play();
    }

    const handleWheelAnimationState = () => {
        setSpinningState(false);

        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        soundState = true;
    }

    spinningState ? console.log('Крутится') : console.log('Не крутится'); 

    return (
        <div className="h-screen bg-stone-900 justify-center items-center flex">            
            <div className="grid grid-cols-2 max-w-[75rem] gap-4 px-4 w-full">
                <Wheel wheelAngle={rotationAngle} handleSpinningState={handleWheelAnimationState}/>
                <Panel soundState={soundState} spinningState={animationEnds} rotateHandler={handleSpinning}/>
            </div>
        </div>
    )
}

export default Home;