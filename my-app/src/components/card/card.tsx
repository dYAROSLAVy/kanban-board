import "./card.css";

function Card({title}:{title: string}) {
  return (
    <div className="card">
      <a href="1" className="card__link" >{title}</a>
    </div>
  );
}

export default Card;
