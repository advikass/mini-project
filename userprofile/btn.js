
document.getElementById("saveButton").addEventListener("click", function () {
    const button = this;
    const loader = button.querySelector(".loader");
    const buttonText = button.querySelector("#buttonText");
    // Disable the button and show the loading animation
    button.disabled = true;
    loader.style.display = "block";
    button.style.none="none"
    buttonText.style.display = "none";

    // Simulate a 5-second delay and then update the button text
    setTimeout(function () {
        loader.style.display = "none";
        buttonText.style.display = "block";
        buttonText.innerText = "Book Saved";

        // Re-enable the button after displaying "Book Saved"
        button.disabled = false;
    }, 5000);
});
