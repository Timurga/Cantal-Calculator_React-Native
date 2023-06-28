import * as React from "react"
import Svg, { Rect, Circle } from "react-native-svg"

function DotsSVG(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={30} height={30} rx={15} fill="#E9F4DF" />
      <Circle cx={20.6} cy={15} r={1.4} fill="#0B4028" />
      <Circle cx={15} cy={15} r={1.4} fill="#0B4028" />
      <Circle cx={9.4} cy={15} r={1.4} fill="#0B4028" />
    </Svg>
  )
}

export default DotsSVG
