document.getElementById("message-form").onsubmit = e => {
  e.preventDefault();

  const message = document.querySelector('[name="message"]').value;
  const gender = document.querySelector('[name="gender"]:checked').value;
  const name = document.querySelector('[name="name"]').value;
  const email = document.querySelector('[name="email"]').value;

  const inputValues = {
    message,
    gender,
    name,
    email
  };

  if (!allInputsFilled(inputValues)) {
    console.log("%cPlease enter all required fields.", "color: red");
  } else if (!emailValid(email)) {
    console.log("%cEmail not valid.", "color: red");
  } else {
    toggleDisableForm();
    consoleLogSuccess(inputValues);
  }

  togglePopup();
};

function sendAnotherMsg() {
  document.querySelector('[name="message"]').value = "";
  document.querySelector('[name="name"]').value = "";
  document.querySelector('[name="email"]').value = "";
  document.querySelector('[id="radio3"]').checked = "checked";
  toggleDisableForm();
  togglePopup();
}

function togglePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = popup.style.display === "none" ? "block" : "none";
}

function emailValid(email) {
  var re = /[^@\s]+@[^@\s]+\.[^@\s]+/;
  return re.test(String(email).toLowerCase());
}

function toggleDisableForm() {
  const form = document.querySelector('fieldset[form="message-form"]');
  form.disabled = !form.disabled;
}

function allInputsFilled(data) {
  let validated = true;
  Object.keys(data).forEach(key => {
    if (data[key] === "") {
      validated = false;
    }
  });
  return validated;
}

function consoleLogSuccess(inputValues) {
  console.log(
    "%cAll required fields entered." + " %c\u2714",
    "color: green;",
    "color: green;"
  );
  console.log(
    "%cEmail validated." + " %c\u2714",
    "color: green;",
    "color: green;"
  );
  console.log("%cInput values:", "color: purple;");
  Object.keys(inputValues).forEach(key => {
    console.log(
      `%c${key}%c: "${inputValues[key]}"`,
      "color:white; background-color:orange; border-radius:3px",
      ""
    );
  });
}

document.querySelector('[name="message"]').addEventListener("input", () => {
  const textarea = document.querySelector('[name="message"]');
  const grabber = document.getElementById('grabber');
  if (textarea.clientHeight < textarea.scrollHeight) {
    grabber.classList.remove("grabber");
    textarea.classList.remove("textarea-border");
  }else{ 
    grabber.classList.add("grabber");
    textarea.classList.add("textarea-border");
  }
});