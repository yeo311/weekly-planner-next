import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: '700',
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header className='flex justify-start p-4'>
      <h1 className={`${raleway.className} text-4xl text-gray-700`}>Weekly Planner</h1>
    </header>
  );
}
