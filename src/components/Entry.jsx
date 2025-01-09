import marker from "../assests/marker.png";

export default function Entry(props) {
  console.log(props);
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          alt={props.img.alt}
          src={props.img.src}
        />
      </div>
      <div className="info-container">
      <img className="marker-image" src={marker} alt="map marker icon" />
      <span className="country">{props.country}</span>
      <a href={props.googleMapsLink}>
        Visit on Google Maps
      </a>
      <h2 className="entry-title">{props.title}</h2>
       <p className="trip-dates">{props.date}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
