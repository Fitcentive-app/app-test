import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    fill={props.fill ?? "none"}
    viewBox='0 0 24 24'>
    <Path
      fill={props.fill ?? "white"}
      d='M23.7941 0.205977C23.5952 0.00703965 23.2968 -0.0541323 23.0358 0.0503053L0.442008 9.08773C0.183493 9.19113 0.0103837 9.43732 0.000446172 9.71562C-0.00944444 9.99387 0.145805 10.2517 0.396305 10.3732L9.30573 14.6942L13.6268 23.6037C13.7446 23.8467 13.9907 24 14.2592 24C14.2676 24 14.276 23.9999 14.2844 23.9995C14.5626 23.9896 14.8088 23.8165 14.9122 23.558L23.9497 0.964322C24.0541 0.703134 23.993 0.404868 23.7941 0.205977ZM2.44188 9.80238L20.3774 2.6282L9.6886 13.317L2.44188 9.80238ZM14.1976 21.5581L10.683 14.3113L21.3719 3.62251L14.1976 21.5581Z'
    />
  </Svg>
);
export { SvgComponent as InviteSvg };
