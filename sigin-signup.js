function validate(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector(`input[type="text"]`);
  const email = form.querySelector(`input[type="email"]`);
  const password = form.querySelector(`input[type="password"]`);

  if (form.classList.contains("sign-up")) {
    const confirmPassword = form.querySelector(`input[name="confirmPassword"]`);

    if (password.value !== confirmPassword.value) {
      alert("Password does not match");
      // event.preventDefault();
      return false;
    }
    if (password.value.length < 8) {
      alert("Password must be at least 8 characters");
      // event.preventDefault();
      return false;
    }
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    alert("Sign up successful");
  }
  if (form.classList.contains("sign-in")) {
    const storedPassword = localStorage.getItem("password");
    const storedName = localStorage.getItem("name");
    if (storedName === name.value && storedPassword === password.value) {
      alert("Sign in successful");
    } else {
      alert("Invalid email or password");
      event.preventDefault();
      return false;
    }
  }
  return true;
}
