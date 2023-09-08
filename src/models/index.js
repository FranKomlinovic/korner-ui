// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

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
  "BADMINTON": "BADMINTON"
};

const Surface = {
  "ARTIFICIAL_GRASS": "ARTIFICIAL_GRASS",
  "RUBBER": "RUBBER",
  "CONCRETE": "CONCRETE",
  "WOOD": "WOOD",
  "GRASS": "GRASS"
};

const { Team, User, Following, ReccuringAppointment, Response, Appointment, Fields } = initSchema(schema);

export {
  Team,
  User,
  Following,
  ReccuringAppointment,
  Response,
  Appointment,
  Fields,
  Cities,
  Sport,
  Surface
};
