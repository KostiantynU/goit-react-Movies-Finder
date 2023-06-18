import PropTypes from 'prop-types';
import { WrapperForm, StyledInput, StyledButton } from './searchbar.styled';

function Searchbar({ handleSubmit }) {
  return (
    <WrapperForm onSubmit={evt => handleSubmit(evt)}>
      <StyledInput type="text" name="search" />
      <StyledButton type="submit">Search</StyledButton>
    </WrapperForm>
  );
}
export default Searchbar;

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
