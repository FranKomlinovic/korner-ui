// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Color = {
  "BLACK": "BLACK",
  "WHITE": "WHITE",
  "RED": "RED",
  "YELLOW": "YELLOW",
  "BLUE": "BLUE"
};

const Cities = {
  "PETRINJA": "PETRINJA",
  "ZAGREB": "ZAGREB"
};

const Sport = {
  "FUTSAL": "FUTSAL",
  "TENNIS": "TENNIS",
  "BASKETBALL": "BASKETBALL"
};

const Surface = {
  "ARTIFICIAL_GRASS": "ARTIFICIAL_GRASS",
  "RUBBER": "RUBBER",
  "CONCRETE": "CONCRETE",
  "WOOD": "WOOD"
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
  Color,
  Cities,
  Sport,
  Surface
};