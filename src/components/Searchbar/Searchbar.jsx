import PropTypes from 'prop-types';
import { WrapperForm, StyledInput, StyledButton } from './searchbar.styled';

function Searchbar({ handleSubmit, onChange, value }) {
  return (
    <WrapperForm onSubmit={evt => handleSubmit(evt)}>
      <StyledInput type="text" name="search" onChange={evt => onChange(evt.target.value)} />
      <StyledButton type="submit">Search</StyledButton>
    </WrapperForm>
  );
}
export default Searchbar;

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
