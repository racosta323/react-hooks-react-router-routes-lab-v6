import {Link} from 'react-router-dom';

function MovieCard({title, id}) {

  
  
  return (
    <article>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        {/* What should go here? */}
    </article>
  );
};

export default MovieCard;