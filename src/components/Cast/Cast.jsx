import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/API';
import { Watch } from 'react-loader-spinner';
import CastListItem from 'components/CastListItem/CastListItem';
import { CastList } from './Cast.styled';
import { DivRotateInDownLeft } from 'pages/MovieDetails/MovieDetailsAnimations';

function Cast() {
  const [creditArr, setCreditArr] = useState();
  const [isLoader, setIsLoader] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoader(true);
    getCredits(movieId)
      .then(result => setCreditArr(result.cast))
      .finally(setIsLoader(false));
  }, [movieId]);

  return (
    <>
      {isLoader && (
        <Watch
          height="100"
          width="100"
          radius="48"
          color="rgb(73, 203, 230)"
          ariaLabel="watch-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClassName=""
          visible={true}
        />
      )}
      {creditArr?.length > 0 ? (
        <DivRotateInDownLeft>
          <CastList>
            {creditArr.map(
              ({ credit_id, character, name: characterName, profile_path: charachterPhoto }) => (
                <CastListItem
                  key={credit_id}
                  character={character}
                  characterName={characterName}
                  charachterPhoto={charachterPhoto}
                ></CastListItem>
              )
            )}
          </CastList>
        </DivRotateInDownLeft>
      ) : (
        <div>Information does not exists.</div>
      )}
    </>
  );
}
export default Cast;
