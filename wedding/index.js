const prettyBtn = document.querySelector("#pretty-button")
const uglyBtn = document.querySelector("#ugly-button")
const regularBtn = document.querySelector("#regular-button")
const card = document.querySelector(".invite-card")


const regularFunction = () =>{
  
  card.classList.remove("pretty", "ugly")
  card.classList.add("regular", 'animated', 'fadeInLeft')
  
}

const prettyFunction = () =>{
  card.classList.remove("regular", "ugly")
  card.classList.add("pretty", 'animated', 'fadeInLeft')
 
}

const uglyFunction = () =>{
  card.classList.remove("regular", "pretty")
  card.classList.add('ugly', 'animated','fadeInLeft')
  
}


const firstName = document.querySelector("#first_name2")
const secondName =document.querySelector("#second_name2")
const lastName = document.querySelector("#last_name2")
const date = document.querySelector("#date")
const locationWed = document.querySelector("#location");

const newFirstNameLetter = document.querySelector("#firstname-letter")
const newSecondNameLetter = document.querySelector("#secondname-letter")
const newFirstName = document.querySelector("#new-firstname")
const newSecondName = document.querySelector("#new-secondname")
const newLastName = document.querySelector("#new-lastname")
const newDate = document.querySelector("#new-date")
const newLocation = document.querySelector("#new-location")


const firstNameFuction = () =>{
  const firstWhatTheyTyped = firstName.value
  newFirstName.innerHTML= firstWhatTheyTyped
  firstWhatTheyTyped.classList.add('pretty', "ugly", 'regular')
}

const secondNameFunction = () =>{
  const secondWhatTheyTyped = secondName.value
  newSecondName.innerHTML= secondWhatTheyTyped
  secondWhatTheyTyped.classList.add('pretty', "ugly", 'regular')
}

const lastNameFunction = () => {
  const lastWhatTheyTyped = lastName.value
  newLastName.innerHTML = lastWhatTheyTyped
  lastWhatTheyTyped.classList.add('pretty', "ugly", 'regular')
}

const dateFucntion = () =>{
  const dateTyped = date.value
  newDate.innerHTML = dateTyped
  dateTyped.classList.add('pretty', "ugly", 'regular')
}
  
  const locationFunction = () =>{
    const locationWhatTheyTyped = locationWed.value
    newLocation.innerHTML = locationWhatTheyTyped
    locationWhatTheyTyped.classList.add('pretty', "ugly", 'regular')
  }
  
  



firstName.addEventListener("keyup", firstNameFuction);
secondName.addEventListener("keyup", secondNameFunction);
lastName.addEventListener("keyup", lastNameFunction)
date.addEventListener("keyup", dateFucntion)
locationWed.addEventListener("keyup", locationFunction)


prettyBtn.addEventListener('click', prettyFunction)
uglyBtn.addEventListener('click', uglyFunction)
regularBtn.addEventListener('click', regularFunction)