type Props = {
  todo: string;
  color: string;
};

export default function TodoItem({ todo, color }: Props) {
  return (
    <div
      className={`bg-${color}-200 p-2 m-3 rounded-lg h-17 break-all overflow-hidden text-ellipsis text-sm min-h-[60px]`}
    >
      {todo}
    </div>
  );
}
