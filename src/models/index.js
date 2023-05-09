// @ts-check
import {initSchema} from '@aws-amplify/datastore';
import {schema} from './schema';

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

const { User, Following, ReccuringAppointment, Response, Appointment, Fields } = initSchema(schema);

export {
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
