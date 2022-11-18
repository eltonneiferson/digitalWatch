const main = document.querySelector('#container')
const spanHour = document.querySelector('.hour')
const spanMinutes = document.querySelector('.minutes')
const spanSeconds = document.querySelector('.seconds')
const spanWeek = document.querySelector('.week')
const spanDays = document.querySelector('.day')
const spanMonth = document.querySelector('.month')
const spanYear = document.querySelector('.year')
const darkTheme = document.querySelector('#dark')
const blueTheme = document.querySelector('#blue')
const greenTheme = document.querySelector('#green')
const redTheme = document.querySelector('#red')
const currentTime = new Date()
let weekDay = currentTime.getDay()
let day = currentTime.getDate()
let month = currentTime.getMonth()
let year = currentTime.getFullYear()
let hour = currentTime.getHours()
let minutes = currentTime.getMinutes()
let seconds = currentTime.getSeconds()

function writeTime() {
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

    if (weekDay == 0){weekDay = "Domingo"}
    if (weekDay == 1){weekDay = "Segunda-Feira"}
    if (weekDay == 2){weekDay = "Terça-Feira"}
    if (weekDay == 3){weekDay = "Quarta-Feira"}
    if (weekDay == 4){weekDay = "Quinta-Feira"}
    if (weekDay == 5){weekDay = "Sexta-Feira"}
    if (weekDay == 6){weekDay = "Sábado"}

    spanWeek.textContent = weekDay
    spanDays.textContent = String(day).padStart(2, '0')
    spanMonth.textContent = month
    spanYear.textContent = year
    spanHour.textContent = String(hour).padStart(2, '0')
    spanMinutes.textContent = String(minutes).padStart(2, '0')
    spanSeconds.textContent = String(seconds).padStart(2, '0')
}

setInterval(() => {
    ++seconds
    if(seconds == 60){
        seconds = 0
        ++minutes
        spanSeconds.textContent = String(seconds).padStart(2, '0')
        spanMinutes.textContent = String(minutes).padStart(2, '0')
    }

    if(minutes == 60){
        minutes = 0
        ++hour
        spanMinutes.textContent = String(minutes).padStart(2, '0')
        spanHour.textContent = String(hour).padStart(2, '0')
    }
    spanSeconds.textContent = String(seconds).padStart(2, '0')
}, 1000)

writeTime()

darkTheme.addEventListener('click', () => {
    main.classList.remove('blueMode')
    main.classList.remove('greenMode')
    main.classList.remove('redMode')
    main.classList.add('darkMode')
})

blueTheme.addEventListener('click', () => {
    main.classList.remove('darkMode')
    main.classList.remove('greenMode')
    main.classList.remove('redMode')
    main.classList.add('blueMode')
})

greenTheme.addEventListener('click', () => {
    main.classList.remove('darkMode')
    main.classList.remove('blueMode')
    main.classList.remove('redMode')
    main.classList.add('greenMode')
})

redTheme.addEventListener('click', () => {
    main.classList.remove('darkMode')
    main.classList.remove('blueMode')
    main.classList.remove('greenMode')
    main.classList.add('redMode')
})