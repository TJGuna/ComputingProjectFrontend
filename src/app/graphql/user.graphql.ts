import gql from 'graphql-tag';

export const GET_USER_PROFILES = gql`
   query GetProfiles ($role: String!){
    usersByRole(role: $role) {
        address
        bio
        dateOfBirth
        email
        id
        profilePicture
        role
        username
        }
  }
`;
