import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres'); 

const useGenres = () => 
  useQuery<Genre[],Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll, 
    staleTime: ms('24h'),
    initialData: {count: genres.length, results: genres }
  });


export default useGenres;