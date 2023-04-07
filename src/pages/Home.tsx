import { usePublicSets } from '@/queries/usePublicSets';
import { ViewSet } from '@/components/ViewSet';

export function Home() {
  const { isLoading, data } = usePublicSets();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      {data?.map(({ id, title, author, terms }) => 
        <ViewSet
          key={id}
          title={title}
          author={author.username}
          termsCount={terms.length}
        />
      )}
    </>
  );
}
