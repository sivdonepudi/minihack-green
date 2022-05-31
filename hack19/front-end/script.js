const colorPicker = document.querySelector(".colorPicker");
console.log(colorPicker);
// colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll(".kit-section").forEach((kitSection) => {
    // if (event.target.name === "cap");
    kitSection.style.backgroundColor = event.target.value;
    // console.log(event.target.value);
  });
}
