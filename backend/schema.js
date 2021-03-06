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

    type Team{
        id_equipo: Int
        nombre_equipo: String
        logros:Int
    }

    type Reto{
        id_reto: Int
        lugar: String
        fecha: String
    }

    type Sport{
        id_deporte: Int
        nombre_deporte: String
    }

    type Query {
        allNews: [News!]!
        oneNews(id: String!): News!

        allUsers: [User!]!
        oneUser(id_usuario: Int!): [User!]!

        allTeams: [Team!]!
        oneTeam(id_equipo: Int!): [Team!]!

        allRetos: [Reto!]!
        oneReto(id_reto: Int!): [Reto!]!

        allSports: [Sport!]!
        oneSport(id_deporte: Int!): [Sport!]!
    }

    type Mutation{
        insertNews(Title: String!, Tag: [String], Description: String!): News!
        updateNews(id: String!,Title: String, Tag: [String], Description: String): News!
        deleteNews(id: String!): News!

        insertUser(id_usuario: Int!, nombre: String!, apellido: String!, correo: String!): User!
        updateUser(id_usuario: Int!, nombre: String!, apellido: String!, correo: String!): User!
        deleteUser(id_usuario: Int!): User!

        insertTeam(id_equipo: Int!, nombre_equipo: String!, logros: Int): Team!
        updateTeam(id_equipo: Int!, nombre_equipo: String!, logros: Int): Team!
        deleteTeam(id_equipo: Int!): Team!

        insertReto(id_reto: Int!, lugar: String!, fecha: String!): Reto!
        updateReto(id_reto: Int!, lugar: String!, fecha: String!): Reto!
        deleteReto(id_reto: Int!): Reto!

        insertSport(id_deporte: Int!, nombre_deporte: String!): Sport!
        updateSport(id_deporte: Int!, nombre_deporte: String!): Sport!
        deleteSport(id_deporte: Int!): Sport!
    }

`;