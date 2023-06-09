import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ClearButtonSVG(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M18.692 17.083H7.41a1.25 1.25 0 01-.967-.458l-4.926-6.02a.624.624 0 010-.793l4.926-6.02a1.25 1.25 0 01.967-.459h11.282a1.25 1.25 0 011.25 1.25v11.25a1.25 1.25 0 01-1.25 1.25z"
        stroke="#0B4028"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.943 7.083l6.25 6.25M16.192 7.083l-6.25 6.25"
        stroke="#0B4028"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ClearButtonSVG
