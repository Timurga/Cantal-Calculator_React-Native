import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CrossSignSVG({stroke}) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1 1l11.959 12M12.959 1L1 13"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CrossSignSVG
