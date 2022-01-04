let h1 = document.createElement("h1");
h1.innerText = "Corona Reports";
h1.setAttribute("id", "title");
h1.classList.add("text-center", "my-2");
document.body.appendChild(h1);

let main = document.createElement("div");
main.classList.add("container");
document.body.appendChild(main);

let input = document.createElement("select");
input.classList.add("form-select", "w-75", "mx-auto", "m-3");
input.setAttribute("id", "input");
let ch = document.createElement("option");
ch.setAttribute("disabled", "");
ch.innerHTML = "Choose country";
input.appendChild(ch);
main.appendChild(input);
fetch(`https://covid-api.mmediagroup.fr/v1/cases`)
  .then((d) => d.json())
  .then((data) => {
    let obj = Object.values(data);
    for (let i = 0; i < obj.length; i++) {
      let opt = document.createElement("option");
      opt.setAttribute("value", `${obj[i].All.country}`);
      opt.setAttribute("id", `${obj[i].All.country}`);
      opt.innerHTML = obj[i].All.country;
      input.appendChild(opt);
    }
  });
let btn = document.createElement("button");
btn.classList.add("btn", "btn-primary", "mx-auto", "d-block");
btn.setAttribute("id", "btn");
btn.innerHTML = "Search";
main.appendChild(btn);

let row = document.createElement("div");
row.classList.add("row", "my-5");
main.appendChild(row);

document.getElementById("btn").addEventListener("click", () => {
  let gg = document.getElementById("input");

  var a = gg.value;
  localStorage.setItem("val", a);
  window.open("page.html", "_blank");
});

fetch(`https://covid-api.mmediagroup.fr/v1/cases`)
  .then((d) => d.json())
  .then((data) => {
    let obj = Object.values(data);

    for (let i = 0; i < obj.length; i++) {
      if (obj[i].All.country != undefined) {
        // console.log(obj[i].All.country);
        let col = document.createElement("div");
        col.classList.add(
          "col-sm-6",
          "col-md-4",
          "col-lg-4",
          "col-xl-4",
          "my-3"
        );
        row.appendChild(col);
        //card
        let div_card = document.createElement("div");
        div_card.classList.add("card", "h-100");
        col.appendChild(div_card);
        //card header
        let div_head = document.createElement("div");
        div_head.classList.add("card-header", "text-center");
        let tit = document.createElement("h5");
        tit.classList.add("card-header", "text-dark");
        tit.innerHTML = `${obj[i].All.country}`;
        div_head.appendChild(tit);
        div_card.appendChild(div_head);

        // card body
        let div_body = document.createElement("div");
        div_body.classList.add("card-body", "text-center");
        div_card.appendChild(div_body);
        //inside body text
        let d1 = document.createElement("div");
        d1.classList.add("card-text");
        div_body.appendChild(d1);
        let div_1 = document.createElement("div");
        div_1.innerHTML = `Capital:${obj[i].All.capital_city}`;

        let d2 = document.createElement("div");
        d2.classList.add("card-text");
        div_body.appendChild(d2);
        let div_2 = document.createElement("div");
        div_2.innerHTML = `Affected:${obj[i].All.confirmed}`;

        let d3 = document.createElement("div");
        d3.classList.add("card-text");
        div_body.appendChild(d3);
        let div_3 = document.createElement("div");
        div_3.innerHTML = `Deaths:${obj[i].All.deaths}`;

        let d4 = document.createElement("div");
        d4.classList.add("card-text");
        div_body.appendChild(d4);
        let div_4 = document.createElement("div");
        div_4.innerHTML = `Population:${obj[i].All.population}`;

        let d5 = document.createElement("div");
        d5.classList.add("card-text");
        div_body.appendChild(d5);
        let div_5 = document.createElement("div");
        div_5.innerHTML = `SQ km Area:${obj[i].All.sq_km_area}`;

        let d6 = document.createElement("div");
        d6.classList.add("card-text");
        div_body.appendChild(d6);
        let div_6 = document.createElement("div");
        div_6.innerHTML = `Updated:${obj[i].All.updated}`;

        d1.appendChild(div_1);
        d2.appendChild(div_2);
        d3.appendChild(div_3);
        d4.appendChild(div_4);
        d5.appendChild(div_5);
        d6.appendChild(div_6);
      }
    }
  });
