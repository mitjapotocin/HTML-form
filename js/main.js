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
    disableForm();
    consoleLogSuccess(inputValues);
  }
};

function emailValid(email) {
  var re = /[^@\s]+@[^@\s]+\.[^@\s]+/;
  return re.test(String(email).toLowerCase());
}

function disableForm() {
  document
    .querySelector('fieldset[form="message-form"]')
    .classList.add("disabled");
  document.querySelector('fieldset[form="message-form"]').disabled = true;
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
      "color:white; background-color:orange",
      ""
    );
  });
}
