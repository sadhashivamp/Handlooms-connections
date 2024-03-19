import React from 'react';
import Main from "../Assets/Main.gif"

export default function Background() {
    return (
        <div className="background-image" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${Main})`,
            backgroundSize: 'cover',
            backgroundSize: '100vw 100vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'blur(4px)',
            zIndex: -1,
        }}></div>
    )
}