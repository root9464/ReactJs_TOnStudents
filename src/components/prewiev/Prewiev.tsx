import { motion, useTime, useTransform } from "framer-motion";

export const Prewiev = () => {
  return (
    <div className="relative h-[calc(100vh-120px)] w-screen">
      <div className="z-10">fff</div>
      <Circles />
    </div>
  );
};

const Circles = () => {
  const time = useTime();
  const speed = 20000;
  const radius = 70;
  const distance = 30;

  const x1 = useTransform(
    time,
    (t) => radius * Math.cos((t / speed) * 2 * Math.PI),
  );
  const y1 = useTransform(
    time,
    (t) => radius * Math.sin((t / speed) * 2 * Math.PI),
  );

  const x2 = useTransform(
    time,
    (t) => radius * Math.cos((t / speed + 0.5) * 2 * Math.PI) + distance,
  );
  const y2 = useTransform(
    time,
    (t) => radius * Math.sin((t / speed + 0.5) * 2 * Math.PI),
  );

  return (
    <div className="relative top-1/2 flex h-[300px] w-full -translate-y-1/2 items-center justify-center">
      <motion.div
        className="absolute h-60 w-60 rounded-full bg-uiBlue blur-3xl"
        style={{ x: x1, y: y1 }}
      />
      <motion.div
        className="bg-uiPurple absolute h-60 w-60 rounded-full blur-3xl"
        style={{ x: x2, y: y2 }}
      />
    </div>
  );
};
