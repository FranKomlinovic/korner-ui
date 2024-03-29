import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CustomIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Lengths {
  HALF_HOUR = "HALF_HOUR",
  HOUR = "HOUR",
  HOUR_AND_HALF = "HOUR_AND_HALF",
  TWO_HOURS = "TWO_HOURS"
}

export enum Days {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export enum Cities {
  PETRINJA = "PETRINJA",
  ZAGREB = "ZAGREB",
  SISAK = "SISAK",
  VELIKA_GORICA = "VELIKA_GORICA",
  SPLIT = "SPLIT",
  RIJEKA = "RIJEKA",
  OSIJEK = "OSIJEK"
}

export enum Sport {
  FUTSAL = "FUTSAL",
  TENNIS = "TENNIS",
  BASKETBALL = "BASKETBALL",
  PING_PONG = "PING_PONG",
  BADMINTON = "BADMINTON",
  PADEL = "PADEL",
  CAGEBALL = "CAGEBALL"
}

export enum Surface {
  ARTIFICIAL_GRASS = "ARTIFICIAL_GRASS",
  RUBBER = "RUBBER",
  CONCRETE = "CONCRETE",
  WOOD = "WOOD",
  GRASS = "GRASS"
}



type EagerPossibleAppointments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PossibleAppointments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly start: string;
  readonly end: string;
  readonly priceForHour: number;
  readonly interval: Lengths | keyof typeof Lengths;
  readonly possibleLengths?: Lengths[] | Array<keyof typeof Lengths> | null;
  readonly days: Days[] | Array<keyof typeof Days>;
  readonly fieldsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPossibleAppointments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PossibleAppointments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly start: string;
  readonly end: string;
  readonly priceForHour: number;
  readonly interval: Lengths | keyof typeof Lengths;
  readonly possibleLengths?: Lengths[] | Array<keyof typeof Lengths> | null;
  readonly days: Days[] | Array<keyof typeof Days>;
  readonly fieldsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PossibleAppointments = LazyLoading extends LazyLoadingDisabled ? EagerPossibleAppointments : LazyPossibleAppointments

export declare const PossibleAppointments: (new (init: ModelInit<PossibleAppointments>) => PossibleAppointments) & {
  copyOf(source: PossibleAppointments, mutator: (draft: MutableModel<PossibleAppointments>) => MutableModel<PossibleAppointments> | void): PossibleAppointments;
}

type EagerTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly appointmentID: string;
  readonly Responses?: (Response | null)[] | null;
  readonly name?: string | null;
  readonly color?: string | null;
  readonly score?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly appointmentID: string;
  readonly Responses: AsyncCollection<Response>;
  readonly name?: string | null;
  readonly color?: string | null;
  readonly score?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<User, 'cognitoID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly cognitoID: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly picture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<User, 'cognitoID'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly cognitoID: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly picture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerFollowing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Following, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly followedID: string;
  readonly followedName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFollowing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Following, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly followedID: string;
  readonly followedName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Following = LazyLoading extends LazyLoadingDisabled ? EagerFollowing : LazyFollowing

export declare const Following: (new (init: ModelInit<Following>) => Following) & {
  copyOf(source: Following, mutator: (draft: MutableModel<Following>) => MutableModel<Following> | void): Following;
}

type EagerReccuringAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReccuringAppointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookerID?: string | null;
  readonly start: string;
  readonly end: string;
  readonly fieldsID: string;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly bookerName?: string | null;
  readonly Appointments?: (Appointment | null)[] | null;
  readonly canceled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReccuringAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReccuringAppointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookerID?: string | null;
  readonly start: string;
  readonly end: string;
  readonly fieldsID: string;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly bookerName?: string | null;
  readonly Appointments: AsyncCollection<Appointment>;
  readonly canceled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReccuringAppointment = LazyLoading extends LazyLoadingDisabled ? EagerReccuringAppointment : LazyReccuringAppointment

export declare const ReccuringAppointment: (new (init: ModelInit<ReccuringAppointment>) => ReccuringAppointment) & {
  copyOf(source: ReccuringAppointment, mutator: (draft: MutableModel<ReccuringAppointment>) => MutableModel<ReccuringAppointment> | void): ReccuringAppointment;
}

type EagerResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerID?: string | null;
  readonly accepted?: boolean | null;
  readonly appointmentID: string;
  readonly playerName: string;
  readonly playerPhoto?: string | null;
  readonly teamID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly playerID?: string | null;
  readonly accepted?: boolean | null;
  readonly appointmentID: string;
  readonly playerName: string;
  readonly playerPhoto?: string | null;
  readonly teamID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Response = LazyLoading extends LazyLoadingDisabled ? EagerResponse : LazyResponse

export declare const Response: (new (init: ModelInit<Response>) => Response) & {
  copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}

type EagerAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly start: string;
  readonly end: string;
  readonly fieldsID: string;
  readonly Responses?: (Response | null)[] | null;
  readonly date: string;
  readonly confirmed?: boolean | null;
  readonly bookerID?: string | null;
  readonly bookerName?: string | null;
  readonly sport?: Sport | keyof typeof Sport | null;
  readonly price?: number | null;
  readonly canceled?: boolean | null;
  readonly Fields?: Fields | null;
  readonly locked?: boolean | null;
  readonly Teams?: (Team | null)[] | null;
  readonly reccuringappointmentID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly start: string;
  readonly end: string;
  readonly fieldsID: string;
  readonly Responses: AsyncCollection<Response>;
  readonly date: string;
  readonly confirmed?: boolean | null;
  readonly bookerID?: string | null;
  readonly bookerName?: string | null;
  readonly sport?: Sport | keyof typeof Sport | null;
  readonly price?: number | null;
  readonly canceled?: boolean | null;
  readonly Fields: AsyncItem<Fields | undefined>;
  readonly locked?: boolean | null;
  readonly Teams: AsyncCollection<Team>;
  readonly reccuringappointmentID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Appointment = LazyLoading extends LazyLoadingDisabled ? EagerAppointment : LazyAppointment

export declare const Appointment: (new (init: ModelInit<Appointment>) => Appointment) & {
  copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

type EagerFields = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fields, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly width?: number | null;
  readonly length?: number | null;
  readonly price?: number | null;
  readonly minPlayers?: number | null;
  readonly Appointments?: (Appointment | null)[] | null;
  readonly surface?: Surface | keyof typeof Surface | null;
  readonly photo?: string | null;
  readonly sports?: (Sport | null)[] | Array<keyof typeof Sport> | null;
  readonly city?: Cities | keyof typeof Cities | null;
  readonly ReccuringAppointments?: (ReccuringAppointment | null)[] | null;
  readonly ownerID?: string | null;
  readonly workTimeStart?: string | null;
  readonly workTimeEnd?: string | null;
  readonly phoneNumber?: string | null;
  readonly PossibleAppointments?: (PossibleAppointments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFields = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fields, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly width?: number | null;
  readonly length?: number | null;
  readonly price?: number | null;
  readonly minPlayers?: number | null;
  readonly Appointments: AsyncCollection<Appointment>;
  readonly surface?: Surface | keyof typeof Surface | null;
  readonly photo?: string | null;
  readonly sports?: (Sport | null)[] | Array<keyof typeof Sport> | null;
  readonly city?: Cities | keyof typeof Cities | null;
  readonly ReccuringAppointments: AsyncCollection<ReccuringAppointment>;
  readonly ownerID?: string | null;
  readonly workTimeStart?: string | null;
  readonly workTimeEnd?: string | null;
  readonly phoneNumber?: string | null;
  readonly PossibleAppointments: AsyncCollection<PossibleAppointments>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Fields = LazyLoading extends LazyLoadingDisabled ? EagerFields : LazyFields

export declare const Fields: (new (init: ModelInit<Fields>) => Fields) & {
  copyOf(source: Fields, mutator: (draft: MutableModel<Fields>) => MutableModel<Fields> | void): Fields;
}