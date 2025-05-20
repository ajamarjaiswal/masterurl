document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submission

  const inputs = document.querySelectorAll("form input");
  let allFilled = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      allFilled = false;
      alert(`Please fill out the ${input.placeholder} field.`);
      input.focus();
      return false;
    }
  });

  const password = inputs[2].value;
  const confirmPassword = inputs[3].value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    inputs[3].focus();
    return;
  }

  alert("Form submitted successfully!");
  // You can add backend integration here
});
