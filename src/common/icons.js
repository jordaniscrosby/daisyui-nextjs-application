// import useMouseOver from "@/tools/useMouseOver";
// import { useTheme } from "@mui/material";

// const iconDefaultSize = 20;

// export function IconMenu(props) {
//   const theme = useTheme();
//   return (
//     <svg
//       //   strokeWidth=".75"
//       viewBox="0.25 0.25 13.5 13.5"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//       width={props.size || iconDefaultSize}
//       height={props.size || iconDefaultSize}
//     >
//       <g>
//         <line
//           fill="none"
//           stroke={props?.color || theme?.palette?.light?.contrastText}
//           x1="13.5"
//           x2="0.5"
//           y1="2"
//           y2="2"
//           strokeWidth="1"
//         />
//         <line
//           fill="none"
//           stroke={props?.color || theme?.palette?.light?.contrastText}
//           x1="13.5"
//           x2="0.5"
//           y1="7"
//           y2="7"
//           strokeWidth="1"
//         />
//         <line
//           fill="none"
//           stroke={props?.color || theme?.palette?.light?.contrastText}
//           strokeWidth="1"
//           x1="13.5"
//           x2="0.5"
//           y1="12"
//           y2="12"
//         />
//       </g>
//     </svg>
//   );
// }

// export function IconThinMenu(props) {
//   const theme = useTheme();
//   return (
//     <svg
//       {...props}
//       width={props.size || iconDefaultSize}
//       height={props.size || iconDefaultSize}
//       viewBox="0.25 0.25 23.5 23.5"
//       xmlns="http://www.w3.org/2000/svg"
//       strokeWidth={0.5}
//     >
//       <path
//         d="M21 7L3 7"
//         fill="none"
//         stroke={props?.color || theme?.palette?.light?.contrastText}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M21 12L3 12"
//         fill="none"
//         stroke={props?.color || theme?.palette?.light?.contrastText}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M21 17L3 17"
//         fill="none"
//         stroke={props?.color || theme?.palette?.light?.contrastText}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// export function IconBoxMenu(props) {
//   const theme = useTheme();
//   const [isHovered, handleOver, handleOff] = useMouseOver();
//   return (
//     <svg
//       onMouseEnter={handleOver}
//       onMouseLeave={handleOff}
//       {...props}
//       width={props.size || iconDefaultSize}
//       height={props.size || iconDefaultSize}
//       viewBox="0 0 24 24"
//       strokeWidth={0.5}
//       xmlns="http://www.w3.org/2000/svg"
//       style={{
//         filter: isHovered && "drop-shadow(2px 2px rgba(0,0,0,.1))",
//         transform: isHovered && "translate(-2px,-2px)",
//         transition: "all ease .1s",
//       }}
//     >
//       <path
//         d="M20.5,6.5a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1v-1a1,1,0,0,1,1-1h15a1,1,0,0,1,1,1Z"
//         fill="none"
//         stroke={props?.color || theme?.palette?.light?.contrastText}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M20.5,12.5a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1v-1a1,1,0,0,1,1-1h15a1,1,0,0,1,1,1Z"
//         fill="none"
//         stroke={props?.color || theme?.palette?.light?.contrastText}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M20.5,18.5a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1v-1a1,1,0,0,1,1-1h15a1,1,0,0,1,1,1Z"
//         fill="none"
//         stroke={props?.color || theme?.palette?.light?.contrastText}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// export function IconCloseMenu(props) {
//   const theme = useTheme();
//   return (
//     <svg
//       {...props}
//       width={props.size || iconDefaultSize}
//       height={props.size || iconDefaultSize}
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M0.5 12.497L19.5 12.497"
//         fill="none"
//         stroke="#000000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M13.5 18.497L19.5 12.497 13.5 6.497"
//         fill="none"
//         stroke="#000000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M23.5 6.497L23.5 18.497"
//         fill="none"
//         stroke="#000000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// export function IconArrowRight(props) {
//   const theme = useTheme();
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       {...props}
//       width={props.size || iconDefaultSize}
//       height={props.size || iconDefaultSize}
//     >
//       <path
//         stroke={props?.color || theme?.palette?.dark?.contrastText}
//         stroke-linejoin="round"
//         stroke-width="2"
//         d="M17 18L23 12L17 6"
//       ></path>
//       <path
//         stroke={props?.color || theme?.palette?.dark?.contrastText}
//         stroke-linejoin="round"
//         stroke-width="2"
//         d="M0 12H23"
//       ></path>
//     </svg>
//   );
// }

// export function IconShoppingCart(props) {
//   const theme = useTheme();
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//       width={props.size || iconDefaultSize}
//       height={props.size || iconDefaultSize}
//     >
//       <path
//         d="M23.5,2.5H20.942a.5.5,0,0,0-.5.439L20.11,5.623a1,1,0,0,1-.992.877H2A1.5,1.5,0,0,0,.569,8.447l1.562,5A1.5,1.5,0,0,0,3.563,14.5H18a1,1,0,0,1,0,2H4"
//         fill="none"
//         stroke="#000000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M19.501 8.5L19.059 12.478"
//         fill="none"
//         stroke="#000000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M4.501 20.000 A1.500 1.500 0 1 0 7.501 20.000 A1.500 1.500 0 1 0 4.501 20.000 Z"
//         fill="none"
//         stroke="#000000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M15.501 20.000 A1.500 1.500 0 1 0 18.501 20.000 A1.500 1.500 0 1 0 15.501 20.000 Z"
//         fill="none"
//         stroke="#000000"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
