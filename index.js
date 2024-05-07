// import { countryList } from "./codes";

const BASE_URL = "https://open.er-api.com/v6/latest/USD";

let img_url;
let data;
let from;
let to;
let total;
let amount;
let fun1, fun2, fun3;

for (let i in countryList) {
  var option = document.createElement("option");
  option.setAttribute("value", i);
  option.textContent = i;
  document.querySelector("#selectfrom").appendChild(option);
}
for (let i in countryList) {
  var option = document.createElement("option");
  option.setAttribute("value", i);
  option.textContent = i;
  document.querySelector("#selectto").appendChild(option);
}
function updatedvalue() {
  total = document.querySelector("input").value;
  fun1 = 1;
  checkAndExecute();
}

function updatedfrom() {
  from = document.querySelector("#selectfrom").value;
  fun2 = 1;
  document.querySelector("#from").innerText = from;
  let name = countryList[from];
  img_url = `https://flagsapi.com/${name}/flat/64.png`;
  document.querySelector("#imgfrom").setAttribute("src", img_url);
  checkAndExecute();
}

function updatedto() {
  to = document.querySelector("#selectto").value;
  fun3 = 1;
  document.querySelector("#to").innerText = to;
  let name = countryList[to];
  img_url = `https://flagsapi.com/${name}/flat/64.png`;
  document.querySelector("#imgto").setAttribute("src", img_url);
  checkAndExecute();
}

function checkAndExecute() {
  if (fun1 === 1 && fun2 === 1 && fun3 === 1) {
    currencyvalue(exhangerate); //value update hone ke baad control yaha pe ajaye
  }
}

function exhangerate(from, to, total) {
  let valfrom = from; //AED - 3
  let valto = to; //IND - 83
  let exchange = valto / valfrom; //exchange = 83/3 = 27
  let amount = total * exchange; //amount = 10*27 = 276;
  console.log(amount);
  document.querySelector("#from_total").innerText = total;
  document.querySelector("#to_total").innerText = amount;
}

async function currencyvalue(fun) {
  let promise = await fetch(BASE_URL);
  data = await promise.json();
  console.log(from, to);
  let from2 = data.rates[from];
  let to2 = data.rates[to];
  console.log(data);
  console.log(from2);
  console.log(to2);
  fun(from2, to2, total);
}

console.log(from);
