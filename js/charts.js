 var ctx1 = document.getElementById("myChart").getContext("2d");

 Chart.defaults.global.defaultFontColor = '#ACACAC';

 let chart = new Chart(ctx1, {
     type: 'line',
     data: {
         datasets: [{
               label: 'Hourly',
             data: [500, 700, 1000, 1200, 1500, 1700, 2000, 2200, 2300, 2500],
              backgroundColor: "rgba(116, 119, 191, 0.2)"
         }, {
               label: 'Daily',
             data: [100, 400, 800, 700, 900, 1000, 1200, 1300, 1200, 1000],
              backgroundColor: "rgba(43, 233, 222, 0.3)"
         }, {
               label: 'Weekly',
             data: [400, 500, 600, 800, 1000, 1100, 1300, 1500, 1300, 1100],
              backgroundColor: "rgba(196, 227, 5, 0.4)"
         },{
               label: 'Monthly',
             data: [1000, 1200, 1100, 1500, 1600, 1800, 2000, 1700, 1900, 2100],
              backgroundColor: "rgba(31, 224, 103, 0.5)"
         }],
         labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24'],
         fontColor: 'red'
     },

     options: {
         scales: {
             xAxes: [{
                 ticks: {
                     min: '16-22'
                 }
             }]
         }
    }

});

var ctx2 = document.getElementById("myChart-daily").getContext('2d');
var myChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: [ "S","M", "T", "W", "T", "F", "S"],
    datasets: [{
      data: [50, 100, 150, 150, 100, 90, 50],
      backgroundColor: "#7377BF"
    }]
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
        options: {
          legend: {
            position:"bottom"
          }
        }
      }]
    }
});
