import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import AsyncStorageHelper, { AsyncStorageKey } from "../shared/storage/asyncStorageHelper";
import { AuthorizeResult } from "react-native-app-auth";
import { API_BASE } from "@env";

interface GraphQLResponse<T> {
  data: T;
  errors?: {
    message: string;
    locations: {
      line: number;
      column: number;
    }[];
    path: string[];
    extensions: {
      code: string;
      stacktrace?: string[];
    };
  }[];
}

interface AxiosGraphQLResponse<T> {
  data?: T;
  errors?: AxiosError | GraphQLResponse<T>["errors"];
}

const axiosGraphQL = async <T>(
  request: string
): Promise<AxiosGraphQLResponse<T>> => {
  const token = await AsyncStorageHelper.getInstance().getItem<AuthorizeResult>(AsyncStorageKey.credentials);
  const graphqlQuery = {
    "query": request
  };
  const config: AxiosRequestConfig = {
    method: 'post',
    url: API_BASE,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token.accessToken}` }),
    },
    data: graphqlQuery,
  };
  try {
    const response: AxiosResponse<GraphQLResponse<T>> = await axios(config);
    return { data: response.data.data, errors: response.data.errors };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.code);
      if (error.code === 'ERR_NETWORK') {
       console.log("network error");
      }
      return { errors: error };
    }
    throw error;
  }
};

export default axiosGraphQL;
