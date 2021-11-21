// SETS THE CURRENT TIME AND DATE FOR THE HEADER
const setDate = () => {
  document.getElementById(`currentDate`).innerHTML = moment().format('MMMM Do YYYY');
}
setDate()

// EVENT ON CLICK FOR THE SAVE BUTTONS. SAVES TEXTAREA DATA TO LOCAL STORAGE WITH TIMEBLOCK IDS
document.querySelectorAll('.saveBtn').forEach( e => e.addEventListener("click", (event) => {
  const hour = event.target.getAttribute("data-timeblock")
  const input = document.getElementById(hour).value
  // const input = event.target.previousElementSibling.value
  localStorage.setItem(hour, input)

}))

// 
let currentHour = moment().hour()
for (let i = 9; i <= 17; i++) {
document.getElementById(i).value = localStorage.getItem(i)
  if(currentHour > i){
  document.getElementById(i).classList.add('past')

  }else if(currentHour ===i){
  document.getElementById(i).classList.add('present')
  }else{
  document.getElementById(i).classList.add('future')
  }
}