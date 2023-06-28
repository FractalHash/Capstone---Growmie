import { useEffect, useState } from "react";
import { useSession } from '@supabase/auth-helpers-react';
import axios from "axios";

import Calendar from "../../components/Calendar";

import "./CalendarPage.scss"


const CalendarPage = () => {
  const [calendar, setCalendar] = useState([]);
  const session = useSession();
  
  const userId = session?.user.id

  const formatData = (data) => {
    const calendarData = data.map((event) => {
      const title = event.summary
      const startDate = event.start.dateTime
      const endDate = event.end.dateTime
      const id = event.id
      const colorId = event.colorId
      const description = event.description

      return { title, startDate, endDate, id, colorId, description }
    })
    return calendarData;
  }


  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const response = await axios
          .get(`http://localhost:8008/calendar?userid=${userId}`, { withCredentials: true })
        setCalendar(formatData(response.data))
      } catch (error) {
        console.error("Error retrieving calendar: ", error)
        setCalendar([])
      }
    }
    fetchCalendar();
  }, [session, userId])


  return (
    <main className="calendar-page">
      <section className="cal__container">
        <Calendar calendarData={calendar} />
      </section>
    </main>
  )
}

export default CalendarPage;