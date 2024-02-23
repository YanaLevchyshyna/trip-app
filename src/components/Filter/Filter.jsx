import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterWrapp, LabelSearch, InputSearch } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapp>
      <LabelSearch htmlFor={'id' + nanoid()}>
        Find your trip by the city
        <InputSearch
          id={'id' + nanoid()}
          placeholder="Search"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </LabelSearch>
    </FilterWrapp>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
