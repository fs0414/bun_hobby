## graphql query

### User
- users get
```graphql
query {
  users {
    id
    name
    email
    password
  }
}
```

- signup
```graphql
mutation Signin {
  signin(email: "user01@i.com", password: "user01") {
    token
  }
}
```

- signin
```graphql
mutation Signin {
  signin(email: "user01@i.com", password: "user01") {
    id
    email
    password
  }
}
```

### Board
- boards get
```graphql
query {
  boards {
    id
    content
    user_id
  }
}
```

- board get
```graphql
query GetBoard {
  board(id: 1) {
    id
    content
    user_id
  }
}
```

- board create
```graphql
mutation CreateBoard {
  createBoard(content: "content01", user_id: 1) {
    id
    content
    user_id
  }
}
```

- board update
```graphql
mutation UpdateBoard {
  updateBoard(id: 1, content: "content01ed") {
    id
    content
    user_id
  }
}
```

