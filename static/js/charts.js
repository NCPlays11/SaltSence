document.addEventListener('DOMContentLoaded', () => {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const years = data.map(item => item.Year);
            const waterProduced = data.map(item => item.Desalinated_Water_Produced_Million_m3);
            const energyConsumption = data.map(item => item.Energy_Consumption_kWh_per_m3);
            const brineDischarge = data.map(item => item.Brine_Discharge_Million_m3);

            const ctx = document.getElementById('desalinationChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: years,
                    datasets: [
                        {
                            label: 'Desalinated Water Produced (Million m³)',
                            data: waterProduced,
                            borderColor: 'blue',
                            backgroundColor: 'rgba(0, 123, 255, 0.2)',
                            fill: true
                        },
                        {
                            label: 'Energy Consumption (kWh/m³)',
                            data: energyConsumption,
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
                            fill: true
                        },
                        {
                            label: 'Brine Discharge (Million m³)',
                            data: brineDischarge,
                            borderColor: 'green',
                            backgroundColor: 'rgba(0, 255, 0, 0.2)',
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Year'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Value'
                            }
                        }
                    }
                }
            });
        });
});