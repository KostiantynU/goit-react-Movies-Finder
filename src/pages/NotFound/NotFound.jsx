import { LoadingNotFoundStyled, TiteLoadingNotFound } from './LoadingNotFound.Styled';
import { motion } from 'framer-motion';
export function NotFound() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <LoadingNotFoundStyled>
        <TiteLoadingNotFound>Not Found</TiteLoadingNotFound>
      </LoadingNotFoundStyled>
    </motion.div>
  );
}
export default NotFound;
