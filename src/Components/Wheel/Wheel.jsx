import React, {useRef} from "react";
import { useState } from "react";
import { useEffect } from "react";
import style from './Wheel.module.css';


const Wheel = (props) => {    

    const markerRef = useRef(null);
    const elementRef = useRef(null)
    const wheelRef = useRef(null);

    const [winners, setWinners] = useState([]);

    const [items, setItems] = useState([
        {
            name: ''
        }
    ])

    // const pushItems = () => {
    //     const randomValue = Math.floor(Math.random() * (10 - 5) + 5);

    //     return randomValue;
    // }

    // setItems(pushItems());

    // pushItems();

    const checkSpinningState = () => {
        props.handleSpinningState();
    }

    useEffect(() => {
        wheelRef.current.addEventListener('transitionend', () => {
          const elementPosition = elementRef.current.getBoundingClientRect();
          const markerPosition = markerRef.current.getBoundingClientRect();
          const elementPositionLeft = Math.floor(elementPosition.left + (elementPosition.width / 2));
          const markerPositionLeft = Math.floor(markerPosition.left);
          const positionsDifference = markerPositionLeft / elementPositionLeft;


          if (positionsDifference >= 0.90 && positionsDifference <= 1.1) {
            console.log('WINNER')
          }
          else {
            console.log("LOOSER")
          }
            console.log(positionsDifference, markerPositionLeft, elementPositionLeft);
        })
    }, [])

    return (
        <div className="relative">
            <div className={style.wheelPointer} style={{zIndex: '5'}} ref={markerRef}>
            </div>
            <div className={style.wheel} ref={wheelRef} onTransitionEnd={checkSpinningState} style={{transform: `rotate(${props.wheelAngle}deg)`, transition: 'transform 5s ease'}}>
            <div ref={elementRef} className="text-black text-3xl absolute top-[calc(50% - 1rem)] left-1/2 text-center z-20 -translate-x-1/2" >
               element
            </div>
            
        </div>
        <div>
        </div>
        </div>
    )
}

export default Wheel;