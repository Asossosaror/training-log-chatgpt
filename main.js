
window.addEventListener("load", () => {
  const form = document.querySelector("form");
const table = document.querySelector("table");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // get the form data
  const date = form.querySelector("#date").value;
  const activity = form.querySelector("#activity").value;
  const distance = form.querySelector("#distance").value;
  const duration = form.querySelector("#duration").value;

  // add the training data to the table
  addTraining(date, activity, distance, duration);

  // create the VO2 max graph
  createVO2MaxGraph();
});

function addTraining(date, activity, distance, duration) {
  // create a row for the training data and insert it into the table
  const row = table.insertRow(-1);

  // insert data cells into the row
  const dateCell = row.insertCell(0);
  const activityCell = row.insertCell(1);
  const distanceCell = row.insertCell(2);
  const durationCell = row.insertCell(3);
  const deleteCell = row.insertCell(4);

  // set the content of the data cells
  dateCell.innerHTML = date;
  activityCell.innerHTML = activity;
  distanceCell.innerHTML = distance;
  durationCell.innerHTML = duration;

  // insert a delete button into the delete cell
  deleteCell.innerHTML = '<button class="delete-button">Delete</button>';

  // add styles to the delete button
  const deleteButton = deleteCell.querySelector(".delete-button");
  deleteButton.style.border = "none";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.color = "white";
  deleteButton.style.padding = "5px 10px";
  deleteButton.style.cursor = "pointer";

  // add a click event listener to the delete button
  deleteButton.addEventListener("click", () => {
    // remove the row from the table when the delete button is clicked
    row.remove;
  });

  function createVO2MaxGraph() {
    // create a new div element to hold the graph
    const graphContainer = document.createElement("div");
    graphContainer.id = "vo2max-graph";
    graphContainer.style.width = "800px";
    graphContainer.style.height = "600px";
  
    // get the data for the graph
    const data = getVO2MaxData();
  
    // create the graph using the data
    const ctx = graphContainer.getContext("2d");
    const graph = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.dates,
        datasets: [{
          label: "VO2 Max (ml/kg/min)",
          data: data.vo2max,
          borderColor: "rgba(0, 0, 255, 0.8)",
          backgroundColor: "rgba(0, 0, 255, 0.2)",
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
      },
    });
  
    // insert the graph into the page
    document.body.appendChild(graphContainer);
  }
  
  function getVO2MaxData() {
    // replace this function with your own code to retrieve the data for the graph
    return {
      dates: ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29"],
      vo2max: [45, 47, 49, 50, 52],
    };
  }
}
});
