import TonLogo from "@assets/svg/logo.svg";

export const Logo = () => (
  <div className="flex h-min w-max flex-col gap-2 px-[30px] py-5">
    <div className="flex flex-row items-center gap-2">
      <h1 className="text-3xl font-semibold">TonStudents</h1>
      <img src={TonLogo} alt="" className="h-6 w-6" />
    </div>
    <p className="text-sm">не парься из за зачетов — купи зачет</p>
  </div>
);
