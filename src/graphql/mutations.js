/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
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
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
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
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
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
export const createReccuringAppointment = /* GraphQL */ `
  mutation CreateReccuringAppointment(
    $input: CreateReccuringAppointmentInput!
    $condition: ModelReccuringAppointmentConditionInput
  ) {
    createReccuringAppointment(input: $input, condition: $condition) {
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
export const updateReccuringAppointment = /* GraphQL */ `
  mutation UpdateReccuringAppointment(
    $input: UpdateReccuringAppointmentInput!
    $condition: ModelReccuringAppointmentConditionInput
  ) {
    updateReccuringAppointment(input: $input, condition: $condition) {
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
export const deleteReccuringAppointment = /* GraphQL */ `
  mutation DeleteReccuringAppointment(
    $input: DeleteReccuringAppointmentInput!
    $condition: ModelReccuringAppointmentConditionInput
  ) {
    deleteReccuringAppointment(input: $input, condition: $condition) {
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
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
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
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
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
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
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
export const createFields = /* GraphQL */ `
  mutation CreateFields(
    $input: CreateFieldsInput!
    $condition: ModelFieldsConditionInput
  ) {
    createFields(input: $input, condition: $condition) {
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
export const updateFields = /* GraphQL */ `
  mutation UpdateFields(
    $input: UpdateFieldsInput!
    $condition: ModelFieldsConditionInput
  ) {
    updateFields(input: $input, condition: $condition) {
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
export const deleteFields = /* GraphQL */ `
  mutation DeleteFields(
    $input: DeleteFieldsInput!
    $condition: ModelFieldsConditionInput
  ) {
    deleteFields(input: $input, condition: $condition) {
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
