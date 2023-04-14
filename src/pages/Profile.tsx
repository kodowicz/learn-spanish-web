import { useUser } from '@/queries/useAuth';

export function Profile() {
  const { data, error, isLoading } = useUser({ retry: false });

  if (isLoading) return <h1>... Loading</h1>;

  if (error) return <h1>{error.response.data.error}</h1>;

  return <h1>hello {data?.username}</h1>;
}
