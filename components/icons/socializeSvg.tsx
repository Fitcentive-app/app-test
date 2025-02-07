import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width={props.width ?? "25"}
    height={props.height ?? "24"}
    fill={props.fill ?? "none"}
    viewBox='0 0 25 24'>
    <Path
      fill={props.fill ?? "white"}
      d='M24.2943 18.9452L22.8781 14.824C23.5607 13.4286 23.9215 11.8767 23.9239 10.3152C23.9281 7.6002 22.8777 5.03309 20.9661 3.08681C19.0541 1.14015 16.5062 0.0443341 13.7918 0.00133215C10.9772 -0.0431461 8.33153 1.02747 6.34253 3.01642C4.42464 4.93427 3.36087 7.46262 3.32721 10.1645C1.43693 11.5877 0.321211 13.8066 0.324878 16.1766C0.32664 17.2857 0.576271 18.3882 1.04929 19.3852L0.0738666 22.2238C-0.0938077 22.7118 0.0286741 23.2416 0.393548 23.6065C0.650322 23.8633 0.988861 24 1.33702 24C1.4835 24 1.6317 23.9758 1.77623 23.9261L4.61488 22.9507C5.61183 23.4237 6.71431 23.6734 7.82341 23.6751C7.82741 23.6751 7.83122 23.6751 7.83522 23.6751C10.2406 23.675 12.4764 22.5306 13.8944 20.5939C15.37 20.5551 16.8301 20.1979 18.15 19.5522L22.2713 20.9683C22.443 21.0273 22.6191 21.0561 22.7932 21.0561C23.2069 21.0561 23.6092 20.8936 23.9144 20.5884C24.348 20.1548 24.4935 19.5252 24.2943 18.9452ZM7.83513 22.2238C7.83203 22.2238 7.82874 22.2238 7.82565 22.2238C6.84399 22.2223 5.86913 21.9803 5.00666 21.524C4.82932 21.4303 4.62112 21.414 4.43149 21.4792L1.52074 22.4794L2.52093 19.5687C2.58608 19.379 2.56989 19.1708 2.47607 18.9935C2.01976 18.131 1.77775 17.1562 1.77623 16.1745C1.7738 14.5954 2.38807 13.0987 3.46226 11.978C3.81313 14.1169 4.83256 16.088 6.41273 17.64C7.98123 19.1806 9.95284 20.1615 12.0802 20.4822C10.9569 21.5894 9.44272 22.2238 7.83513 22.2238ZM22.8881 19.5621C22.8468 19.6034 22.7979 19.6147 22.7428 19.5957L18.3308 18.0796C18.2542 18.0533 18.1745 18.0403 18.095 18.0403C17.9779 18.0403 17.8612 18.0686 17.7557 18.1245C16.496 18.7909 15.0725 19.1444 13.639 19.1465C13.6342 19.1465 13.63 19.1465 13.6252 19.1465C8.82203 19.1465 4.85456 15.2447 4.77846 10.4427C4.74013 8.02422 5.66007 5.75131 7.36877 4.04261C9.07747 2.33391 11.3508 1.4143 13.7689 1.4524C18.5756 1.52864 22.48 5.50344 22.4726 10.3129C22.4704 11.7464 22.117 13.17 21.4506 14.4296C21.3568 14.6069 21.3406 14.8151 21.4057 15.0048L22.9218 19.4168C22.9407 19.472 22.9293 19.5209 22.8881 19.5621Z'
    />
    <Path
      fill={props.fill ?? "white"}
      d='M17.9479 6.45117H9.30182C8.90104 6.45117 8.57617 6.77609 8.57617 7.17682C8.57617 7.5776 8.90109 7.90248 9.30182 7.90248H17.9479C18.3487 7.90248 18.6736 7.57756 18.6736 7.17682C18.6736 6.77609 18.3487 6.45117 17.9479 6.45117Z'
    />
    <Path
      fill={props.fill ?? "white"}
      d='M17.9479 9.43555H9.30182C8.90104 9.43555 8.57617 9.76047 8.57617 10.1612C8.57617 10.5619 8.90109 10.8869 9.30182 10.8869H17.9479C18.3487 10.8869 18.6736 10.5619 18.6736 10.1612C18.6736 9.76047 18.3487 9.43555 17.9479 9.43555Z'
    />
    <Path
      fill={props.fill ?? "white"}
      d='M14.6198 12.4199H9.30182C8.90104 12.4199 8.57617 12.7448 8.57617 13.1456C8.57617 13.5464 8.90109 13.8712 9.30182 13.8712H14.6198C15.0206 13.8712 15.3454 13.5463 15.3454 13.1456C15.3454 12.7448 15.0206 12.4199 14.6198 12.4199Z'
    />
  </Svg>
);

export { SvgComponent as SocializeSvg };
