import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const SvgComponent = (props: any) => (
  <Svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width={props.width ?? "202"}
    height={props.height ?? "202"}
    fill={props.fill ?? "#00A193"}
    viewBox='0 0 202 202'>
    <Rect
      width='202'
      height='202'
      rx='40'
      fill={props.background ?? "#00A193"}
    />
    <Path
      fill={props.textFill ?? "white"}
      d='M48.0176 154.927V40.7727C48.0176 36.9882 49.9966 34.834 53.9546 34.834H98.3273C102.285 34.834 104.264 36.9882 104.264 40.7727V43.839C104.264 47.7981 102.285 49.7777 98.3273 49.7777H64.9362V98.044H79.1774C83.1354 98.044 85.1144 100.198 85.1144 103.983V107.224C85.1144 111.008 83.1354 113.162 79.1774 113.162H64.9362V154.908C64.9362 158.692 62.7826 160.846 58.9992 160.846H53.9546C49.9966 160.846 48.0176 158.692 48.0176 154.908V154.927Z'
    />
    <Path
      fill={props.textFill ?? "white"}
      d='M143.302 97.4423H148.347C152.305 97.4423 154.284 95.2881 154.284 91.5037V78.8112C154.284 63.4405 146.038 55.0371 131.971 52.8053V40.7727C131.971 36.9882 129.818 34.834 126.034 34.834H120.99C117.206 34.834 115.053 36.9882 115.053 40.7727V52.8053C100.986 55.0371 92.7402 63.4405 92.7402 78.8112V135.015C92.7402 151.143 100.986 159.022 115.053 161.079V171.52C115.053 175.305 117.206 177.459 120.99 177.459H126.034C129.818 177.459 131.971 175.305 131.971 171.52V161.06C146.038 158.964 154.284 150.987 154.284 135.015V119.276C154.284 115.491 152.305 113.337 148.347 113.337H143.302C139.519 113.337 137.365 115.491 137.365 119.276V131.774C137.365 142.759 132.689 146.718 123.512 146.718C114.335 146.718 109.659 142.759 109.659 131.774V82.0522C109.659 71.0676 114.335 67.1085 123.512 67.1085C132.689 67.1085 137.365 71.0676 137.365 82.0522V91.5037C137.365 95.2881 139.519 97.4423 143.302 97.4423Z'
    />
  </Svg>
);

export { SvgComponent as OnboardingSvg };
