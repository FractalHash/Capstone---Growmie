

import "./Calendar.scss"

const Calendar = () => {

  return (
    <section className="calendar">
      <iframe className="calendar__el" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&title=Growmie&src=Z3Jvd21pZWNhcHN0b25lQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043"></iframe>
    </section>
  )
}

export default Calendar