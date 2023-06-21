import TestCal from "../../components/TestCal";

import "./CalendarPage.scss"


const CalendarPage = () => {

  return (
    <main className="calendar-page">
      <section className="cal__container">
        <TestCal />
      </section>
    </main>
  )
}

export default CalendarPage;