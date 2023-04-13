import Timeline from '@/components/Timeline';

export default function Page({ params: { slug } }: { params: { slug: string[] } }) {
  if (slug.length !== 3) return null;
  const [year, month, day] = slug;
  return (
    <div>
      <Timeline year={year} month={month} day={day} />
    </div>
  );
}
