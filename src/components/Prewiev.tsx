import { PulseCircles } from "@/widgets/PulseCircles";

export const Prewiev = () => {
  return (
    <div className="relative h-[calc(100vh-120px)] w-screen">
      <div className="relative z-[1] flex flex-col gap-2 space-y-1 rounded-2xl bg-gradient-to-r from-[rgba(255,241,241,0.03)] to-[rgba(255,250,250,0.07)] px-4 py-2 backdrop-blur-lg">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Представляем!</h2>
          <p className="text-sm text-uiGray">
            TonStudents — уникальная платформа для покупки и продажи курсовых,
            дипломных, практических работ и других учебных материалов. Только на
            TonStudents вы можете выгодно приобрести или продать свои работы,
            сохраняя полную анонимность.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">
            🚀 Мы начинаем разработку TonStudents!
          </h2>
          <p className="text-sm text-uiGray">
            Представьте место, где покупка и продажа курсовых, дипломных и
            других работ становится удобной, безопасной и абсолютно анонимной.
            Мы уже работаем над созданием платформы, которая изменит подход к
            образовательным услугам! Следите за новостями и станьте первыми, кто
            увидит, как меняется мир учебных решений! 👀
          </p>
          <h3 className="text-base font-semibold">🔥 Что вас ждёт?</h3>
          <ul className="mb-4 list-inside list-disc space-y-3 pl-5">
            <li>Уникальная система анонимности.</li>
            <li>Выгодные условия для всех.</li>
            <li>Удобный и понятный интерфейс.</li>
          </ul>
        </div>
      </div>
      <PulseCircles />
    </div>
  );
};
