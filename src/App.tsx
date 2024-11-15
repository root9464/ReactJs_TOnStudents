import { Buffer } from 'buffer';
import { Menu } from './components/menu/Menu';

export default function App() {
  const str: string = 'Привет, мир!';

  // Создаем буфер из строки
  const buffer: Buffer = Buffer.from(str, 'utf-8');

  console.log(buffer);

  return (
    <>
      <h1 className='bg-red-300'>ffff</h1>
      <Menu />
    </>
  );
}
