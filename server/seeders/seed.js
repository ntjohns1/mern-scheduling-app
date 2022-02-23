const db = require('../config/connection');
const { User, Event, Address } = require('../models');
const userSeeds = require('./userSeeds.json');
const addressSeeds = require('./addressSeeds.json');
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
let d0 = new Date(Math.round(Date.now() + day));
let d1 = new Date(Math.round(Date.now() + day * 2));
let d2 = new Date(Math.round(Date.now() + day * 3));
let d3 = new Date(Math.round(Date.now() + day * 4));
let d4 = new Date(Math.round(Date.now() + day * 5));
let d5 = new Date(Math.round(Date.now() + week + day));
let d6 = new Date(Math.round(Date.now() + week + (day * 2)));
let d7 = new Date(Math.round(Date.now() + week + (day * 3)));
let d8 = new Date(Math.round(Date.now() + week + (day * 4)));
let d9 = new Date(Math.round(Date.now() + week + (day * 5)));
const dateFnsFormat = require('date-fns/format');

function format(date) {
  return dateFnsFormat(date, 'MM/dd/yyyy');
}
db.once('open', async () => {
  await User.deleteMany({});
  await Address.deleteMany({});
  
  const temp = await User.create(userSeeds);
  const addresses = await Address.create(addressSeeds);
  
  for (let i = 0; i < temp.length; i++) {
    temp[i].address = addresses[i];
  }

  const users = await User.create(temp);

  console.log(users);

  await Event.deleteMany({});

  await Event.create([
    {
      "studentId": users[1]._id,
      "firstName": users[1].firstName,
      "lastName": users[1].lastName,
      "date": d0,
      "dayRef": format(d0),
      "time": "9:00am",
      "description": "Lesson",
    },
    {
      "studentId": users[2]._id,
      "firstName": users[2].firstName,
      "lastName": users[2].lastName,
      "date": d0,
      "dayRef": format(d0),
      "time": "16:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[3]._id,
      "firstName": users[3].firstName,
      "lastName": users[3].lastName,
      "date": d0,
      "dayRef": format(d0),
      "time": "17:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[4]._id,
      "studentName": users[4].username,
      "firstName": users[4].firstName,
      "lastName": users[4].lastName,
      "date": d1,
      "dayRef": format(d1),
      "time": "15:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[5]._id,
      "studentName": users[5].username,
      "firstName": users[5].firstName,
      "lastName": users[5].lastName,
      "date": d1,
      "dayRef": format(d1),
      "time": "16:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[6]._id,
      "studentName": users[6].username,
      "firstName": users[6].firstName,
      "lastName": users[6].lastName,
      "date": d1,
      "dayRef": format(d1),
      "time": "17:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[7]._id,
      "studentName": users[7].username,
      "firstName": users[7].firstName,
      "lastName": users[7].lastName,
      "date": d2,
      "dayRef": format(d2),
      "time": "15:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[8]._id,
      "studentName": users[8].username,
      "firstName": users[8].firstName,
      "lastName": users[8].lastName,
      "date": d2,
      "dayRef": format(d2),
      "time": "16:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[1]._id,
      "studentName": users[1].username,
      "firstName": users[1].firstName,
      "lastName": users[1].lastName,
      "date": d5,
      "dayRef": format(d5),
      "time": "15:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[2]._id,
      "studentName": users[2].username,
      "firstName": users[2].firstName,
      "lastName": users[2].lastName,
      "date": d5,
      "dayRef": format(d5),
      "time": "16:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[3]._id,
      "studentName": users[3].username,
      "firstName": users[3].firstName,
      "lastName": users[3].lastName,
      "date": d5,
      "dayRef": format(d5),
      "time": "17:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[4]._id,
      "studentName": users[4].username,
      "firstName": users[4].firstName,
      "lastName": users[4].lastName,
      "date": d6,
      "dayRef": format(d6),
      "time": "15:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[5]._id,
      "studentName": users[5].username,
      "firstName": users[5].firstName,
      "lastName": users[5].lastName,
      "date": d6,
      "dayRef": format(d6),
      "time": "16:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[6]._id,
      "studentName": users[6].username,
      "firstName": users[6].firstName,
      "lastName": users[6].lastName,
      "date": d6,
      "dayRef": format(d6),
      "time": "17:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[7]._id,
      "studentName": users[7].username,
      "firstName": users[7].firstName,
      "lastName": users[7].lastName,
      "date": d7,
      "dayRef": format(d7),
      "time": "15:00pm",
      "description": "Lesson",
    },
    {
      "studentId": users[8]._id,
      "studentName": users[8].username,
      "firstName": users[8].firstName,
      "lastName": users[8].lastName,
      "date": d7,
      "dayRef": format(d7),
      "time": "16:00pm",
      "description": "Lesson",
    },
  ]);
  
  
  console.log('all done!');
  process.exit(0);
});
