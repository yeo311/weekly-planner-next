import Divider from './Divider';
import Part from './Part';
import TodoItem from './TodoItem';
import TodoWrap from './TodoWrap';

type Props = {
  year: string;
  month: string;
  day: string;
};

export default function Timeline({ year, month, day }: Props) {
  const days = [
    'Monday 21',
    'Tuesday 22',
    'Wednesday 23',
    'Thursday 24',
    'Friday 25',
    'Saturday 26',
    'Sunday 27',
  ];
  return (
    <>
      <section className='flex justify-between'>
        <div className='flex-none w-14' />
        {days.map((day) => (
          <div
            key={day}
            className={`w-full font-bold py-5 ml-2 ${
              day === 'Monday 21' ? 'text-black' : 'text-gray-400'
            }`}
          >
            <h2>{day}</h2>
          </div>
        ))}
      </section>
      <Divider />
      <section>
        <div className='flex justify-between min-h-[120px]'>
          <Part text='morning' color='emerald' />
          <div className='border-r'></div>
          {days.map((day) => (
            <TodoWrap key={day}>
              <TodoItem todo='일어나서 약먹기' color='emerald' />
              <TodoItem todo='아침에 할일이 많네요' color='emerald' />
            </TodoWrap>
          ))}
        </div>
      </section>
      <Divider />
      <section>
        <div className='flex justify-between min-h-[120px]'>
          <Part text='afternoon' color='red' />
          <div className='border-r'></div>
          {days.map((day) => (
            <TodoWrap key={day}>
              <TodoItem todo='점심먹고 산책하기' color='red' />
              <TodoItem todo='실습 준비하기' color='red' />
            </TodoWrap>
          ))}
        </div>
      </section>
      <Divider />
      <section>
        <div className='flex justify-between min-h-[120px]'>
          <Part text='evening' color='sky' />
          <div className='border-r'></div>
          {days.map((day) => (
            <TodoWrap key={day}>
              <TodoItem todo='점심먹고 산책하기' color='sky' />
              <TodoItem todo='실습 준비하기' color='sky' />
            </TodoWrap>
          ))}
        </div>
      </section>
      <Divider />
      <section>
        <div className='flex justify-between min-h-[120px]'>
          <Part text='day' color='orange' />
          <div className='border-r'></div>
          {days.map((day) => (
            <TodoWrap key={day}>
              <TodoItem todo='점심먹고 산책하기' color='orange' />
              <TodoItem todo='실습 준비하기' color='orange' />
            </TodoWrap>
          ))}
        </div>
      </section>
      <Divider />
    </>
  );
}
