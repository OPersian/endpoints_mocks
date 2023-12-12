const express = require('express');
const app = express();
const port = 4141;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());


// NOTE: add your endpoints below.

// Example #1
app.get('/', (req, res) => {
  console.log(req.body);
  // res.set('Content-Type', 'application/json');
  // res.status(200);
  res.json({ status: 'ok'});
});


// Example #1
app.post('/content/rateext', (req, res) => {
  console.log(req.body);
  // res.set('Content-Type', 'application/json');
  // res.status(200);
  res.json({ status: 'ok'});
});


// Example #2
app.post('/saba/api/v1/complete/', (req, res) => {
  console.log(req.body);
  res.json({Reg_ID: "regdw000000006601111", Status: "Complete"});
});


// Example #3
app.get('/team/emplemplidid1?user_id=emplemplidid1', (req, res) => {
  console.log(req.body);
  let response = {
    "data": {
      "teamList": [
          {
            "locSite": "Energodar,CA",
              "employeeName": "Oridi Farken",
              "imageURL": "https://example.com/placeholder.png",
              "teamCount": "3",
              "employeeId": "emplemplidid2",
              "profileImage": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMWSURBVHhe7doxcttGGIDRXMoH0mV0Fp1EtVvXqt26ZSxHztAJfhKg+SUzy7czrxOoAt/sLhb449PrpxPcm7BICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEg8TlhfXk+Xx9vp5fPGdRc9n7Z+9e3taeNvH8vyYT1//bjbR8bX583f+jdhTdYN6/PL9znod8aeGUxYk0XD2r7hx8fr6Xnz938S1mTJsG5a/qZxcVkU1mS9sC4ugdMMdGmGu7QkCmuyXljD09+emz3NdPO1wposF9bT29Z8dW2v9GGa7cblUFiTBwlr7xnV0+nl28cl5+Pby+lp8++FNXmYpXD3rHWIsCbrhTXc7PPx+mXrulsIa7JgWEePG255lfOTsCZLhrVn1hrH7tc574Q1WTSsd78R1/sYN+znhDVZOKy/bD8l7h3XlklhTZYP629XP5uZhpP3WzxOWL8Yzqum4RzrsAcN65+u7cemWUtYE2H9Yp7JtmMR1mTRsM4DOXpONcxem8cQwposFdb0BHjsRg+zlrAOWWvGusd7wkNfOAhrsthSOCxj72PXgac91r0st8e69p5wfAF98Zzr2Jenwlpy835h1rpxzKHc/3/d78uL/9eCYX138yn7xri4hAprsmZY7+4S17VNv7Am64b1w8FXN2dj3z5JWJPFwzqzZwbb9eR4TliTxwmL/5SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLhLBICIuEsEgIi4SwSAiLwKfTnwHWUAUIYrvLAAAAAElFTkSuQmCC",
              "team": {
                "hasTeam": true,
                  "teamLinkText": "Oridi's Team"
              },
              "primaryRole": {
                "roleText": "Financial Analysis",
                "actionRequired": false,
                "roleStatus": "approved",
                "tooltip": null
              },
              "pathwayEligible": true,
              "status": {
              "progressChart": {
                "showChart": true,
                  "totalHours": "40",
                  "completedHours": "29.83", "progress": "74"
              },
              "infoMessage": {
                "showMessage": true,
                "messageText": "74% of pathway completed"},
                "statusText": "Pathway not submitted",
                "pathwayStatus": "not_submitted",
                "actionRequired": true,
                "tooltip": "Sandra needs to submit the pathway"
            }
          }
      ],
      "teamName": "Oridin Ori"
    },
    "msg": "1 items retrieved",
    "filters": [],
    "success": true
  };
  res.json(response);
});


// Example #4
app.get('user?user_id=emplemplidid1&notifications=0', (req, res) => {
  console.log(req.body);
  let response = {
    "data": {
      "profileUrl": "https://example.com",
      "userId": "emplemplidid1",
      "userName": "Ritta Ritta",
      "isManager": true,
      "imageSrc": "https://example.com/placeholder.png",
      "profileImage": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOfSURBVHhe7dqxbRsxGIbhzOKdsk6GyRzp0rj3AAbSuXfv8Aw7UAzyjpT0ARL5/MBTWfIJ0AuSJ+nb26+HN7g2YREhLCKERYSwiBAWEcIiQlhECIsIYREhLCKERYSwiBAWEcIiQlhECIsIYREhLCKERYSwiBAWEcIiQlhECIsIYREhLCKERYSwiBAWEcIiQlhECIsIYREhLCKERYSwiBAWEcIiQlhECIsIYREhLCKERYSwiBAWEcIiQlhECIsIYREhLCKERYSwiBAWEcIiQlhECIsIYRExSVg/3urzu/LYHc9/Pp53Mq8/649teSrX3J1yjcfK8yYzeVhlnr9XHt9wSVgvH48fmZfyumv/awLzhzWyQpwT1mP5+0Uz5wq2QFhleled4bAOrts9g1v2HVgjrG2eas/7YjSsc7a/1ky2La4TVs+qMBLW7hbYutbe65xrS1worDJHB/mRsFp3fz03C62VbuRG48atFdbRqjASVu2xvWel1mo30Xa4WFhl9s5MF4d1EO4/ZWV6/XjK6ey9tjuzXljbtA7y19gKJ7zDO8fcYb0MvvkjYfXE3HMnOqm5w9re2NZBuXaeGQqrGPq4oXebnMP8YTVXlsobPRpWz6rVmom/ztksEFZRPWiX+RrNcFibC+La5vD/36c1wmrdhW1z+tnRWWF9aMXbNeW5k22Ti4RVND8pPznIXxLWp8OfzbRmrrjWCWtzdJC/Rlj/2VkpazPRtrhWWHvnoe2xVw/rq53rv888q9ZiYRWtrWoLKB7Wp84z3x1bL6yrbk+n/2t0tWm85kk+hlgwrGLkV5+1sFp3gEOrTSNwYd2SwbA2rTi+Ti2sa3xPOPkvHNYNq3dLrG6Fjett03Um27m2M9YtOSesouczp1YoR98Ttq69e82BFe/GrR3W5iiQ5gq0s2qdO35BemsuCOsokL2t7exP2SvTtYXeD2Ft9g7yR2/4VeKaZwv8JKx3O4fprpWk80agNhNtf6eE9al1+z+6RV1yQzCRScLi1giLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFgEPb38BjS78Ve/sDgYAAAAASUVORK5CYII=",
      "primaryRole": "Not Selected",
      "secondaryRoles": [],
      "interests": []},
      "success": true,
      "msg": "User profile retrieved"
  };
  res.json(response);
});


// Initial to-dos
let todos = [
  { id: Date.now() - 2, text: 'Refresh React knowledge', completed: false },
  { id: Date.now() - 1, text: 'Read a book', completed: true },
  { id: Date.now(), text: 'Write a blog post', completed: false }
];


// GET - Read all items
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST - Create a new item
app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), ...req.body };
  todos.push(todo);
  res.status(201).json(todo);
});

// DELETE - Delete an item
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(204).send();
});

// PUT - Update an item
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.map(todo =>
      todo.id === parseInt(id) ? { ...todo, ...req.body } : todo
  );
  res.json(todos.find(todo => todo.id === parseInt(id)));
});


app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
