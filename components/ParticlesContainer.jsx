// import { useCallback, useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// const ParticlesContainer = () => {

//   const [init,setInit]=useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
     
//       await loadFull(engine);
// console.log("useEffect")
//   }).then(() => {
//       setInit(true);
//   });
// }, [init]);

//   const particlesLoaded = (container) => {
//     console.log(container);
// };




//   return (init &&
//     <Particles
//     className="h-full w-full absolute z-10 translate-z-0"
//     id="tsparticles"
      
//       loaded={particlesLoaded}
//       options={{
//         fullScreen: { enable: false },
//         background: {
//           color: { value: "" },
//         },
//         fpsLimit: 120,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: false,
//               mode: "push",
//             },
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//             resize: true,
//           },
//           modes: {
//             push: { quantity: 90 },
//             repulse: { distance: 200, duration: 0.4 },
//           },
//         },
//         particles: {
//           color: {
//             value: "#e68e2e",
//           },
//           links: {
//             color: "#f5d393",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           collisions: {
//             enable: true,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outModes: {
//               default: "bounce",
//             },
//             random: false,
//             speed: 3,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 80,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             value: { min: 1, max: 5 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

// export default ParticlesContainer;
