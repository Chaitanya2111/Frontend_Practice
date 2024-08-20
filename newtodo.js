function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskTable = document.getElementById("taskTable");

  if (taskInput.value !== "") {
    var newRow = taskTable.insertRow(taskTable.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = taskInput.value;
    cell2.innerHTML = '<button onclick="deleteTask(this)">Delete</button>';

    taskInput.value = "";
  }
}

function deleteTask(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
