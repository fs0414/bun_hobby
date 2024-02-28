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
    role
  }
}
```

- user get
```graphql
query GetUser {
  user(id: 1) {
    id
    name
    email
    password
    role
    boards {
      id
      content
      user_id
    }
  }
}
```

- signup
```graphql
mutation Signup {
  signup(name: "user01", email: "user01@i.com", password: "user01", role: USER) {
    id
    name
    email
    password
    role
  }
}
```

- signin
```graphql
mutation Signin {
  signin(email: "user01@i.com", password: "user01") {
    token
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

- PersonalBankAccount get
```graphql
query GetePersonalBankAccount {
  personalBankAccount(id: 1, user_id: 1) {
    id
    account_number
    balance
    is_active
    user_id
  }
}
```

- PersonalBankAccount create
```graphql
mutation CreatePersonalBankAccount {
  createPersonalBankAccount(account_number: "`123456" user_id: 1) {
    id
    account_number
    balance
    is_active
    user_id
  }
}
```

- addPayrollToUser
```graphql
mutation AddPayrollToUser {
  addPayrollToUser(amount: 100, user_id: 1) {
    id
    account_number
    balance
    is_active
    user_id
  }
}
```