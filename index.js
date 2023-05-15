const rot13 = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

// apply transformation to input
const input = document.querySelector("textarea");

const button = document.createElement("button");
button.innerHTML = "ROT13";
button.style = "margin-left: 10px;";
button.onclick = (e) => {
  e.preventDefault();
  input.value = rot13(input.value);
  return false;
}

input.parentNode.insertBefore(button, input.nextSibling);

// apply transformation to paragraphs

document.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    if (e.target.classList.contains("rot13")) {
      e.target.classList.remove("rot13");
      e.target.innerHTML = e.target.getAttribute("data-original");
    } else {
      e.target.classList.add("rot13");
      e.target.setAttribute("data-original", e.target.innerHTML);
      e.target.innerHTML = rot13(e.target.innerHTML);
    }
  }
});
