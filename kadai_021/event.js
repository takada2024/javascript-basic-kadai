const button = document.getElementById('btn');

button.addEventListener('click', () => {

  setTimeout(() => {

  document.getElementById('text').innerText = 'ボタンをクリックしました'

}, 2000);

})