import { useMutation } from "react-query";
import { client } from "../config/client";

const get = async (catalogType) => {
  const { data } = await client.get(`/${catalogType.toLowerCase()}`);
  return data;
};

export const useGetCatalog = () => {
  return useMutation((catalogType) => get(catalogType));
};
