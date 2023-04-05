import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Cities {
  PETRINJA = "PETRINJA",
  ZAGREB = "ZAGREB"
}

export enum Sport {
  FUTSAL = "FUTSAL",
  TENNIS = "TENNIS",
  BASKETBALL = "BASKETBALL"
}

export enum Surface {
  ARTIFICIAL_GRASS = "ARTIFICIAL_GRASS",
  RUBBER = "RUBBER",
  CONCRETE = "CONCRETE",
  WOOD = "WOOD"
}



type EagerReccuringAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReccuringAppointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookerId?: string | null;
  readonly dayOfTheWeek: number;
  readonly start: string;
  readonly end: string;
  readonly fieldsID: string;
  readonly active?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReccuringAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReccuringAppointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookerId?: string | null;
  readonly dayOfTheWeek: number;
  readonly start: string;
  readonly end: string;
  readonly fieldsID: string;
  readonly active?: boolean | null;
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
  readonly start?: string | null;
  readonly end?: string | null;
  readonly fieldsID: string;
  readonly Responses?: (Response | null)[] | null;
  readonly date?: string | null;
  readonly confirmed?: boolean | null;
  readonly bookerID?: string | null;
  readonly bookerName?: string | null;
  readonly sport?: Sport | keyof typeof Sport | null;
  readonly fieldName?: string | null;
  readonly fieldPhoto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly fieldsID: string;
  readonly Responses: AsyncCollection<Response>;
  readonly date?: string | null;
  readonly confirmed?: boolean | null;
  readonly bookerID?: string | null;
  readonly bookerName?: string | null;
  readonly sport?: Sport | keyof typeof Sport | null;
  readonly fieldName?: string | null;
  readonly fieldPhoto?: string | null;
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
  readonly sports?: (Sport | null)[] | keyof typeof Sport | null;
  readonly city?: Cities | keyof typeof Cities | null;
  readonly ReccuringAppointments?: (ReccuringAppointment | null)[] | null;
  readonly ownerID?: string | null;
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
  readonly sports?: (Sport | null)[] | keyof typeof Sport | null;
  readonly city?: Cities | keyof typeof Cities | null;
  readonly ReccuringAppointments: AsyncCollection<ReccuringAppointment>;
  readonly ownerID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Fields = LazyLoading extends LazyLoadingDisabled ? EagerFields : LazyFields

export declare const Fields: (new (init: ModelInit<Fields>) => Fields) & {
  copyOf(source: Fields, mutator: (draft: MutableModel<Fields>) => MutableModel<Fields> | void): Fields;
}