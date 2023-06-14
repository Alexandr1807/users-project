import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const randomUsersApi = createApi({
    reducerPath: 'randomUser',
    baseQuery: fetchBaseQuery({baseUrl: 'https://randomuser.me/api/'}),
    endpoints: (build) => ({
        getUsers: build.query({
            query: (result) => `?results=${result}`
        }),
    })
})

export const {useLazyGetUsersQuery} = randomUsersApi