const TO_ADDRESS = "hello@examplewebsite142.com";
const form = document.querySelector("#feedbackForm");

console.log("Form detected:", form);

function buildMailto() {
    const email = document.querySelector("#email").value;
    const feedback = document.querySelector("#feedback").value;

    const subject = "Thrift Treasures Store Feedback";
    const body = feedback;

    return (
        "mailto:" + TO_ADDRESS +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body)
    );
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const mailtoLink = buildMailto();

    console.log("Generated link:", mailtoLink);

    window.location.href = mailtoLink;
});