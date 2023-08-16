var input = document.getElementById("user");
const btn = document.getElementById("btn");
var box = document.getElementById("box");
//    var name= input.value;

btn.addEventListener("click", () => {
  if (input.value == "") {
    document.getElementById("error").textContent = "please enter a input field";
  } else {
    document.getElementById("error").textContent = "";

    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.id = "check";
    box.append(checkbox);

    let list = document.createElement("li");
    let img = document.createElement("div");
    img.id = "image";
    img.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    list.textContent = `${input.value} `;
    box.append(list);
    box.append(img);

    input.value = "";

    img.querySelector("i").addEventListener("click", () => {
      list.remove();
      img.remove();
      checkbox.remove();
    });

    // adding active class in list
    checkbox.addEventListener("click", () => {
      list.classList.toggle("active");
    });
  }
});
