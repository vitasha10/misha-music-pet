import React, { useState, useEffect } from "react";

const useAudio = url => {
    const [audio] = useState(typeof Audio !== "undefined" ? new Audio(url) : null);
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div className='btnDiv'>
            <button onClick={toggle}>{playing ? "Shatafuck up!" : "OMG are you crazy?"}</button>
        </div>
    );
};

export default Player;