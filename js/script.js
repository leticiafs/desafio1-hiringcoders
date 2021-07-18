const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');

const launchDate = new Date('November 24 2021 00:00:00')

const launchCountdown = () => {
  const currentTime= new Date()
  const difference = launchDate - currentTime

  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60 ) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  daysContainer.textContent = days;
  hoursContainer.textContent = hours;
  minutesContainer.textContent = minutes;
  secondsContainer.textContent = seconds;

}

setInterval(launchCountdown, 1000)


const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let email = document.getElementById('email').value;
  let data = {
    email 
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData);

  document.getElementById('email').value='';
})