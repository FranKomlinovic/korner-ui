/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      appointmentID
      Responses {
        items {
          id
          playerID
          accepted
          appointmentID
          playerName
          playerPhoto
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      name
      color
      score
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        appointmentID
        Responses {
          nextToken
          startedAt
          __typename
        }
        name
        color
        score
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTeams = /* GraphQL */ `
  query SyncTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        appointmentID
        Responses {
          nextToken
          startedAt
          __typename
        }
        name
        color
        score
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const teamsByAppointmentID = /* GraphQL */ `
  query TeamsByAppointmentID(
    $appointmentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamsByAppointmentID(
      appointmentID: $appointmentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        appointmentID
        Responses {
          nextToken
          startedAt
          __typename
        }
        name
        color
        score
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      cognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        cognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        cognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
      id
      userID
      followedID
      followedName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        followedID
        followedName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFollowings = /* GraphQL */ `
  query SyncFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollowings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        followedID
        followedName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getReccuringAppointment = /* GraphQL */ `
  query GetReccuringAppointment($id: ID!) {
    getReccuringAppointment(id: $id) {
      id
      bookerID
      start
      end
      fieldsID
      startDate
      endDate
      bookerName
      Appointments {
        items {
          id
          start
          end
          fieldsID
          date
          confirmed
          bookerID
          bookerName
          sport
          price
          canceled
          locked
          reccuringappointmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      canceled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listReccuringAppointments = /* GraphQL */ `
  query ListReccuringAppointments(
    $filter: ModelReccuringAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReccuringAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookerID
        start
        end
        fieldsID
        startDate
        endDate
        bookerName
        Appointments {
          nextToken
          startedAt
          __typename
        }
        canceled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncReccuringAppointments = /* GraphQL */ `
  query SyncReccuringAppointments(
    $filter: ModelReccuringAppointmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReccuringAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bookerID
        start
        end
        fieldsID
        startDate
        endDate
        bookerName
        Appointments {
          nextToken
          startedAt
          __typename
        }
        canceled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const reccuringAppointmentsByFieldsID = /* GraphQL */ `
  query ReccuringAppointmentsByFieldsID(
    $fieldsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReccuringAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reccuringAppointmentsByFieldsID(
      fieldsID: $fieldsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookerID
        start
        end
        fieldsID
        startDate
        endDate
        bookerName
        Appointments {
          nextToken
          startedAt
          __typename
        }
        canceled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      id
      playerID
      accepted
      appointmentID
      playerName
      playerPhoto
      teamID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerID
        accepted
        appointmentID
        playerName
        playerPhoto
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncResponses = /* GraphQL */ `
  query SyncResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        playerID
        accepted
        appointmentID
        playerName
        playerPhoto
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const responsesByAppointmentID = /* GraphQL */ `
  query ResponsesByAppointmentID(
    $appointmentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    responsesByAppointmentID(
      appointmentID: $appointmentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        playerID
        accepted
        appointmentID
        playerName
        playerPhoto
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const responsesByTeamID = /* GraphQL */ `
  query ResponsesByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    responsesByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        playerID
        accepted
        appointmentID
        playerName
        playerPhoto
        teamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      start
      end
      fieldsID
      Responses {
        items {
          id
          playerID
          accepted
          appointmentID
          playerName
          playerPhoto
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      date
      confirmed
      bookerID
      bookerName
      sport
      price
      canceled
      Fields {
        id
        name
        address
        width
        length
        price
        minPlayers
        Appointments {
          nextToken
          startedAt
          __typename
        }
        surface
        photo
        sports
        city
        ReccuringAppointments {
          nextToken
          startedAt
          __typename
        }
        ownerID
        workTimeStart
        workTimeEnd
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      locked
      Teams {
        items {
          id
          appointmentID
          name
          color
          score
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      reccuringappointmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        start
        end
        fieldsID
        Responses {
          nextToken
          startedAt
          __typename
        }
        date
        confirmed
        bookerID
        bookerName
        sport
        price
        canceled
        Fields {
          id
          name
          address
          width
          length
          price
          minPlayers
          surface
          photo
          sports
          city
          ownerID
          workTimeStart
          workTimeEnd
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        locked
        Teams {
          nextToken
          startedAt
          __typename
        }
        reccuringappointmentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAppointments = /* GraphQL */ `
  query SyncAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        start
        end
        fieldsID
        Responses {
          nextToken
          startedAt
          __typename
        }
        date
        confirmed
        bookerID
        bookerName
        sport
        price
        canceled
        Fields {
          id
          name
          address
          width
          length
          price
          minPlayers
          surface
          photo
          sports
          city
          ownerID
          workTimeStart
          workTimeEnd
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        locked
        Teams {
          nextToken
          startedAt
          __typename
        }
        reccuringappointmentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const appointmentsByFieldsID = /* GraphQL */ `
  query AppointmentsByFieldsID(
    $fieldsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentsByFieldsID(
      fieldsID: $fieldsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        start
        end
        fieldsID
        Responses {
          nextToken
          startedAt
          __typename
        }
        date
        confirmed
        bookerID
        bookerName
        sport
        price
        canceled
        Fields {
          id
          name
          address
          width
          length
          price
          minPlayers
          surface
          photo
          sports
          city
          ownerID
          workTimeStart
          workTimeEnd
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        locked
        Teams {
          nextToken
          startedAt
          __typename
        }
        reccuringappointmentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const appointmentsByReccuringappointmentID = /* GraphQL */ `
  query AppointmentsByReccuringappointmentID(
    $reccuringappointmentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appointmentsByReccuringappointmentID(
      reccuringappointmentID: $reccuringappointmentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        start
        end
        fieldsID
        Responses {
          nextToken
          startedAt
          __typename
        }
        date
        confirmed
        bookerID
        bookerName
        sport
        price
        canceled
        Fields {
          id
          name
          address
          width
          length
          price
          minPlayers
          surface
          photo
          sports
          city
          ownerID
          workTimeStart
          workTimeEnd
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        locked
        Teams {
          nextToken
          startedAt
          __typename
        }
        reccuringappointmentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getFields = /* GraphQL */ `
  query GetFields($id: ID!) {
    getFields(id: $id) {
      id
      name
      address
      width
      length
      price
      minPlayers
      Appointments {
        items {
          id
          start
          end
          fieldsID
          date
          confirmed
          bookerID
          bookerName
          sport
          price
          canceled
          locked
          reccuringappointmentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      surface
      photo
      sports
      city
      ReccuringAppointments {
        items {
          id
          bookerID
          start
          end
          fieldsID
          startDate
          endDate
          bookerName
          canceled
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ownerID
      workTimeStart
      workTimeEnd
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listFields = /* GraphQL */ `
  query ListFields(
    $filter: ModelFieldsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFields(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        width
        length
        price
        minPlayers
        Appointments {
          nextToken
          startedAt
          __typename
        }
        surface
        photo
        sports
        city
        ReccuringAppointments {
          nextToken
          startedAt
          __typename
        }
        ownerID
        workTimeStart
        workTimeEnd
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFields = /* GraphQL */ `
  query SyncFields(
    $filter: ModelFieldsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFields(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        width
        length
        price
        minPlayers
        Appointments {
          nextToken
          startedAt
          __typename
        }
        surface
        photo
        sports
        city
        ReccuringAppointments {
          nextToken
          startedAt
          __typename
        }
        ownerID
        workTimeStart
        workTimeEnd
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
