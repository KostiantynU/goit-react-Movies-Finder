import { ListOfFilm } from './ListOfFilms.styled';
import ListOfFilmsItem from 'components/ListOfFilmsItem.jsx/ListOfFilmsItem';

function ListOfFilms({ arrayFilms }) {
  // console.log(arrayFilms);
  return (
    <ListOfFilm>
      {arrayFilms?.map(({ id, original_title }) => (
        <ListOfFilmsItem
          key={id}
          originalTitle={original_title}
          movieId={`${id}`}
        ></ListOfFilmsItem>
      ))}
    </ListOfFilm>
  );
}
export default ListOfFilms;
