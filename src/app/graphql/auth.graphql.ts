import {gql} from "apollo-angular";

export const login = gql`
    mutation MyMutation($password: String!, $username: String!) {
        loginUser(password: $password, username: $username) {
            accessToken
            refreshToken
            user {
              id
              email
              role
              username
            }
        }
    }
`;
