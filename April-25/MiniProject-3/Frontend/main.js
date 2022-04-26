console.log("HI");

const showFeedbackPopUp = () => {
  const popUpContainer = document.getElementById("popUpContainer");
  popUpContainer.hidden = false;
};

if (window.location.href !== "http://localhost:5500/feedback") {
  setTimeout(() => {
    console.log("display popup");
    showFeedbackPopUp();
  }, 8000);
} else {
  showFeedbackPopUp();
}



let userFeedback = {
  likedArticle: null,
  suggestion: [],
  feedback: null,
};
if (sessionStorage.length !== 0) {
  userFeedback.user = JSON.parse(sessionStorage.getItem("user"));
  console.log(typeof sessionStorage.getItem("user"));
}


function logOut() {
  userLoggedIn = false;
  sessionStorage.clear();
  location.href = "http://localhost:5500/login";
}

function displayUserFeedbacks() {
  // location.href = "http://localhost:8080/showfeedbacks";
  fetch('http://localhost:8080/feedback/all')

.then((res) => res.text())

.then((res) => console.log(JSON.parse(res)))

.catch(err => console.log(err));
}

getElementById("form1-submit").addEventListener("click", (event) => {
  let optionChosen = false;
  if (getElementById("form1-res1").checked) {
    optionChosen = true;
    userFeedback.likedArticle = "yes";
    getElementById("form1").hidden = true;
    getElementById("form3").hidden = false;
  } else if (getElementById("form1-res2").checked) {
    optionChosen = true;
    userFeedback.likedArticle = "no";
    getElementById("form1").hidden = true;
    getElementById("form2").hidden = false;
  } else if (getElementById("form1-res3").checked) {
    optionChosen = true;
    userFeedback.likedArticle = "not sure";
    getElementById("form1").hidden = true;
    getElementById("form3").hidden = false;
  }
  if (optionChosen === false) {
    alert("please choose any option");
  }
});

getElementById("form2-submit").addEventListener("click", (event) => {
  if (getElementById("form2-res1").checked) {
    userFeedback.suggestion.push(getElementById("form2-res1").value);
  }
  
  if (getElementById("form2-res3").checked) {
    userFeedback.suggestion.push(getElementById("form2-res3").value);
  }
 
  if (getElementById("form2-res5").checked) {
    userFeedback.suggestion.push(getElementById("form2-res5").value);
  }
  getElementById("form2").hidden = true;
  getElementById("form3").hidden = false;
});
getElementById("form3-submit").addEventListener("click", (event) => {
  userFeedback.feedback = getElementById("user-feedback").value;
  if (userFeedback.feedback === "") {
    alert("please fill this field");
  } else {
    getElementById("form3").hidden = true;
    alert("Thanks for your response");
    console.log(userFeedback);

    fetch("http://localhost:5500/user/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userFeedback),
    });
  }
});
function getElementById(id) {
  return document.getElementById(id);
}

// ---------------------------------------------

let header = document.querySelector('.header')
let hamburgerMenu = document.querySelector('.hamburger-menu')

// hamburgerMenu.addEventListener('click', function () {
//   header.classList.toggle('menu-open')
// })

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