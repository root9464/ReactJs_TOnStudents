import { useTransform, type MotionValue } from "motion/react";

export const calculatePositionCircles = (
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
