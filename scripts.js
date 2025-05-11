// Chart Line
async function renderLineChart() {
    try {
        let response = await fetch('api/history.php');
        let data = await response.json();

        let timestamps = data.map(item => moment(item.timestamp).format('HH:mm:ss')); // Format lebih detail
        let temperature = data.map(item => parseFloat(item.temperature)); // Data suhu dari BME280
        let pressure = data.map(item => parseFloat(item.pressure)); // Data tekanan
        let altitude = data.map(item => parseFloat(item.altitude)); // Data altitude
        let humi = data.map(item => parseFloat(item.humi)); // Data kelembaban DHT22
        let suhu = data.map(item => parseFloat(item.suhu)); // Data suhu dari DHT22


        let ctxTemperature = document.getElementById('temperatureChart').getContext('2d');
        let ctxPressure = document.getElementById('pressureChart').getContext('2d');
        let ctxAltitude = document.getElementById('altitudeChart').getContext('2d');
        let ctxHumi = document.getElementById('humiChart').getContext('2d');
        let ctxSuhu = document.getElementById('suhuChart').getContext('2d');


        let chartConfig = (ctx, label, data, color) => new Chart(ctx, {
            type: 'line',
            data: {
                labels: timestamps,
                datasets: [{
                    label,
                    data,
                    borderColor: color,
                    backgroundColor: color + '40',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 2,
                    pointHoverRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 800,
                    easing: 'easeInOutQuart'
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'category',
                        ticks: {
                            font: {
                                size: 12
                            },
                            autoSkip: true,
                            maxTicksLimit: 10
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });

        chartConfig(ctxTemperature, 'Temperature (°C)', temperature, '#e76f51');
        chartConfig(ctxPressure, 'Pressure (hPa)', pressure, '#f4a261');
        chartConfig(ctxAltitude, 'Altitude (m)', altitude, '#264653'); 
        chartConfig(ctxHumi, 'Humi (%)', humi, '#2a9d8f');     
        chartConfig(ctxSuhu, 'Suhu (°C)', suhu, '#f4a261'); // Grafik untuk suhu DHT22


    } catch (error) {
        console.error('Gagal mengambil data:', error);
    }
}
renderLineChart();

async function updateLineChart() {
    try {
        let response = await fetch('api/history.php');
        let data = await response.json();

        let timestamps = data.map(item => moment(item.timestamp).format('HH:mm:ss'));
        let temperature = data.map(item => parseFloat(item.temperature));
        let pressure = data.map(item => parseFloat(item.pressure));
        let altitude = data.map(item => parseFloat(item.altitude));
        let humi = data.map(item => parseFloat(item.humi));
        let suhu = data.map(item => parseFloat(item.suhu));

        

        const chartTemperature = Chart.getChart('temperatureChart');
        const chartPressure = Chart.getChart('pressureChart');
        const chartAltitude = Chart.getChart('altitudeChart');
        const chartHumi = Chart.getChart('humiChart');
        const chartSuhu = Chart.getChart('suhuChart');

        

        if (chartTemperature) {
            chartTemperature.data.labels = timestamps;
            chartTemperature.data.datasets[0].data = temperature;
            chartTemperature.update();
        }

        if (chartPressure) {
            chartPressure.data.labels = timestamps;
            chartPressure.data.datasets[0].data = pressure;
            chartPressure.update();
        }

        if (chartAltitude) {
            chartAltitude.data.labels = timestamps;
            chartAltitude.data.datasets[0].data = altitude;
            chartAltitude.update();
        }

        if (chartHumi) {
            chartHumi.data.labels = timestamps;
            chartHumi.data.datasets[0].data = humi;
            chartHumi.update();
        }

        if (chartSuhu) {
            chartSuhu.data.labels = timestamps;
            chartSuhu.data.datasets[0].data = suhu;
            chartSuhu.update();
        }



    } catch (error) {
        console.error('Gagal memperbarui grafik:', error);
    }
}

setInterval(updateLineChart, 500); // Update every 5 seconds

// Chart Pie
function renderPieChart(temperature, pressure, altitude, humi, suhu) {
    let ctxPieTemperature = document.getElementById('pieTemperature').getContext('2d');
    let ctxPiePressure = document.getElementById('piePressure').getContext('2d');
    let ctxPieAltitude = document.getElementById('pieAltitude').getContext('2d');
    let ctxPieHumi = document.getElementById('pieHumi').getContext('2d');
    let ctxPieSuhu = document.getElementById('pieSuhu').getContext('2d');


    new Chart(ctxPieTemperature, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [{
                data: [temperature, 100 - temperature],
                backgroundColor: ['#e76f51', '#ddd'],
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    new Chart(ctxPiePressure, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [{
                data: [pressure, 1100 - pressure],
                backgroundColor: ['#f4a261', '#ddd'],
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    
    new Chart(ctxPieAltitude, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [{
                data: [altitude, 10000 - altitude],
                backgroundColor: ['#e76f51', '#ddd'],
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
   
    new Chart(ctxPieHumi, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [{
                data: [humi, 100 - humi],
                backgroundColor: ['#2a9d8f', '#ddd'],
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });    

    new Chart(ctxPieSuhu, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [{
                data: [suhu, 100 - suhu],
                backgroundColor: ['#e76f51', '#ddd'],
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

}
renderPieChart(0, 0, 0, 0, 0);

function updatePieChart(temperature, pressure, altitude, humi, suhu) {
    const pieChartTemperature = Chart.getChart('pieTemperature');
    const pieChartPressure = Chart.getChart('piePressure');
    const pieChartAltitude = Chart.getChart('pieAltitude');
    const pieChartHumi = Chart.getChart('pieHumi');
    const pieChartSuhu = Chart.getChart('pieSuhu');


    if (pieChartTemperature) {
        pieChartTemperature.data.datasets[0].data = [temperature, 100 - temperature];
        pieChartTemperature.update();
    }

    if (pieChartPressure) {
        pieChartPressure.data.datasets[0].data = [pressure, 1100 - pressure];
        pieChartPressure.update();
    }

    if (pieChartAltitude) {
        pieChartAltitude.data.datasets[0].data = [altitude, 10000 - altitude];
        pieChartAltitude.update();
    }

    if (pieChartHumi) {
        pieChartHumi.data.datasets[0].data = [humi, 100 - humi];
        pieChartHumi.update();
    }

    if (pieChartSuhu) {
        pieChartSuhu.data.datasets[0].data = [suhu, 100 - temperature];
        pieChartSuhu.update();
    }

}

// Update the sensor data every 500 milliseconds
function updateSensorData() {
    fetch('api/read.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').innerHTML = `${data.temperature}°C`;
            document.getElementById('pressure').innerHTML = `${data.pressure}hPa`;
            document.getElementById('altitude').innerHTML = `${data.altitude}m`;
            document.getElementById('humi').innerHTML = `${data.humi}%`;
            document.getElementById('suhu').innerHTML = `${data.suhu}°C`;
            document.getElementById('timestamp').textContent = data.waktu;

            // Update Pie Chart with new data
            updatePieChart(data.temperature, data.pressure, data.altitude, data.humi, data.suhu);

        })
        .catch(error => console.error('Error fetching data:', error));
}

updateSensorData();
setInterval(updateSensorData, 500);