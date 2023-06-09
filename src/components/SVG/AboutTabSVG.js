import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AboutTabSVG = (props) => {
    return (
        <Svg
            width={20}
            height={22}
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#198C4F"
            {...props}
        >
            <Path
                d="M4.17 14.17a4.011 4.011 0 000 5.66 4.011 4.011 0 005.66 0 4.011 4.011 0 000-5.66c-1.6-1.56-4.102-1.56-5.66 0zM12.881 6.881a2.987 2.987 0 000 4.238 2.987 2.987 0 004.238 0 2.987 2.987 0 000-4.238c-1.175-1.175-3.098-1.175-4.238 0zM3.028 2.023c-1.37 1.364-1.37 3.554 0 4.954 1.371 1.364 3.609 1.364 4.944 0a3.497 3.497 0 000-4.954C6.637.66 4.399.66 3.028 2.023z"
                
                strokeWidth={1.5}
            />
        </Svg>
    )
}

export default AboutTabSVG;
