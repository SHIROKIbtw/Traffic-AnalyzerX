const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Апр ‘24', 'Май ‘24', 'Июнь ‘24', 'Июль ‘24', 'Авг ‘24', 'Сен ‘24'],
      datasets: [{
        label: '# Посещений',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });