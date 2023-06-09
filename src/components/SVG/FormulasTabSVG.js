import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FormulasTabSVG = (props) => {
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
                d="M5.605 1.625h8.75M13.105 7.875v-6.25h-6.25v6.25l-5.614 8.637a2.5 2.5 0 002.092 3.863h13.29a2.5 2.5 0 002.096-3.863l-5.614-8.637zM4.417 11.625h11.125M11.855 15.375h2.5M13.105 14.125v2.5M13.105 4.125h-2.5M13.105 6.625h-2.5"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M5.605 17.563a.312.312 0 110-.625M5.605 17.563a.312.312 0 100-.625M8.105 15.063a.312.312 0 110-.626M8.105 15.063a.312.312 0 100-.626"
                strokeWidth={1.5}
            />
        </Svg>
    )
}

export default FormulasTabSVG;
