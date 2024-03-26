const menu = document.querySelector(".btn-group-vertical");
const header = document.querySelector(".jumbotron");
const link = document.querySelector(".jumbotron a");
const list = document.querySelector(".list-group");
const selected = document.querySelector(".list-group .active");
const cardsDiv = document.querySelector(".row:nth-of-type(3)");
const cardSelected = document.querySelector(
  ".col-lg-3:nth-of-type(2) .card .card-body a"
);

document.querySelectorAll(".col-lg-3:nth-of-type(2) img")[0].src =
  "https://www.organnact.com.br/wp-content/uploads/2023/01/person-hugging-adorable-yellow-dog-with-funny-cute-2021-08-29-01-49-16-utc-1-1-1024x683.jpg";
document.querySelectorAll(".col-lg-3:nth-of-type(5) img")[0].src =
  "https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg";
document.querySelectorAll(".col-lg-3:nth-of-type(3) img")[0].src =
  "https://www.mundorh.com.br/wp-content/uploads/2019/09/endormarketing-rawpixel.jpg.webp";
document.querySelectorAll(".col-lg-3:nth-of-type(4) img")[0].src =
  "https://www.eusemfronteiras.com.br/wp-content/uploads/2017/04/shutterstock_1910141359-810x540.jpg";

const listItemFour = document.createElement("li");
const listItemFive = document.createElement("li");

[
  document.querySelector(".col-lg-3:nth-of-type(5)"),
  document.querySelector(".col-lg-3:nth-of-type(2)"),
  document.querySelector(".col-lg-3:nth-of-type(4)"),
  document.querySelector(".col-lg-3:nth-of-type(3)"),
].forEach((card) => {
  cardsDiv.appendChild(card);
});

cardSelected.classList.add("bg-success", "border-0");

menu.classList.remove("btn-group-vertical");
menu.classList.add("flex-row");

header.classList.add("text-right", "bg-secondary", "text-white");

link.classList.add("bg-success", "border-0");

listItemFour.classList.add("list-group-item", "active");
listItemFour.textContent = "Quarto item";

listItemFive.classList.add("list-group-item");
listItemFive.textContent = "Quinto item";

list.appendChild(listItemFour);
list.appendChild(listItemFive);

selected.classList.remove("active");
