import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { Set } from './types';

const queryKey = (id: string) => ['sets', id];

function fetchSet(id: string): Promise<Set> {
  return axios.get(`/api/v1/study_sets/${id}`);
}

export function useSet(id: string | undefined) {
  return useQuery(queryKey(id ?? ''), () => fetchSet(id ?? ''), {
    enabled: !!id,
    retry: false,
  });
}
