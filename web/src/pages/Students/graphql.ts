import { gql } from '@apollo/client';

export const STUDENT = gql`
  query student($filter: StudentFilter!) {
    student(filter: $filter) {
      id
      name
      cpf
      email
      createdAt
      updatedAt
    }
  }
`;

export const STUDENTS = gql`
  query students {
    students {
      data {
        id
        name
        cpf
        email
        createdAt
        updatedAt
      }
    }
  }
`;

export const CREATE = gql`
  mutation create($data: StudentCreate!) {
    createStudent(data: $data) {
      ... on Student {
        name
      }
      ... on ResponseError {
        error
        message
        fields {
          message
          field
        }
      }
    }
  }
`;

export const UPDATE = gql`
  mutation update($student: Float!, $data: StudentUpdate!) {
    updateStudent(student: $student, data: $data) {
      ... on Student {
        name
      }
      ... on ResponseError {
        error
        message
        fields {
          message
          field
        }
      }
    }
  }
`;
