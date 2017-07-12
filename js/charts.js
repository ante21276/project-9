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
				fill: true,
				lineTension: 0,
				borderColor: "#878bde",
        backgroundColor: "rgba(172, 174, 230, 0.70)",
				borderCapStyle: 'butt',
				borderDashOffset: 0.0,
				pointBorderColor: "#fff",
				pointHoverRadius: 4,
				pointRadius: 3,
				data: [2,10,32,15],

			}
		]
	},
  options: {

		scales: {
			xAxes: [{
        ticks: {
					beginAtZero: true,
				},
				gridLines: {
					color: "#c6c1c1"
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true,
          max: 40
				},
				gridLines: {
          			color: "#c6c1c1",

        		}
			}]
		},
		legend: {
            display: false
         },
	}
});

let dailyChart = new Chart(dailyTraffic, {
	type: 'line',
	data: {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
        fill: true,
				lineTension: 0,
				borderColor: "#878bde",
        backgroundColor: "rgba(172, 174, 230, 0.70)",
				borderCapStyle: 'butt',
				borderDashOffset: 0.0,
				pointBorderColor: "#fff",
				pointHoverRadius: 4,
				pointRadius: 3,
				data: [10,20,50,30,30,70,40]
			}
		]
	},
	options: {
		responsive: true,
		scales: {
			xAxes: [{
				gridLines: {
          color: "#c6c1c1",
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true,
          max: 80
				},
				gridLines: {
          			color: "#c6c1c1",
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
        fill: true,
				lineTension: 0,
				borderColor: "#878bde",
        backgroundColor: "rgba(172, 174, 230, 0.70)",
				borderCapStyle: 'butt',
				borderDashOffset: 0.0,
				pointBorderColor: "#fff",
				pointHoverRadius: 4,
				pointRadius: 3,
				data: [10,55,100,186, 178, 101, 50]
			}
		]
	},
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					color: "#c6c1c1",
					display: true
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true,
          max: 250
				},
				gridLines: {
          			color: "#c6c1c1",
          			display: true
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
        fill: true,
				lineTension: 0,
				borderColor: "#878bde",
        backgroundColor: "rgba(172, 174, 230, 0.70)",
				borderCapStyle: 'butt',
				pointBorderColor: "#fff",
				pointHoverRadius: 4,
				pointRadius: 3,
				data: [333,459,494,533,606,578,400,300]
			}
		]
	},
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					color: "#c6c1c1",
					display: true
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: false
				},
				gridLines: {
          			color: "#c6c1c1",
          			display: true
        		}
			}]
		},
		legend: {
            display: false
         }
	}
});
list.firstElementChild.style.backgroundColor = "#3cba9f";
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
        li.style.backgroundColor = "#3cba9f";
      } else {
        document.getElementsByTagName("canvas")[i].style.display="none";
        items[i].style.backgroundColor = "#575683";
      }
    }
  }

});

let daily = new Chart(barDailyTraffic, {
  type: "bar",
  data: {
    labels: ["M","T","W","T","F","S","S", ],
    datasets: [{
      data: [50,100,150,200,170,250,50,40],
      backgroundColor: "#3cba9f",

    }]
  },
  options: {
    legend: {
      display:false,
    },
    scales: {
      xAxes: [{
        barThickness: 25,
        gridLines: {
          color: "#c6c1c1",
          display: true
        },
        ticks: {
          max: 300
        }
      }],

			yAxes: [{
				gridLines: {
          			color: "#c6c1c1",
          			display: true,
        },
        ticks: {
          max: 300
        }

			}]
		},
  }
});

let mobile = new Chart(mobileUsers, {
  type: "doughnut",
  data: {
    labels:["Phones", "Tablets", "Desktop"],
    datasets: [{
      data: [150, 90, 50],
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
    }]
  },
  options: {
    layout: {
          padding: {
              left: 0,
              right: 40,
              top: 10,
              bottom: 0
          }
      },
    legend: {
      display:true,
      position: "right",
      labels: {
        padding: 20,
        boxWidth: 20
      },
    }
  }
})
