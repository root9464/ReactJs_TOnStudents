import { motion, useTime, useTransform, type MotionValue } from "motion/react";

export const DoubleCircles = () => {
  const time = useTime();
  const speed = 10000;
  const radius = 70;
  const distance = 30;

  const { x: x1, y: y1 } = calculatePositionCircles(time, 0, radius, speed);
  const { x: x2, y: y2 } = calculatePositionCircles(
    time,
    0.5,
    radius,
    speed,
    distance,
  );

  return (
    <div className="relative flex h-[300px] w-full items-center justify-center">
      <motion.div
        className="absolute h-60 w-60 rounded-full bg-uiBlue blur-3xl"
        style={{ x: x1, y: y1 }}
      />
      <motion.div
        className="absolute h-60 w-60 rounded-full bg-uiPurple blur-3xl"
        style={{ x: x2, y: y2 }}
      />
    </div>
  );
};

const calculatePositionCircles = (
  time: MotionValue<number>,
  offset = 0,
  radius: number,
  speed: number,
  distance = 0,
) => {
  const x = useTransform(
    time,
    (t) => (radius + distance) * Math.cos((t / speed + offset) * 2 * Math.PI),
  );
  const y = useTransform(
    time,
    (t) => (radius + distance) * Math.sin((t / speed + offset) * 2 * Math.PI),
  );
  return { x, y };
};
