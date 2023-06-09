import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CalculatingTabSVG = (props) => {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#198C4F"
            {...props}
        >
            <Path
                d="M18.5 9.75v9.5a1.123 1.123 0 01-1.123 1.123H4.623A1.121 1.121 0 013.5 19.25v-9.5M11 6.625v13.75M3.5 12.875h14.868M7.25 7.875v2.5M6 9.125h2.5M8.5 15.375l-2.5 2.5M6 15.375l2.5 2.5M13.5 9.125H16M13.5 15.375H16M13.5 17.875H16M1.625 7.875L11 1.625l9.375 6.25"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default CalculatingTabSVG;
