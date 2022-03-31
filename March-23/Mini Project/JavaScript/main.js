let header = document.querySelector('.header')
let hamburgerMenu = document.querySelector('.hamburger-menu')

hamburgerMenu.addEventListener('click', function () {
  header.classList.toggle('menu-open')
})

  function scrollDown(){
    window.scroll({
              top: document.body.scrollHeight,
              behavior: 'smooth'
              
          });
  }
  document.querySelector('.footer').scrollIntoView({ 
    behavior: 'smooth' 
  });

document
  .getElementById('save-conference')
  .addEventListener('click', saveConference)

function saveConference (event) {
  event.preventDefault()

  // Date validation
  if (
    !(new Date(document.getElementById('Date').value) > Date.now()) &&
    document.getElementById('Date').value !== '' &&
    new Date(document.getElementById('Date').value) !== 'Invalid Date'
  ) {
    alert('Invalid Date!!!')
    return
  }

  //   Time validation
  if (
    !(
      new Date('1/1/1999 ' + `${document.getElementById('Timing').value}:45`) >
        new Date('1/1/1999 ' + '10:0:0') &&
      new Date('1/1/1999 ' + `${document.getElementById('Timing').value}:45`) <
        new Date('1/1/1999 ' + '22:0:0')
    )
  ) {
    alert('Time should be between 10Am - 10Pm!!!')
    return
  }

  let newConference = {}
  newConference.destination = document.getElementById('meets').value
  newConference.date = document.getElementById('Date').value
  newConference.time = document.getElementById('Timing').value
  newConference.numberOfPeople = document.getElementById('noe').value
  newConference.company = document.getElementById('company').value

  let conferences

  if (!localStorage.getItem('conferences')) conferences = []
  else conferences = JSON.parse(localStorage.getItem('conferences'))

  conferences.push(newConference)
  localStorage.removeItem('conferences')
  localStorage.setItem('conferences', JSON.stringify(conferences))
}