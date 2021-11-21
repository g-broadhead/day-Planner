// SETS THE CURRENT TIME AND DATE FOR THE HEADER
const setDate = () => {
  document.getElementById(`currentDate`).innerHTML = moment().format('MMMM Do YYYY');
}
setDate()

document.querySelector('.saveBtn').addEventListener("click", (event) => {
  console.log(event.target)
  const hour = event.target.getAttribute("data-timeblock")
  const input = event.target.previousElementSibling.value
  console.log(hour)
  console.log(input)

})