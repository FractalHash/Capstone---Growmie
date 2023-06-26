import { useEffect, useState } from "react";
import { useSession } from '@supabase/auth-helpers-react';
import axios from "axios";

import TestCal from "../../components/TestCal";

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

      return { title, startDate, endDate, id }
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
        console.error("Error retrieving calendar: ", error )
      }
    }
    fetchCalendar();
  },[])


  return (
    <main className="calendar-page">
      <section className="cal__container">
        <TestCal calendarData={calendar} />
      </section>
    </main>
  )
}

export default CalendarPage;