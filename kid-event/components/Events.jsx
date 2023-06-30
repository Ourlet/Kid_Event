import { useGlobalContext } from '../context'

const Events = () => {
  const { events } = useGlobalContext()

  return <section className="section-center">
    
    {events.map((event) => {
      const { id: id, title: title, date: date, location: location, link: link, image:image } = event

      return <article key={id} className="single-event">
        <footer>
          <img src={image} className="img"/>
          <h5>{title}</h5>
          <p>{location}</p>
          <p>{date}</p>
          <a href={link} target="_blank">Original Source</a>
          <button className="like-btn">Like</button>
        </footer>
      </article>
    })}
  </section>
}

export default Events;