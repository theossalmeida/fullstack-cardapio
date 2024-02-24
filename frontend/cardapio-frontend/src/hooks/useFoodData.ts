import axios from "axios";
import { FoodData } from '../interface/FoodData';
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (searchText?: string): Promise<FoodData[]> => {
    const response = await axios.get(API_URL + "/food", {
        params: {
            q: searchText
        }
    });
    
    return response; // Retorne apenas os dados da resposta
}

export function useFoodData(searchText?: string) {
    const query = useQuery({
        queryFn: () => fetchData(searchText),
        queryKey: ['food-data', searchText],
        retry: 2
    });

    return {
        ...query,
        data: query.data?.data
    }
}
