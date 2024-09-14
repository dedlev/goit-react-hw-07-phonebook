import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filtersSlice';
import { FilterInput, FilterWrapper } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterWrapper>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </FilterWrapper>
  );
};
