//var capAllocatedColours = [];

const colorPicker = document.querySelector(".colorPicker");

// colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  console.log(event);

  document.querySelectorAll(".kit-section").forEach((kitSection) => {
    console.log(kitSection.classList);
    if(event.target.name == 'cap' && kitSection.classList.contains("cap")) {
      // if (event.target.name === "cap");
      //if (capAllocatedColours.indexOf(event.target.value) > -1) {
      kitSection.style.backgroundColor = event.target.value;
      //capAllocatedColours.push = event.target.value;
    }
    else if(event.target.name == 'jersey' && kitSection.classList.contains("jersey")) {
      kitSection.style.backgroundColor = event.target.value;
    }
    else if(event.target.name == 'trousers' && kitSection.classList.contains("trousers")) {
      kitSection.style.backgroundColor = event.target.value;
    }
    else if(event.target.name == 'saddle' && kitSection.classList.contains("saddle")) {
      kitSection.style.backgroundColor = event.target.value;
    }
  });
}
