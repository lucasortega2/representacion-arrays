const MyArray = ["Pedro", "Lucas", "Juan", "Violeta", "Amapola"];
const $array = document.getElementById("array");
const pintarElementos = () => {
  $array.innerHTML = "";
  const $fragment = document.createDocumentFragment();
  MyArray.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
  });
  $array.appendChild($fragment);
};
pintarElementos();
const $update = document.getElementById("label-update");
const $submit = document.getElementById("submit");
const $form = document.getElementById("myForm");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("label-update").value;
  if (inputValue.trim() !== "") MyArray.push(inputValue);
  pintarElementos();
  $update.value = "";
});
