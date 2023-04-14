import { PropsWithChildren } from 'react';

export default function TodoWrap({ children }: PropsWithChildren) {
  return <div className='w-full'>{children}</div>;
}
