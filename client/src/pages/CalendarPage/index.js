import AddPlant from "../../components/AddPlant";
import Calendar from "../../components/Calendar";

import "./CalendarPage.scss"


const CalendarPage = () => {

  return (
    <main className="calendar-page">
      <Calendar />
      <AddPlant />
    </main>
  )
}

export default CalendarPage;