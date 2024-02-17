import { Search } from "react-router";

export const getQueryParam = (search: Search, key: string) =>
  new URLSearchParams(search).get(key);
