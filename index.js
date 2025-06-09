let isLogin = true;

  function toggleForm() {
    isLogin = !isLogin;
    document.getElementById("form-title").innerText = isLogin ? "Login" : "Register";
    document.querySelector("button").innerText = isLogin ? "Login" : "Register";
    document.getElementById("toggleText").innerText = isLogin
      ? "Don't have an account?"
      : "Already have an account?";
  }

  function handleForm(event) {
    event.preventDefault(); // Stop it from submitting anywhere
    alert(isLogin ? "Login clicked!" : "Register clicked!");
  }
createBtn.addEventListener("click", () => {
    // Create a container for each feedback section
    let feedbackSection = document.createElement("div");

    // Create an editable paragraph for input
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    /*inputBox.textContent = "Type your feedback here...";*/

    // Create a submit button
    let submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.className = "submit-btn";

    // When submit is clicked, log or display the text
    submitBtn.addEventListener("click", () => {
        let feedbackText = inputBox.textContent.trim();
        if (feedbackText) {
            alert("Feedback submitted: " + feedbackText);
            // Optional: disable editing after submission
            inputBox.setAttribute("contenteditable", "false");
            submitBtn.disabled = true;
        } else {
            alert("Please enter some text before submitting.");
        }
    });

    // Append elements to container and then to page
    feedbackSection.appendChild(inputBox);
    feedbackSection.appendChild(submitBtn);
    notesContainer.appendChild(feedbackSection);
});