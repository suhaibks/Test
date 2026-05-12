const form = document.querySelector(".inquiry-form");
const note = document.querySelector(".form-note");
const guideForm = document.querySelector(".guide-form");
const guideNote = document.querySelector(".guide-note");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  note.textContent = name
    ? `Thank you, ${name}. This demo form is ready to connect to your preferred inbox or CRM.`
    : "Thank you. This demo form is ready to connect to your preferred inbox or CRM.";
  form.reset();
});

guideForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(guideForm);
  const email = String(data.get("guide-email") || "").trim();
  guideNote.textContent = email
    ? "Thank you. The planning guide signup is ready to connect to your email platform."
    : "Enter an email address to receive the planning guide.";
  if (email) {
    guideForm.reset();
  }
});
