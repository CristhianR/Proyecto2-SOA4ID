export default // GraphQL Schema
`
    type News {
        id:  String
        Title: String!
        Tag: [String]
        Description: String!
    }

    type User{
        _id: String
        id_usuario: Int
        nombre: String
        apellido: String
        correo: String
    }

    type Query {
        allNews: [News!]!
        oneNews(id: String!): News!
        allUsers: [User!]!
        oneUser(id_usuario: Int!): [User!]!
    }

    type Mutation{
        insertNews(Title: String!, Tag: [String], Description: String!): News!
        updateNews(id: String!,Title: String, Tag: [String], Description: String): News!
        deleteNews(id: String!): News!
    }

`;