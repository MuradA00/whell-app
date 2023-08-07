import React, {useEffect, useRef} from "react";
import '../../index.css';

const Panel = (props) => {

    const handleWheel = () => {
        props.rotateHandler();
    }

    const soundOffHandler = () => {
        props.disableSoundFunction();
    }

    return (
        <div className="text-white flex flex-col">
            <h1 className="text-3xl font-bold uppercase text-center">Panel</h1>
            <button disabled={!props.spinningState} onClick={handleWheel} className="w-full flex items-center justify-center py-2 px-4 text-black rounded-sm bg-white font-semibold text-xl uppercase active:brightness-75 mt-auto disabled:brightness-50 disabled:cursor-default">
                Wheel it
            </button>        
        </div>
    )
}

export default Panel;