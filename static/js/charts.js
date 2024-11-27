document.addEventListener('DOMContentLoaded', () => {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            // Get unique regions
            const regions = [...new Set(data.map(item => item.Region))];

            // Variables to chart
            const variables = [
                { key: 'Desalinated_Water_Produced_Million_m3', label: 'Desalinated Water Produced (Million m³)' },
                { key: 'Energy_Consumption_kWh_per_m3', label: 'Energy Consumption (kWh/m³)' },
                { key: 'Brine_Discharge_Million_m3', label: 'Brine Discharge (Million m³)' },
                { key: 'Marine_Impact_Index', label: 'Marine Impact Index' },
                { key: 'Cost_USD_per_m3', label: 'Cost (USD/m³)' }
            ];

            // Get the container for charts
            const chartContainer = document.getElementById('chartContainer');
            chartContainer.innerHTML = ''; // Clear any existing content

            // Generate a chart for each region and variable
            regions.forEach(region => {
                variables.forEach(variable => {
                    // Filter data for the current region
                    const regionData = data.filter(item => item.Region === region);

                    // Create a new canvas element for the chart
                    const canvas = document.createElement('canvas');
                    canvas.id = `chart-${region}-${variable.key}`;
                    canvas.width = 800;
                    canvas.height = 400;
                    chartContainer.appendChild(canvas); // Append canvas to the container

                    // Prepare dataset
                    const labels = regionData.map(item => item.Year);
                    const variableData = regionData.map(item => item[variable.key]);

                    // Create the chart
                    new Chart(canvas.getContext('2d'), {
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [
                                {
                                    label: `${region} - ${variable.label}`,
                                    data: variableData,
                                    borderColor: getRandomColor(),
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    fill: false,
                                    tension: 0.1
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top'
                                },
                                title: {
                                    display: true,
                                    text: `${variable.label} in ${region}`
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
                                        text: variable.label
                                    }
                                }
                            }
                        }
                    });
                });
            });
        });
});

// Random color generator for data colors
function getRandomColor() {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`;
}