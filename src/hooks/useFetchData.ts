import { getUsers } from "../../request/api";
import { useQuery } from "react-query";

export const useFetchData = () => {
  const { data } = useQuery(["users"], () => getUsers());
  return { data };
};
