document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs li');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      contents.forEach(c => c.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));
      document.getElementById(tab.dataset.tab).classList.add('active');
      tab.classList.add('active');
    });
  });
});

