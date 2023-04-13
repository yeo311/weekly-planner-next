import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const BUTTON_CLASS = 'p-2 text-xl';

export default function FloatingButton() {
  return (
    <div className='bg-slate-400 fixed z-90 bottom-10 right-10 flex justify-between items-center p-2 text-white rounded-lg'>
      <button type='button' className={`${BUTTON_CLASS}`}>
        <BiLeftArrowAlt />
      </button>
      <span>May 2023</span>
      <button type='button' className={`${BUTTON_CLASS}`}>
        <BiRightArrowAlt />
      </button>
    </div>
  );
}
