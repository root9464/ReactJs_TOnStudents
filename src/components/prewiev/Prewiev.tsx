import { calculatePositionCircles } from "@shared/utils/util";
import { motion, useTime } from "motion/react";

export const Prewiev = () => {
  return (
    <div className="relative h-[calc(100vh-120px)] w-screen">
      <div className="relative z-[1] flex flex-col gap-2 space-y-1">
        <h2 className="text-lg font-semibold">Представление!</h2>
        <p className="text-sm text-uiGray">
          TonStudents - это уникальная платформа покупки и продажи курсовых,
          дипломных, практических работ и многого другого...
        </p>

        <p className="text-sm text-uiGray">
          Только на TonStudents ты можешь купить курсовые, дипломные,
          практические работы и многое другое на выгодных условиях и самое
          главное анонимно! В нашем сервисе креатор и пользователь/заказчик не
          знают друг о друге ничего кроме дозволенного креатором или
          пользователем.
        </p>
      </div>
      <Circles />
    </div>
  );
};

const Circles = () => {
  const time = useTime();
  const speed = 20000;
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
        className="bg-uiPurple absolute h-60 w-60 rounded-full blur-3xl"
        style={{ x: x2, y: y2 }}
      />
    </div>
  );
};
