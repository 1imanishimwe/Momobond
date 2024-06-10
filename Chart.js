
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12'],
        datasets: [{
            label: 'RWF',
            data: [800000, 200000, 600000, 700000, 500000, 300000, 100000, 200000, 400000, 600000, 700000],
            backgroundColor: 'rgb(45 212 191)',
            borderColor: 'rgba(72, 207, 173, 1)',
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return 'RWF ' + value.toLocaleString();
                    }
                }
            },
            x: {
                beginAtZero: true,
                ticks: {
                    maxRotation: 0,
                    minRotation: 0
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return 'RWF ' + tooltipItem.raw.toLocaleString();
                    }
                }
            }
        }
    }
});
