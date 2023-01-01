const form = document.getElementById("log-form");
const table = document.getElementById("training-table");

form.addEventListener("submit", event => {
  event.preventDefault();
  const date = document.getElementById("date").value;
  const activity = document.getElementById("activity").value;
  const distance = document.getElementById("distance").value;
  const duration = document.getElementById("duration").value;
  addTraining(date, activity, distance, duration);
});

function addTraining(date, activity, distance, duration) {
  const row = table.insertRow(-1);
  const dateCell = row.insertCell(0);
  const activityCell = row.insertCell(1);
  const distanceCell = row.insertCell(2);
  const durationCell = row.insertCell(3);
  dateCell.innerHTML = date;
  activityCell.innerHTML = activity;
  distanceCell.innerHTML = distance;
  durationCell.innerHTML = duration;
}