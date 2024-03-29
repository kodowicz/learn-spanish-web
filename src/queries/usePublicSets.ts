import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { Set } from './types';

const queryKey = ['sets'];

function fetchPublicSets(): Promise<Array<Set>> {
  return axios.get('/api/v1/study_sets');
}

export function usePublicSets() {
  return useQuery(queryKey, fetchPublicSets);
}
