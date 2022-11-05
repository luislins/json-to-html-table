import "./style.css";

function formatValuesForTable(data) {
  let obj = {};

  let columns = [];
  data.map((obj) => {
    Object.keys(obj).forEach((key) => {
      columns.push(key);
    });
  });
  obj.columns = [...new Set(columns)];
  return obj;
}

var data = [
  {
    random: "23",
    "random float": "76.604",
    bool: "false",
    date: "1984-07-13",
    regEx: "helloooooooooooooooooooooooooooooooooo world",
    enum: "online",
    firstname: "Florencia",
    lastname: "Fosque",
    city: "Dibrugarh",
    country: "Holy See (Vatican City State)",
    countryCode: "NF",
    "email uses current data": "Florencia.Fosque@gmail.com",
    "email from expression": "Florencia.Fosque@yopmail.com",
  },
  {
    random: "52",
    "random float": "98.354",
    bool: "false",
    date: "1998-10-10",
    regEx: "helloooooooooooooooooooooooooooooooooooooooooooooooooooooooo world",
    enum: "json",
    firstname: "Nadine",
    lastname: "Kussell",
    city: "Chiang Mai",
    country: "Puerto Rico",
    countryCode: "LR",
    "email uses current data": "Nadine.Kussell@gmail.com",
    "email from expression": "Nadine.Kussell@yopmail.com",
  },
];

let _table_ = document.createElement("table");
let obj = formatValuesForTable(data);
let columns = obj.columns;
// header
let tHead = _table_.createTHead();
let tHeadRow = tHead.insertRow(-1);
columns.map((value, i) => {
  let cell = tHeadRow.insertCell(i);
  let text = document.createTextNode(value);
  cell.appendChild(text);
});

// body
let tBody = _table_.createTBody();
data.forEach((obj, i) => {
  let tBodyRow = tBody.insertRow(-1);
  columns.forEach((key, j) => {
    let valor = obj[key] ? obj[key] : "";
    let cell = tBodyRow.insertCell(j);
    let text = document.createTextNode(valor);
    cell.appendChild(text);
  });
});

document.querySelector("#table").appendChild(_table_);
