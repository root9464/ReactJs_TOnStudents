import { Buffer } from "buffer";
import { Prewiev } from "./components/Prewiev";
import { Logo } from "./ui/Logo";

export default function App() {
  const str: string = "Привет, мир!";

  // Создаем буфер из строки
  const buffer: Buffer = Buffer.from(str, "utf-8");

  console.log(buffer);

  return (
    <div>
      <Logo />
      <Prewiev />
    </div>
  );
}
