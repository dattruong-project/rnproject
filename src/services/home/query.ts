// src/queries.js
import { GraphQLRequest, gql } from '@apollo/client';

export const GET_ALL_BOOKS = `
    query GetAllBooks {
      books {
        id
        name
      }
    }
    `
