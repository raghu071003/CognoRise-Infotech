let timer;

function startCountdown() {
  clearInterval(timer);

  const inputDate = document.getElementById("date").value;
  const targetDate = new Date(inputDate).getTime();

  if (isNaN(targetDate)) {
    alert("Please enter a valid date and time.");
    return;
  }

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  updateCountdown();


  timer = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Countdown Over!";
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      daysElement.textContent = days;
      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
  }
}
