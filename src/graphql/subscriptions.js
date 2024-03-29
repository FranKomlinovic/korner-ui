/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePossibleAppointments = /* GraphQL */ `
  subscription OnCreatePossibleAppointments(
    $filter: ModelSubscriptionPossibleAppointmentsFilterInput
  ) {
    onCreatePossibleAppointments(filter: $filter) {
      id
      start
      end
      priceForHour
      interval
      possibleLengths
      days
      fieldsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePossibleAppointments = /* GraphQL */ `
  subscription OnUpdatePossibleAppointments(
    $filter: ModelSubscriptionPossibleAppointmentsFilterInput
  ) {
    onUpdatePossibleAppointments(filter: $filter) {
      id
      start
      end
      priceForHour
      interval
      possibleLengths
      days
      fieldsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePossibleAppointments = /* GraphQL */ `
  subscription OnDeletePossibleAppointments(
    $filter: ModelSubscriptionPossibleAppointmentsFilterInput
  ) {
    onDeletePossibleAppointments(filter: $filter) {
      id
      start
      end
      priceForHour
      interval
      possibleLengths
      days
      fieldsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      cognitoID
      name
      email
      picture
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      cognitoID
      name
      email
      picture
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      cognitoID
      name
      email
      picture
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onCreateFollowing(filter: $filter) {
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
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onUpdateFollowing(filter: $filter) {
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
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onDeleteFollowing(filter: $filter) {
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
export const onCreateReccuringAppointment = /* GraphQL */ `
  subscription OnCreateReccuringAppointment(
    $filter: ModelSubscriptionReccuringAppointmentFilterInput
  ) {
    onCreateReccuringAppointment(filter: $filter) {
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
  }
`;
export const onUpdateReccuringAppointment = /* GraphQL */ `
  subscription OnUpdateReccuringAppointment(
    $filter: ModelSubscriptionReccuringAppointmentFilterInput
  ) {
    onUpdateReccuringAppointment(filter: $filter) {
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
  }
`;
export const onDeleteReccuringAppointment = /* GraphQL */ `
  subscription OnDeleteReccuringAppointment(
    $filter: ModelSubscriptionReccuringAppointmentFilterInput
  ) {
    onDeleteReccuringAppointment(filter: $filter) {
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
  }
`;
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($filter: ModelSubscriptionResponseFilterInput) {
    onCreateResponse(filter: $filter) {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse($filter: ModelSubscriptionResponseFilterInput) {
    onUpdateResponse(filter: $filter) {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse($filter: ModelSubscriptionResponseFilterInput) {
    onDeleteResponse(filter: $filter) {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
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
        phoneNumber
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
  }
`;
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
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
        phoneNumber
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
  }
`;
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
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
        phoneNumber
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
  }
`;
export const onCreateFields = /* GraphQL */ `
  subscription OnCreateFields($filter: ModelSubscriptionFieldsFilterInput) {
    onCreateFields(filter: $filter) {
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
      phoneNumber
      PossibleAppointments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateFields = /* GraphQL */ `
  subscription OnUpdateFields($filter: ModelSubscriptionFieldsFilterInput) {
    onUpdateFields(filter: $filter) {
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
      phoneNumber
      PossibleAppointments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteFields = /* GraphQL */ `
  subscription OnDeleteFields($filter: ModelSubscriptionFieldsFilterInput) {
    onDeleteFields(filter: $filter) {
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
      phoneNumber
      PossibleAppointments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
