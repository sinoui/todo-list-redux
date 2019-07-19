const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


const items = [];

for (let i = 0; i < 100; i++) {
  items.push({
    id: `${i}`,
    gid: `${i}`,
    userId: `${i}`,
    userName: `王先生${i + 1}`,
    age: `${i+1}`,
    branchNo: '机构代码',
    branchName: `广西壮族自治区分行001${i + 1}`,
    deptId: `00100${i}`,
    deptName: '部门名称',
    bookDuty: '局领导',
    bussinessDivision: '管理一',
    empTelone: '010-131421',
    ipPhone: '010-131422',
    userMobilephoneMessage: '13788888888',
  });
}

let idSeed = 1000;

// 
app.get("/users", (req, res) => {
  const {
    page = 0, size = 10
  } = req.query;
  const pageNo = parseInt(page, 10);
  res.json({
    totalElements: items.length,
    number: pageNo,
    totalPages: Math.ceil(items.length / size),
    size,
    content: items.slice(pageNo * size, (pageNo + 1) * size),
  });
});

app.get('/users/:id', (req, res) => {
  const {
    id
  } = req.params;
  const user = items.find((item) => item.id === id);

  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404).end();
  }
})

app.post('/users', (req, res) => {
  const {
    body
  } = req;
  const newItem = {
    ...body,
    id: `${idSeed++}`
  }
  items.unshift(newItem);
  res.json(newItem);
})

app.put('/users/:id', (req, res) => {
  const newItem = req.body;
  const idx = items.findIndex((item) => item.id === newItem.id);



  if (idx === -1) {
    res.sendStatus(404);
  } else {
    items.splice(idx, 1, newItem);
    res.json(newItem);
  }

});

app.delete('/users/:id', (req, res) => {
  const {
    id
  } = req.params;
  const idx = items.findIndex((item) => item.id === id);

  if (idx === -1) {
    res.sendStatus(404);
  } else {
    items.splice(idx, 1);
    res.sendStatus(204);
  }
})


const server = app.listen(4000, () => {
  const {
    address: host,
    port
  } = server.address();

  // tslint:disable-next-line:no-console
  console.log(
    "newoa-api-mock-server app listening as http://%s:%s",
    host,
    port
  );
});