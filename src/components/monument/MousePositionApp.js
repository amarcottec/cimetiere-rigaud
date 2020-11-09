import React from 'react'
import {useMousePosition} from '../../useMousePosition'

export default function MousePositionApp() {
    const position = useMousePosition();
    return (
        <div>
            {position.x}:{position.y}
        </div>
    );
};
