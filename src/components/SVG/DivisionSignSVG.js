import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function DivisionSignSVG(props) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.025 9h16.2"
        stroke="#0B4028"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle cx={9.125} cy={14.5} r={1.5} fill="#0B4028" />
      <Circle cx={9.125} cy={3.5} r={1.5} fill="#0B4028" />
    </Svg>
  )
}

export default DivisionSignSVG
