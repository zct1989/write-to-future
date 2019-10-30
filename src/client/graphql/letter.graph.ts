import gql from 'graphql-tag'

const letterFragment = gql`
  fragment letter on Letter {
    id
    content
  }
`

export const getLetterList = gql`
  query Letters {
    letters {
      ...letter
    }
  }
  ${letterFragment}
`

export const getLetter = gql`
  query Letter($id: Int!) {
    letter(id: $id) {
      ...letter
    }
  }
  ${letterFragment}
`
