// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Lengths = {
  "HALF_HOUR": "HALF_HOUR",
  "HOUR": "HOUR",
  "HOUR_AND_HALF": "HOUR_AND_HALF",
  "TWO_HOURS": "TWO_HOURS"
};

const Days = {
  "MONDAY": "MONDAY",
  "TUESDAY": "TUESDAY",
  "WEDNESDAY": "WEDNESDAY",
  "THURSDAY": "THURSDAY",
  "FRIDAY": "FRIDAY",
  "SATURDAY": "SATURDAY",
  "SUNDAY": "SUNDAY"
};

const Cities = {
  "PETRINJA": "PETRINJA",
  "ZAGREB": "ZAGREB",
  "SISAK": "SISAK",
  "VELIKA_GORICA": "VELIKA_GORICA",
  "SPLIT": "SPLIT",
  "RIJEKA": "RIJEKA",
  "OSIJEK": "OSIJEK"
};

const Sport = {
  "FUTSAL": "FUTSAL",
  "TENNIS": "TENNIS",
  "BASKETBALL": "BASKETBALL",
  "PING_PONG": "PING_PONG",
  "BADMINTON": "BADMINTON",
  "PADEL": "PADEL",
  "CAGEBALL": "CAGEBALL"
};

const Surface = {
  "ARTIFICIAL_GRASS": "ARTIFICIAL_GRASS",
  "RUBBER": "RUBBER",
  "CONCRETE": "CONCRETE",
  "WOOD": "WOOD",
  "GRASS": "GRASS"
};

const { PossibleAppointments, Team, User, Following, ReccuringAppointment, Response, Appointment, Fields } = initSchema(schema);

export {
  PossibleAppointments,
  Team,
  User,
  Following,
  ReccuringAppointment,
  Response,
  Appointment,
  Fields,
  Lengths,
  Days,
  Cities,
  Sport,
  Surface
};