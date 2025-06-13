// const btnEl=document.getElementById("btn");
// const birthdayEl=document.getElementById("birthday");
 

//  function calculateage(){
//     const birthdayValue=birthdayEl.ariaValueMax;
//     console.log(birthdayValue);
    
//  }
// btnEl.addEventListener("click",calculateage);










 const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthdayEl");
const resultEl = document.getElementById("results");

function calculateAge() {
  const birthdayValue = birthdayEl.value;

  if (!birthdayValue) {
    resultEl.innerText = "Please select your birthdate darlingg.";
    return;
  }

  const today = new Date();
  const birthDate = new Date(birthdayValue);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
   
  resultEl.innerText = ` You are ${age} years old!`;
}

btnEl.addEventListener("click", calculateAge);
