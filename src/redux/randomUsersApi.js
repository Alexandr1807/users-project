import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api } from '../utils/api'; 

export const randomUsersApi = createApi({
    reducerPath: 'randomUser',
    baseQuery: fetchBaseQuery({baseUrl: api.randomUsersApiUrl}),
    endpoints: (build) => ({
        getUsers: build.query({
            query: (result) => `?results=${result}`
        }),
    })
})

export const {useLazyGetUsersQuery} = randomUsersApi