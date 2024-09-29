import gql from 'graphql-tag';

export const GET_DATES = gql`
  query MyQuery {
  importantDates {
    date
    description
    id
    title
    location
    notes
    updatedAt
    user {
      username
      role
    }
  }
}
`;
