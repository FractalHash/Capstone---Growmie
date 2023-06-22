import './HowToUse.scss'

const HowToUse = () => {
 
  return (
    <section className="modal">
      <div className="modal__overlay">
        <h2 className="modal__title">About:</h2>
        <p className="modal__text">Growmie is a scheduling tool developed for
        cannabis growers to help automate the growing process. Simply fill out 
        the Add a Plant form and Growmie will generate a schedule for you to
        follow to ensure an optimal growing experinece. Growmie will remind you
        when you should water, feed, transplant, defoliate, change growing
        cycles, and even when to consider harvesting your plants.
        <div className='modal__text-space'/>
        Growmie integrates seemlessly with Google so you can get your
        schedule directly from your Google Calendar once a schedule has been
        created.
        </p>
      </div>  
    </section>
  )
}

export default HowToUse;