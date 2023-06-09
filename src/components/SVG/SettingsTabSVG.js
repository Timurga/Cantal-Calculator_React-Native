import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SettingsTabSVG = (props) => {
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
                d="M7.925 9.683L7.05 8.85a3.792 3.792 0 01-5.058-5.075l1.191 1.183a1.261 1.261 0 001.784-1.783L3.783 1.992a3.808 3.808 0 014.317.741M14.183 12.367l.767.758a3.792 3.792 0 015.058 5.042l-1.191-1.184a1.261 1.261 0 00-1.784 1.784l1.184 1.183a3.807 3.807 0 01-4.317-.742 3.766 3.766 0 01-.733-4.3l-.775-.766M2.2 19.825a1.867 1.867 0 010-2.633l3.917-3.9a.616.616 0 01.883 0l1.767 1.758a.616.616 0 010 .875l-3.917 3.9a1.875 1.875 0 01-2.65 0zM14.825 1.992l5.183 5.166a1.25 1.25 0 010 1.759l-1.766 1.758a1.258 1.258 0 01-1.767 0l-5.183-5.167a1.25 1.25 0 010-1.758l1.766-1.758a1.241 1.241 0 011.767 0zM13.942 8.15L7.8 14.083"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SettingsTabSVG;
