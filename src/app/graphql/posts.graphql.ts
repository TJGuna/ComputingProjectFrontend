import gql from 'graphql-tag';

export const GET_POSTS = gql`
 query MyQuery {
  guides {
    content
    id
    image
    title
    author {
      username
    }
  }
}
`;
