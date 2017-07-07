const hourlyTraffic = document.getElementById('Hourly-traffic');
const dailyTraffic = document.getElementById('Daily-traffic');
const weeklyTraffic = document.getElementById('Weekly-traffic');
const monthlyTraffic = document.getElementById('Monthly-traffic');
const barDailyTraffic = document.getElementById('bar-daily-traffic');
const mobileUsers = document.getElementById('mobile-users');
const list = document.getElementById("traffic-ul");


Chart.defaults.global.defaultFontColor = '#ACACAC';

let hourlyChart = new Chart (hourlyTraffic, {
  type:"line",
  data: {
    labels: ["12 - 5", "5 - 11", "12 - 18", "19 - 12"],
    datasets: [
			{
				fill: false,
				lineTension: 0,
				borderColor: "#a111af",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointHoverRadius: 4,
				pointRadius: 3,
				data: [12,23,32,19]
			}
		]
	},
  options: {
		scales: {
			xAxes: [{
				gridLines: {
					color: "#000000",
					display: false
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				gridLines: {
          			color: "#000000",
          			display: false
        		}
			}]
		},
		legend: {
            display: false
         }
	}
});

let dailyChart = new Chart(dailyTraffic, {
	type: 'line',
	data: {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
				label: "Daily Traffic",
				fill: true,
				lineTension: 0.5,
				backgroundColor: "#a111af", //$light-purple
				borderColor: "#72dff7", //$light-blue
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(66,212,244,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 7,
				pointHitRadius: 10,
				data: [33,59,78,63,69,55,40]
			}
		]
	},
	options: {
		responsive: true,
		scales: {
			xAxes: [{
				gridLines: {
					color: "#000000",
					display: false
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				gridLines: {
          			color: "#000000",
          			display: false
        		}
			}]
		},
		legend: {
            display: false
         }
	}
});




let weeklyChart = new Chart(weeklyTraffic, {
	type: 'line',
	data: {
		labels: ['1', '2', '3', '4', '5', '6', '7'],
		datasets: [
			{
				label: "Weekly Traffic",
				fill: true,
				lineTension: 0.5,
				backgroundColor: "#e8ff1e", //$yellow
				borderColor: "#a111af", //$light-purple
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(66,212,244,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 7,
				pointHitRadius: 10,
				data: [153,175,164,186, 178, 181, 186]
			}
		]
	},
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					color: "#000000",
					display: false
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: false
				},
				gridLines: {
          			color: "#000000",
          			display: false
        		}
			}]
		},
		legend: {
            display: false
         }
	}
});

let monthlyChart = new Chart(monthlyTraffic, {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
		datasets: [
			{
				label: "Weekly Traffic",
				fill: true,
				lineTension: 0.5,
				backgroundColor: "#a111af", //$light-purple
				borderColor: "#e8ff1e", //$yellow
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(66,212,244,1)",
				pointHoverBorderColor: "#e8ff1e",
				pointHoverBorderWidth: 2,
				pointRadius: 7,
				pointHitRadius: 10,
				data: [433,459,494,533,606,578,612,633]
			}
		]
	},
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					color: "#000000",
					display: false
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: false
				},
				gridLines: {
          			color: "#000000",
          			display: false
        		}
			}]
		},
		legend: {
            display: false
         }
	}
});

dailyTraffic.style.display = "none";
weeklyTraffic.style.display = "none";
monthlyTraffic.style.display = "none";

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    let items = list.children;
    let li = e.target;

    for (let i = 0; i < items.length; i++) {
      if (li.innerHTML == items[i].innerHTML) {
        // document.getElementById(li.innerHTML + "-traffic").style.display="block";
        document.getElementsByTagName("canvas")[i].style.display="block";
      } else {
        document.getElementsByTagName("canvas")[i].style.display="none";
      }
    }
  }

});

let canvas = document.getElementsByTagName("canvas");

for (let i = 0; i < canvas.length; i++) {
  console.log(document.getElementsByTagName("canvas")[i]);
}
