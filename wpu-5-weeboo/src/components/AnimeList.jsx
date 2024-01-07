/* eslint-disable react/prop-types */

export default function AnimeList({ animes, handleSelectedAnime }) {
  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <li
          key={anime.mal_id}
          onClick={() => handleSelectedAnime(anime.mal_id)}
        >
          <img src={anime.image} alt={`${anime.title} cover`} />
          <h3>{anime.title}</h3>
          <div>
            <p>
              <span>{anime.year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
