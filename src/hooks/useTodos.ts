import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

export const useTodos = () => {
  const queryFn = async (): Promise<Todo[]> => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10"
    );

    return data;
  };

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn,
  });

  return [data];
};
