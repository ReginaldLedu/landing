/* eslint-disable no-useless-escape */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  getPaginateLinkByDefault,
  getPaginateLinkASC,
  setUsersAsc,
  setUsersByDefault,
  getPaginateLinkDESC,
  getPaginateLinkLONG,
  setUsersDesc,
} from "./slice";
import { Octokit } from "octokit";

const octokit = new Octokit({});
function parseData(data) {
  // If the data is an array, return that
  if (Array.isArray(data)) {
    return data;
  }
  // Some endpoints respond with 204 No Content instead of empty array
  //   when there is no data. In that case, return an empty array.
  if (!data) {
    return [];
  }
  // Otherwise, the array of items that we want is in an object
  // Delete keys that don't include the array of items
  delete data.incomplete_results;
  delete data.repository_selection;
  delete data.total_count;
  // Pull out the array of items
  const namespaceKey = Object.keys(data)[0];
  data = data[namespaceKey];
  return data;
}

export const searchGitUserApi = createApi({
  reducerPath: "searchGitUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (build) => ({
    fetchAllUsersByName: build.query({
      queryFn: async (name, { dispatch }) => {
        const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
        const url = `https://api.github.com/search/users?q=${name}/`;
        const response = await octokit.request(`GET ${url}`, {
          per_page: 50,
        });
        const parsedData = parseData(response.data);
        const linkHeader = response.headers.link;
        if (linkHeader && linkHeader.includes(`rel=\"next\"`)) {
          dispatch(getPaginateLinkByDefault(linkHeader.match(nextPattern)[0]));
        }
        dispatch(setUsersByDefault(parsedData));
        return { data: parsedData };
      },
    }),
    sortAllUsersByRepAsc: build.query({
      queryFn: async (name, { dispatch }) => {
        const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
        const url = `https://api.github.com/search/users?q=${name}&sort=repositories&order=asc`;
        const response = await octokit.request(`GET ${url}`, {
          per_page: 50,
        });
        const parsedData = parseData(response.data);
        const linkHeader = response.headers.link;
        if (linkHeader && linkHeader.includes(`rel=\"next\"`)) {
          dispatch(getPaginateLinkASC(linkHeader.match(nextPattern)[0]));
        }
        dispatch(setUsersAsc(parsedData));
        return { data: parsedData };
      },
    }),
    sortAllUsersByRepDesc: build.query({
      queryFn: async (name, { dispatch }) => {
        const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
        const url = `https://api.github.com/search/users?q=${name}&sort=repositories&order=desc`;
        const response = await octokit.request(`GET ${url}`, {
          per_page: 20,
        });
        const parsedData = parseData(response.data);
        const linkHeader = response.headers.link;
        if (linkHeader && linkHeader.includes(`rel=\"next\"`)) {
          dispatch(getPaginateLinkDESC(linkHeader.match(nextPattern)[0]));
        }
        dispatch(setUsersDesc(parsedData));
        return { data: parsedData };
      },
    }),
    paginatedLong: build.query({
      queryFn: async (urlFromSLice, { dispatch }) => {
        let data = [];
        const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
        let url = urlFromSLice;
        const response = await octokit.request(url, {
          per_page: 20,
        });
        const parsedData = parseData(response.data);
        data = [...data, ...parsedData];
        const linkHeader = response.headers.link;
        if (linkHeader && linkHeader.includes(`rel=\"next\"`)) {
          dispatch(getPaginateLinkLONG(linkHeader.match(nextPattern)[0]));
        }
        console.log(linkHeader);
        console.log(data);
        return { data: parsedData };
      },
    }),
  }),
});

export const {
  useFetchAllUsersByNameQuery,
  useSortAllUsersByRepAscQuery,
  useSortAllUsersByRepDescQuery,
  usePaginatedLongQuery,
} = searchGitUserApi;
