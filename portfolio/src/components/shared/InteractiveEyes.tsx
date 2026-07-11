import { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";

// The eyebrow SVG path extracted from A Color Bright
const Eyebrow = ({isBlinking}: {isBlinking: boolean}) => (
  <motion.svg
    className="w-18 md:w-26 text-foreground transition-colors duration-300"
    viewBox="0 0 137 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ y: isBlinking ? 8 : 0 }}
    transition={{ duration: 0.1 }}
  >
    <path
      d="M9.27532 43.9941C12.2006 43.9941 14.0559 43.348 16.5885 41.0677C31.215 27.8987 48.7667 20.5827 67.7811 20.5827C86.7955 20.5827 105.81 27.8987 118.974 41.0677C123.362 45.4573 129.212 45.4573 133.6 41.0677C137.988 36.678 137.988 30.8252 133.6 26.4355C116.048 10.3402 92.6461 0.0976562 67.7811 0.0976562C42.9161 0.0976562 19.5138 10.3402 3.42474 27.8987C-0.963194 32.2884 -0.963194 38.1413 3.42474 42.5309C4.88738 43.9941 7.81267 43.9941 9.27532 43.9941Z"
      fill="currentColor"
    />
  </motion.svg>
);


export function InteractiveEyes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevAngleRef = useRef(45); // starts at the idle angle (45 degrees)

  // Spring animations for rotation to give a natural, elastic feeling
  const leftRotateSpring = useSpring(45, { stiffness: 150, damping: 15 });
  const rightRotateSpring = useSpring(45, { stiffness: 150, damping: 15 });

  const [isBlinking, setIsBlinking] = useState(false);
  const absoluteCenterRef = useRef({ x: 0, y: 0 });

  // Track cursor/touch coordinates and update eye angles
  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isIdle = true;
    let idleTimeout: ReturnType<typeof setTimeout>;

    const updateCenter = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        absoluteCenterRef.current = {
          x: rect.left + window.scrollX + rect.width / 2,
          y: rect.top + window.scrollY + rect.height / 2,
        };
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isIdle = false;
      updateAngles();
      resetIdleTimeout();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
        isIdle = false;
        updateAngles();
        resetIdleTimeout();
      }
    };

    const resetIdleTimeout = () => {
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        isIdle = true;
        animateToIdle();
      }, 3000);
    };

    const updateAngles = () => {
      if (isIdle) return;

      // Use the cached container center (midpoint between both eyes) to ensure both eyes track at the exact same angle
      const centerX = absoluteCenterRef.current.x - window.scrollX;
      const centerY = absoluteCenterRef.current.y - window.scrollY;

      // Angle in radians
      const angleRad = Math.atan2(mouseY - centerY, mouseX - centerX);
      // Convert to degrees
      const angleDeg = (angleRad * 180) / Math.PI;

      // Since pupils are placed at bottom-right (45 deg initially),
      // we subtract 45 deg to point the pupils directly at the target.
      const rawTargetAngle = angleDeg - 45;

      // Shortest-path interpolation to prevent spring spinning when crossing the 180°/-180° boundary
      let diff = rawTargetAngle - prevAngleRef.current;
      diff = (diff + 180) % 360;
      if (diff < 0) diff += 360;
      diff -= 180;

      const targetAngle = prevAngleRef.current + diff;
      prevAngleRef.current = targetAngle;

      leftRotateSpring.set(targetAngle);
      rightRotateSpring.set(targetAngle);
    };

    const animateToIdle = () => {
      // Look downwards towards the 404 text/buttons
      const targetAngle = 45;
      prevAngleRef.current = targetAngle;
      leftRotateSpring.set(targetAngle);
      rightRotateSpring.set(targetAngle);
    };

    // Set initial position
    animateToIdle();

    // Calculate center coordinates
    updateCenter();
    // Setup a tiny timeout to guarantee layout calculations have settled
    const initTimeout = setTimeout(updateCenter, 150);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchstart", handleTouchMove);
    // Handle window resize and scroll to recalculate center coordinates
    window.addEventListener("resize", updateCenter);
    window.addEventListener("scroll", updateCenter, { passive: true });
    window.addEventListener("resize", updateAngles);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("resize", updateCenter);
      window.removeEventListener("scroll", updateCenter);
      window.removeEventListener("resize", updateAngles);
      clearTimeout(idleTimeout);
      clearTimeout(initTimeout);
    };
  }, [leftRotateSpring, rightRotateSpring]);

  // Periodic blinking effect
  useEffect(() => {
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 120); // short blink duration
    };

    const interval = setInterval(() => {
      // 80% chance to blink every 4 seconds
      if (Math.random() > 0.2) {
        triggerBlink();
        // Occasionally double blink (15% chance)
        if (Math.random() > 0.85) {
          setTimeout(triggerBlink, 300);
        }
      }
    }, 4000);

    return () => { clearInterval(interval); };
  }, []);
  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center gap-6 md:gap-10 select-none p-4 py-8"
    >
      {/* Left Eye Wrapper */}
      <div className="flex flex-col items-center gap-2 md:gap-3">
        <Eyebrow isBlinking={isBlinking} />
        <motion.div
          className="relative w-24 h-24 md:w-36 md:h-36 rounded-full border-8 md:border-12 border-foreground bg-background transition-colors duration-300 overflow-hidden"
          style={{ rotate: leftRotateSpring, scaleY: isBlinking ? 0.05 : 1 }}
          transition={
            isBlinking
              ? { duration: 0.08 }
              : { type: "spring", stiffness: 300, damping: 25 }
          }
        >
          {/* Pupil (iris) - resized and offset to guarantee spacing from the border */}
          <div className="absolute w-[27%] h-[27%] rounded-full right-[15%] bottom-[15%] bg-foreground transition-colors duration-300" />
        </motion.div>
      </div>

      {/* Right Eye Wrapper */}
      <div className="flex flex-col items-center gap-2 md:gap-3">
        <Eyebrow isBlinking={isBlinking} />
        <motion.div
          className="relative w-24 h-24 md:w-36 md:h-36 rounded-full border-8 md:border-12 border-foreground bg-background transition-colors duration-300 overflow-hidden"
          style={{ rotate: rightRotateSpring, scaleY: isBlinking ? 0.05 : 1 }}
          transition={
            isBlinking
              ? { duration: 0.08 }
              : { type: "spring", stiffness: 300, damping: 25 }
          }
        >
          {/* Pupil (iris) - resized and offset to guarantee spacing from the border */}
          <div className="absolute w-[27%] h-[27%] rounded-full right-[15%] bottom-[15%] bg-foreground transition-colors duration-300" />
        </motion.div>
      </div>
    </div>
  );
}
