var ctx1 = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontColor = '#ACACAC';

let chart = new Chart(ctx1, {
   type: 'line',
   data: {
       datasets: [{
           label: 'Hourly',
           data: [500, 700, 1000, 1200, 1500, 1700, 2000, 2200, 2300, 2500],
           backgroundColor: "rgba(116, 119, 191, 0.2)",
           pointBorderColor:"#8588C6",
           pointBackgroundColor:"#fff",
           borderColor:"rgba(131, 134, 199, 0.5)",

       }, {
            label: 'Daily',
            data: [100, 400, 800, 700, 900, 1000, 1200, 1300, 1200, 1000],
            backgroundColor: "rgba(116, 119, 191, 0.2)",
            pointBorderColor:"#8588C6",
            pointBackgroundColor:"#fff",
            borderColor:"rgba(131, 134, 199, 0.5)",
       }, {
            label: 'Weekly',
            data: [400, 500, 600, 800, 1000, 1100, 1300, 1500, 1300, 1100],
            backgroundColor: "rgba(116, 119, 191, 0.2)",
            pointBorderColor:"#8588C6",
            pointBackgroundColor:"#fff",
            borderColor:"rgba(131, 134, 199, 0.5)",
       },{
            label: 'Monthly',
            data: [1000, 1200, 1100, 1500, 1600, 1800, 2000, 1700, 1900, 2100],
            backgroundColor: "rgba(116, 119, 191, 0.2)",
            pointBorderColor:"#8588C6",
            pointBackgroundColor:"#fff",
            borderColor:"rgba(131, 134, 199, 0.5)",
       }],
       labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24'],
       fontColor: 'red',
   },
   options: {
     elements: {
          line: {
            tension: 0,

          }
      },
      legend: {
        display: false,
      }
  }
});


var ctx2 = document.getElementById("myChart-daily").getContext('2d');
var myChart = new Chart(ctx2, {
type: 'bar',
data: {
  labels: [ "S","M", "T", "W", "T", "F", "S"],
  datasets: [{
    data: [80, 100, 150, 150, 100, 90, 80],
    backgroundColor: "#7377BF",
  }]
},
options: {
  legend: {
    display: false,

  }
}
});

var ctx3 = document.getElementById("myChart-mobile").getContext('2d');

var myDoughnutChart = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels:["Phones", "Mobile", "Desktop"],
    datasets: [{
      data:[50,100,200],
      labels: ["Phones", "Mobile", "Desktop"],
      backgroundColor: ["#74B1BF", "#81C98F", "#7377BF"],
      lineWidth: 100,
    }]
  },
  options: {
    legend: {
      position:"right",
      labels: {
                display: false,
                padding: 20,
                boxWidth: 15,
            }
    },

  }
});
