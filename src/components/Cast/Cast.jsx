import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/API';
import { Watch } from 'react-loader-spinner';
import CastListItem from 'components/CastListItem/CastListItem';
import { CastList } from './Cast.styled';
import { motion } from 'framer-motion';
// import { DivSlideInLeft } from 'pages/MovieDetails/MovieDetailsAnimations';
// import { AnimatePresence, motion } from 'framer-motion';

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
        // <DivSlideInLeft>
        // <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
        </motion.div>
      ) : (
        // </motion.div>
        // </AnimatePresence>
        // {/* </DivSlideInLeft> */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div>Information does not exists.</div>
        </motion.div>
      )}
    </>
  );
}
export default Cast;
