import { usePublicSets } from '@/queries/usePublicSets';
import { Set } from '@/queries/types';

function ViewSet({ set }: { set: Set }) {
  return (
    <div>
      <h2>{set.title}</h2>
      <p>{set.author.username} | {set.terms.length}</p>
    </div>
  );
}

export function Home() {
  const { isLoading, data } = usePublicSets();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      {data?.map(set => 
        <ViewSet
          key={set.id}
          set={set}
        />
      )}
    </>
  );
}
