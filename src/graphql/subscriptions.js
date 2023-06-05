/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      name
      color
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      name
      color
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
        }
        nextToken
        startedAt
      }
      name
      color
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      email
      cognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      email
      cognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      email
      cognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
    }
  }
`;
export const onCreateReccuringAppointment = /* GraphQL */ `
  subscription OnCreateReccuringAppointment(
    $filter: ModelSubscriptionReccuringAppointmentFilterInput
  ) {
    onCreateReccuringAppointment(filter: $filter) {
      id
      bookerId
      dayOfTheWeek
      start
      end
      fieldsID
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateReccuringAppointment = /* GraphQL */ `
  subscription OnUpdateReccuringAppointment(
    $filter: ModelSubscriptionReccuringAppointmentFilterInput
  ) {
    onUpdateReccuringAppointment(filter: $filter) {
      id
      bookerId
      dayOfTheWeek
      start
      end
      fieldsID
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteReccuringAppointment = /* GraphQL */ `
  subscription OnDeleteReccuringAppointment(
    $filter: ModelSubscriptionReccuringAppointmentFilterInput
  ) {
    onDeleteReccuringAppointment(filter: $filter) {
      id
      bookerId
      dayOfTheWeek
      start
      end
      fieldsID
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        }
        nextToken
        startedAt
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
        }
        surface
        photo
        sports
        city
        ReccuringAppointments {
          nextToken
          startedAt
        }
        ownerID
        workTimeStart
        workTimeEnd
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      locked
      Teams {
        items {
          id
          appointmentID
          name
          color
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        }
        nextToken
        startedAt
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
        }
        surface
        photo
        sports
        city
        ReccuringAppointments {
          nextToken
          startedAt
        }
        ownerID
        workTimeStart
        workTimeEnd
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      locked
      Teams {
        items {
          id
          appointmentID
          name
          color
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        }
        nextToken
        startedAt
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
        }
        surface
        photo
        sports
        city
        ReccuringAppointments {
          nextToken
          startedAt
        }
        ownerID
        workTimeStart
        workTimeEnd
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      locked
      Teams {
        items {
          id
          appointmentID
          name
          color
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      surface
      photo
      sports
      city
      ReccuringAppointments {
        items {
          id
          bookerId
          dayOfTheWeek
          start
          end
          fieldsID
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ownerID
      workTimeStart
      workTimeEnd
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      surface
      photo
      sports
      city
      ReccuringAppointments {
        items {
          id
          bookerId
          dayOfTheWeek
          start
          end
          fieldsID
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ownerID
      workTimeStart
      workTimeEnd
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      surface
      photo
      sports
      city
      ReccuringAppointments {
        items {
          id
          bookerId
          dayOfTheWeek
          start
          end
          fieldsID
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ownerID
      workTimeStart
      workTimeEnd
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
