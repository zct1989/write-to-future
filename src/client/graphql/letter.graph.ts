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

export const createLetter = gql`
  mutation creaetLetter(
    $content: String!
    $sendTime: String!
    $receiverEmail: String
    $receiverWeixin: String
  ) {
    createLetter(
      content: $content
      sendTime: $sendTime
      receiverEmail: $receiverEmail
      receiverWeixin: $receiverWeixin
    ) {
      id
    }
  }
`
