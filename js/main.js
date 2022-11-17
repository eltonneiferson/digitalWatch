const main = document.querySelector('#container')
const spanHour = document.querySelector('.hour')
const spanMinutes = document.querySelector('.minutes')
const spanSeconds = document.querySelector('.seconds')
const spanDays = document.querySelector('.day')
const spanMonth = document.querySelector('.month')
const spanYear = document.querySelector('.year')
const buttonDarkMode = document.querySelector('.on-off')
const currentTime = new Date()
let day = currentTime.getDate()
let month = currentTime.getMonth()
let year = currentTime.getFullYear()
let hour = currentTime.getHours()
let minutes = currentTime.getMinutes()
let seconds = currentTime.getSeconds()

if (month == 0){month = "Janeiro"}
if (month == 1){month = "Fevereiro"}
if (month == 2){month = "Março"}
if (month == 3){month = "Abril"}
if (month == 4){month = "Maio"}
if (month == 5){month = "Junho"}
if (month == 6){month = "Julho"}
if (month == 7){month = "Agosto"}
if (month == 8){month = "Setembro"}
if (month == 9){month = "Outubro"}
if (month == 10){month = "Novembro"}
if (month == 11){month = "Dezembro"}

spanDays.textContent = day
spanMonth.textContent = month
spanYear.textContent = year
spanHour.textContent = hour
spanMinutes.textContent = String(minutes).padStart(2, '0')
spanSeconds.textContent = String(seconds).padStart(2, '0')

function countSeconds() {
    setTimeout(() => {
        ++seconds
        if(seconds == 60){
            seconds = 0
            ++minutes
            spanSeconds.textContent = seconds
            spanMinutes.textContent = String(minutes).padStart(2, '0')
        }

        if(minutes == 60){
            minutes = 0
            ++hour
            spanMinutes.textContent = String(minutes).padStart(2, '0')
            spanHour.textContent = hour
        }
        spanSeconds.textContent = String(seconds).padStart(2, '0')
        countSeconds()
    }, 1000)
}

buttonDarkMode.addEventListener('click', () => {
    buttonDarkMode.classList.toggle('moveButton')
    main.classList.toggle('whiteMode')
})

countSeconds()