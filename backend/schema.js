export default // GraphQL Schema
`
    type News {
        id:  String
        Title: String!
        Tag: [String]
        Description: String!
    }

    type Query {
        allNews: [News!]!
    }

    type Mutation{
        insertNews(Title: String!, Tag: [String], Description: String!): News!
        updateNews(id: String!,Title: String, Tag: [String], Description: String): News!
    }

`;