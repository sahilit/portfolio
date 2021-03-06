import React from 'react'
//@ts-ignore
import Typewriter from 'typewriter-effect';

export default function Banner() {
    return (
        <div id="banner">
            <div className="heroImage">
                <div className="overlay" />
                <h1>
                    I am a
                <Typewriter
                        options={{
                            strings: ['Developer', 'Designer', 'Cyclist', 'Traveller'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
            </div>
        </div>
    );
}