import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchCountries = async () => {
  const { data } = await axios.get('https://restcountries.com/v3.1/all');

  data.sort((a, b) => {
    return b.population - a.population;
  });
  return data;
};

export default function useCustomQuery(select) {
  return useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    staleTime: Infinity,
    select,
  });
}
