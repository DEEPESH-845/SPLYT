import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LenisProvider from "./components/LenisProvider.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lenis } from "lenis/react";

// gsap.registerPlugin(ScrollTrigger);

// const lenis = new Lenis({
// 	smooth: true,
// 	lerp: 0.08, // lower = smoother but slower
// 	duration: 1.2, // optional
// 	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// });

// // RAF loop
// function raf(time) {
// 	lenis.raf(time);
// 	requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

// // Sync ScrollTrigger
// lenis.on("scroll", ScrollTrigger.update);

createRoot(document.getElementById("root")).render(
	<LenisProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</LenisProvider>
);
