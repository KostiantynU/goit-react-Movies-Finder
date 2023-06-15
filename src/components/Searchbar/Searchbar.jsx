import { useState } from 'react';
import { searchMovies } from 'services/API';
import { WrapperForm, StyledInput, StyledButton } from './searchbar.styled';
import { useSearchParams } from 'react-router-dom';

function Searchbar({ setSearchArr, setSearchParams, handleSubmit }) {
  const handleChange = evt => {
    setSearchParams({ query: evt.target.value });
  };
  //   const filterText = searchParams.get('query') ?? '';
  //   console.log(searchParams.get('query'));

  return (
    <WrapperForm onSubmit={evt => handleSubmit(evt)}>
      <StyledInput type="text" onChange={handleChange} />
      <StyledButton type="submit">Search</StyledButton>
    </WrapperForm>
  );
}
export default Searchbar;
