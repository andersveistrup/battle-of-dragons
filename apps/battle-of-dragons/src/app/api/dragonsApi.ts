import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DRAGONS_API_URL } from '../constants/urls';

export enum DragonApiTagType {
  Dragons = 'dragons',
}

export const dragonsApi = createApi({
  reducerPath: 'dragonsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: DRAGONS_API_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  tagTypes: Object.values(DragonApiTagType),
  endpoints: (build) => ({
    getTags: build.query<void, any[]>({
      query: () => `/dragons`,
      providesTags: (result, error, id) => [
        { type: DragonApiTagType.Dragons, id: 'LIST' },
      ],
    }),
  }),
});

export const { useGetTagsQuery } = dragonsApi;
