import useSWR from 'swr'
import axios from 'axios';

const api = axios.create({
  baseURL: ''
})

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data;
  })

  return { data, error, mutate }
}
