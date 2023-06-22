import { useEffect, useState } from "react";
import { useSession } from '@supabase/auth-helpers-react';
import axios from "axios";

import TestCal from "../../components/TestCal";

import "./CalendarPage.scss"


const CalendarPage = () => {
  const [calendar, setCalendar] = useState({});
  const session = useSession();
  
  const userId = session?.user.id



  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const response = await axios
          .get(`http://localhost:8008/calendar?userid=${userId}`, { withCredentials: true })
        setCalendar(response.data)
        console.log("here is the response: ",response)
      } catch (error) {
        console.error("Error retrieving calendar: ", error )
      }
    }
    fetchCalendar();
  },[])


  return (
    <main className="calendar-page">
      <section className="cal__container">
        <TestCal />
      </section>
    </main>
  )
}

export default CalendarPage;