// Dashboard JavaScript for updating values dynamically and drawing charts

// Example data (replace with actual data sources)
let income = 5000;
let expenses = 3200;
let balance = income - expenses;
let balancePercentage = ((balance / income) * 100).toFixed(2);

// Update income, expenses, and balance dynamically
document.getElementById('total-income').textContent = `$${income}`;
document.getElementById('total-expenses').textContent = `$${expenses}`;
document.getElementById('balance').textContent = `$${balance}`;
document.getElementById('balance-percentage').textContent = `${balancePercentage}%`;

// Create a trend chart using Chart.js (assuming Chart.js is included in your project)
const ctx = document.getElementById('trend-chart').getContext('2d');
const trendChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
        datasets: [{
            label: 'Monthly Expenses',
            data: [1000, 1500, 1200, 2000, 1800, 1600], // Example data
            borderColor: '#ff4500',
            backgroundColor: 'rgba(255, 69, 0, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Implement dark mode toggle for the dashboard
const themeToggleButton = document.getElementById('theme-toggle');

// Check for saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = '🌞';
}

// Toggle dark mode
themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '🌞';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '🌙';
    }
});
