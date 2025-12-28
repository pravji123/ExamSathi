fetch("data/results.json")
.then(res => res.json())
.then(data => {

  let filtered = data;

  // Teacher → only own data
  if (user.role === "teacher") {
    filtered = data.filter(d => d.teacherId === user.id);
  }

  const labels = filtered.map(d => d.test);
  const values = filtered.map(d => d.accuracy);

  new Chart(document.getElementById("teacherChart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Accuracy %",
        data: values
      }]
    }
  });
});
