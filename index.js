const MyArray = ["Pedro", "Lucas", "Juan", "Violeta", "Amapola"];

const pintarElementos = () => {
  const $array = document.getElementById("array");
  const $fragment = document.createDocumentFragment();
  MyArray.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.prepend($li);
  });
  $array.prepend($fragment);
};
pintarElementos();
