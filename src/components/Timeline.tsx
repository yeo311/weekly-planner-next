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
        {days.map((day) => (
          <div
            key={day}
            className={`border w-full font-bold py-5 ${
              day === 'Monday 21' ? 'text-black' : 'text-gray-400'
            }`}
          >
            <h2>{day}</h2>
          </div>
        ))}
      </section>
      <section className='flex justify-between'>
        {days.map((day) => (
          <div key={day} className='w-full'>
            <div
              style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}
              className='bg-green-200 p-2 rounded-lg h-16 w-full text-ellipsis overflow-hidden leading-2'
            >
              Hello Mynanmeis sadfkadslfk dkdkdkd dkdkdkdkdksadklfjasdf asdlfkjadlskfj
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
