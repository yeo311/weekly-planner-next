type Props = {
  text: string;
  color: string;
};

export default function Part({ text, color }: Props) {
  return (
    <div className='flex-none w-14 flex justify-center items-center'>
      <span
        style={{ writingMode: 'vertical-lr' }}
        className={`rotate-180 bg-${color}-200 py-2 px-1 rounded-lg`}
      >
        {text}
      </span>
    </div>
  );
}
