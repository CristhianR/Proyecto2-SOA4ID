# Projecto2-SOA4ID

Métodos CRUD via GraphiQL:

query getNoticias{
  allNews{
    ...newsFields
  }
}

query getDeportes{
  allSports{
    ...sportFields
  }
}

query getRetos{
  allRetos{
    ...retosFields
  }
}


query getEquipos{
  allTeams{
    ...teamsFields
  }
}

query getNoticia($id: String!){
  oneNews(id: $id){
    ...newsFields
  }
}

query getDeporte($idDep: Int!){
  oneSport(id_deporte: $idDep){
    ...sportFields
  }
}

query getUser($idUser: Int!){
  oneUser(id_usuario: $idUser){
    ...usersFields
  }
}

query getEquipo($idTeam: Int!){
  oneTeam(id_equipo: $idTeam){
    ...teamsFields
  }
}


query getUsuarios{
  allUsers{
    ...usersFields
  }
}

fragment newsFields on News {
  id
  Title
  Tag
  Description
}

fragment sportFields on  Sport{
  id_deporte
  nombre_deporte
}

fragment teamsFields on Team {
  id_equipo
  nombre_equipo
  logros
}

fragment retosFields on Reto {
  id_reto
  lugar
  fecha
}

fragment usersFields on User {
  id_usuario
  nombre
  apellido
  correo
}

mutation insertNews($title: String!, $description: String!, $tags: [String]){
  insertNews(Title: $title, Description: $description, Tag: $tags){
    ...newsFields
  }
}

mutation insertDeporte($Id: Int!, $NombreDep: String!){
  insertSport(id_deporte: $Id, nombre_deporte: $NombreDep){
    ...sportFields
  }
}

mutation updateDeporte($Id: Int!, $NombreDep: String!){
  updateSport(id_deporte: $Id, nombre_deporte: $NombreDep){
    ...sportFields
  }
}

mutation insertUser($idUser: Int!, $Nombre: String!, $Apellido: String!, 
$Correo: String!){
  insertUser(id_usuario: $idUser, nombre: $Nombre, apellido: $Apellido,
  correo: $Correo){
    ...usersFields
  }
}

mutation insertTeam($idTeam: Int!, $Nombre: String!, $Logros: Int!){
  insertTeam(id_equipo: $idTeam, nombre_equipo: $Nombre, logros: $Logros){
    ...teamsFields
  }
}

mutation insertReto($idReto: Int!, $Lugar: String!, $Fecha: String!){
  insertReto(id_reto: $idReto, lugar: $Lugar, fecha: $Fecha){
    ...retosFields
  }
}


mutation updateReto($idReto: Int!, $Lugar: String!, $Fecha: String!){
  updateReto(id_reto: $idReto, lugar: $Lugar, fecha: $Fecha){
    ...retosFields
  }
}

mutation updateTeam($idTeam: Int!, $Nombre: String!, $Logros: Int!){
  updateTeam(id_equipo: $idTeam, nombre_equipo: $Nombre, logros: $Logros){
    ...teamsFields
  }
}


mutation updateNews($id: String!, $title: String, $description: String,
  $tags:[String]){
    updateNews(id: $id, Title: $title, Description: $description, Tag: $tags){
      ...newsFields
    }
    
  }
  
mutation updateUser($idUser: Int!, $Nombre: String!, $Apellido: String!,
  $Correo:String!){
    updateUser(id_usuario: $idUser, nombre: $Nombre, apellido: $Apellido, correo: $Correo){
      ...usersFields
    }
    
  }
  
mutation deleteNews($id: String!){
  deleteNews(id: $id){
    ...newsFields
  }
}

mutation deleteUser($id: Int!){
  deleteUser(id_usuario: $id){
    ...usersFields
  }
}

mutation deleteTeam($id: Int!){
  deleteTeam(id_equipo: $id){
    ...teamsFields
  }
}

mutation deleteReto($id: Int!){
  deleteReto(id_reto: $id){
    ...retosFields
  }
}

mutation deleteSport($idDep: Int!){
  deleteSport(id_deporte: $idDep){
    ...sportFields
  }
}


