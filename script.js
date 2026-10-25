
let form = document.getElementById("dateForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get the input element
        let dateTime = document.getElementById("daytime");

        // Get the value selected by the user
        let dtvalue = dateTime.value;

        // Save selected date and time
        localStorage.setItem("targetDate", dtvalue);

        // Go to countdown page
        window.location.href = "countdown.html";
    });
}


let daysElement = document.getElementById("days");

if (daysElement) {

    // Get saved date from localStorage
    let savedDate = localStorage.getItem("targetDate");

    // Convert saved date into Date object
    let targetDate = new Date(savedDate);


    function CountDown() {

        // Get current date and time
        let now = new Date();

        // Calculate difference
        let difference = targetDate - now;


        // Check if countdown has finished
        if (difference <= 0) {

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            return;
        }


        // Convert milliseconds into days
        let days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


        // Convert milliseconds into hours
        let hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );


        // Convert milliseconds into minutes
        let minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );


        // Convert milliseconds into seconds
        let seconds = Math.floor(
            (difference / 1000) % 60
        );


        // Display countdown
        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");
    }


    // Run immediately
    CountDown();

    // Run every second
    setInterval(CountDown, 1000);
}

let back = document.getElementById("back");

if (back) {

    back.addEventListener("click", function(event) {

        event.preventDefault();

        // Go back to first page
        window.location.href = "index.html";
    });
}
let reset = document.getElementById("reset");
if(reset){
     reset.addEventListener("click", function(event) {
          event.preventDefault();
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            localStorage.removeItem("targetDate");

});
}