function submitForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const values = {};
  for (let [name, value] of formData.entries()) {
    values[name] = value;
  }
}
