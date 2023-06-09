import React from 'react';
import Svg, { Rect, Path } from "react-native-svg"

const PlusSVG = (props) => {
    return (
        <Svg
            width={31}
            height={30}
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={0.5} width={30} height={30} rx={15} fill="#92C46D" />
            <Path
                d="M15.5 10.5v9M11 15h9"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default PlusSVG;
