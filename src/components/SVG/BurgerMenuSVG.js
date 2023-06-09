import React from 'react';
import Svg, { Rect, Path } from "react-native-svg"

const BurgerMenuSVG = (props) => {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={30} height={30} rx={15} fill="#92C46D" />
            <Path
                d="M10 18.154h9.965M10 15.077h9.965M10 12h9.965"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default BurgerMenuSVG;
