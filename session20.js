// const contacts = [
//   {
//     id: 1,
//     name: "Khắc Tiệp",
//     phone: "0968888888",
//     email: "khactiep@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Ngọc Trinh",
//     phone: "0969999999",
//     email: "ngoctrinh@gmail.com",
//   },
// ];

// while (true) {
//   let userInput = prompt(`Please input C/R/U/D/E
// - C: Create new contact
// - R: Display all contacts
// - U: Update contact
// - D: Delete contact
// - E: Exit`);

//   if (userInput === "C") {
//     // Thêm mới một contact vào danh sách contacts
//     let name = prompt("Please input contact name");
//     let phone = prompt("Please input contact phone");
//     let email = prompt("Please input contact email");

//     addContact(name, phone, email);

//     displayContacts();
//   } else if (userInput === "R") {
//     // Hiển thị toàn bộ contact trong ds contacts
//     displayContacts();
//   } else if (userInput === "U") {
//     // Cập nhật lại một contact trong ds contacts
//     let name = prompt("Please input contact name u want to update");
//     // Tìm kiếm đối tượng contact trong danh sách contacts qua trường
//     // name
//     let findIndex = findContactByName(name);
//     if (findIndex === -1) {
//       console.log("Contact not found");
//     } else {
//       // Cho người dùng nhập vào các thông tin cập nhật
//       let newName = prompt("Please input contact name");
//       let newPhone = prompt("Please input contact phone");
//       let newEmail = prompt("Please input contact email");
//       // Tiến hành cập nhật lại thông tin contact
//       updateContactByInfo(findIndex, {
//         name: newName,
//         phone: newPhone,
//         email: newEmail,
//       });
//     }
//   } else if (userInput === "D") {
//     // Xoá một contact khỏi danh sách contacts
//   } else if (userInput === "E") {
//     // Thoát khỏi chương trình
//     console.log("Exit contact list successfully !!!");
//     break;
//   } else {
//     console.log("Invalid command");
//   }
// }

// function addContact(name, phone, email) {
//   let contact = {
//     id: contacts.length === 0 ? 1 : contacts[contacts.length - 1].id + 1,
//     //   id: Math.random() // Tạo ra 1 đại lượng ngẫu nhiên,
//     name: name,
//     phone: phone, // ES6 syntax
//     email: email,
//   };

//   contacts.push(contact);
// }

// function displayContacts() {
//   console.log("-- Phone List --");
//   for (let element of contacts) {
//     console.log(`Name: ${element.name}`);
//     console.log(`Phone: ${element.phone}`);
//     console.log(`Email: ${element.email}`);
//     console.log("----------------");
//   }
// }

// function findContactByName(name) {
//   // Tìm kiếm đối tượng contact trong danh sách contacts qua trường
//   // name
//   let updateIndex = contacts.findIndex(function (el, i) {
//     return el.name === name;
//   });
//   return updateIndex;
// }

// function updateContactByInfo(index, info) {
//   contacts[index].name = info.name;
//   contacts[index].email = info.email;
//   contacts[index].phone = info.phone;

//   displayContacts();
// }

// console.log(document);

// Query HMTL Element
// .getElementById(id)

// let div = document.getElementById("demo-id"); // div
// console.log(div);

// let h1 = document.getElementById("h1");
// console.log(h1);

// .getElementsByClassName(class)
// let listItems = document.getElementsByClassName("list-item"); // Tập hợp các thẻ HTML có chung class

// HTMLCollection KHÔNG PHẢI MẢNG
// console.log(listItems);

// let li2 = listItems[1];
// console.log(li2);

// for (let i = 0; i < listItems.length; i = i + 1) {
//   console.log(listItems[i]);
// }

// .getElementsByTagName(tagname)
// let divs = document.getElementsByTagName("div"); // HTMLCollection
// console.log(divs);

// let div2 = divs[1];
// console.log(div2);

// let spans = document.getElementsByTagName("span");
// console.log(spans);

// .querySelector(selector)
// let b = document.querySelector("b#special-prize.list-item");
// console.dir(b);

// console.log(b.innerText);
// console.log(b.textContent);
// console.log(b.innerHTML);

// b.innerText = "Hello world";
// b.textContent = "Text content";
// b.innerHTML = `<i>
//                     <u>INNER HTML</u>
//                 </i>`;

// .style

// b.style.fontSize = "20px";
// b.style.display = "block";
// b.style.width = "300px";
// b.style.height = "300px";
// b.style.backgroundColor = "pink";
// b.style.color = "black";
// b.style.textAlign = "center";
// b.style.lineHeight = "300px";
// b.style.borderRadius = "50%";

// .classList
let b = document.querySelector("b#special-prize.list-item");
console.log(b.children[0].parentElement.parentElement.parentElement);
// b.classList.add("dz")
// console.log(b.classList);
// // b.getAttribute("class");
// // b.setAttribute("class", "aazz")
// let a = document.createElement("li")
// console.log(a);
// a.innerHTML = "Oscar";
// a.classList.add("list-item");
// console.log(a);
// let ul = document.getElementsByTagName("ul")[0];
// console.log(ul);
// ul.appendChild(a);
// b.removeAttribute();
// ul.remove();
let btn = document.getElementById("btn");
console.dir(btn);
btn.onclick = function () {
  // if (b.style.color !== "pink") {b.style.color = "pink"
  // }else{b.style.color = ""}
  if (b.style.display !== "none") {
    b.style.display = "none";
  } else {
    b.style.display = "block";
  }
};
const inputHTML = document.getElementById("input-name");
const buttonHTML = document.getElementById("button-submit");
const listHTML = document.getElementById("list-todo");

const todoList = [];

function render() {
  let stringHTML = "";

  for (let i in todoList) {
    stringHTML += `
            <li>
                <span style="width: 200px; display: inline-block;">${todoList[i]}</span>
                <button onclick="removeTodo(${i})">Remove</button>
            </li>
        `;
  }

  listHTML.innerHTML = stringHTML;
}
render();

function addTodo() {
  const todo = inputHTML.value;
  todoList.push(todo);
  inputHTML.value = "";
  render();
}

function removeTodo(index) {
  todoList.splice(index, 1);
  render();
}
inputHTML = document.getElementById("input-name");
buttonHTML = document.getElementById("button-submit");
listHTML = document.getElementById("list-todo");

const todoList2 = [];

function render() {
  let stringHTML = "";

  for (let i in todoList) {
    stringHTML += `
            <li>
                <span style="width: 200px; display: inline-block;">${todoList2[i]}</span>
                <button onclick="removeTodo(${i})">Remove</button>
            </li>
        `;
  }

  listHTML.innerHTML = stringHTML;
}
render();

function addTodo() {
  const todo = inputHTML.value;
  todoList.push(todo);
  inputHTML.value = "";
  render();
}

function removeTodo(index) {
  todoList.splice(index, 1);
  render();
}
