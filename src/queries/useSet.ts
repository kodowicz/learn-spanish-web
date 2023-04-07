import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { Set } from './types';

interface Params {
  id: string,
}

const queryKey = (id: string) => ['sets', id];

function fetchSet(id: string): Promise<Set> {
  return axios.get(`/api/v1/study_sets/${id}`);
}

export function useSet(id: string) {
  return useQuery(queryKey(id), () => fetchSet(id));
}
