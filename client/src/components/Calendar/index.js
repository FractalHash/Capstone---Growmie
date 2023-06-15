

import "./Calendar.scss"

const Calendar = () => {

  return (
    <section className="calendar">
      <iframe className="calendar__el" src="https://calendar.google.com/calendar/embed?src=66ccd84ccaf4f8cd6329facc78d9422eae24460b64d1a847a81e6475f6dea640%40group.calendar.google.com&ctz=America%2FToronto"></iframe>
    </section>
  )
}

export default Calendar