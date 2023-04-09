import { useParams } from 'react-router-dom';
import { useSet } from '@/queries/useSet';

export function ViewSet() {
  const { id } = useParams<'id'>();
  const { data, error, isLoading } = useSet(id);

  if (isLoading) return <div>Set loading...</div>;

  if (error) return <p>Couldn&apos;t find set</p>;

  return (
    <>
      <h1>{data?.title}</h1>
      <p>
        {data?.terms.length} terms | by {data?.author.username}
      </p>

      <div>
        <p>terms:</p>
        {data?.terms.map((term) => (
          <p key={term.id}>
            {term.spanish} | {term.english}
          </p>
        ))}
      </div>
    </>
  );
}
