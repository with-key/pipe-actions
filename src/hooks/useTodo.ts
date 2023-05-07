import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTodo = () => {
  const queryFn = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    return data;
  };

  const { data } = useQuery({
    queryKey: ["todos", { id: 1 }],
    queryFn,
  });

  return [data];
};
