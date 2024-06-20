import { Grid } from '@mui/material';
import { Filters } from '../../constants';
import { styles } from '../../StyledComponents';
import { FilterBox } from './Filter.styles';
import { useAppSelector } from '../../hooks';
import { changeFilter } from '../../reducer';
import { store } from '../../store';

export const Filter = () => {
    const filters = useAppSelector(state => state.filterReducer);

    const handleClickActiveFilter = (name: string) => {
        if (filters.filter.includes(name)) {
            store.dispatch(changeFilter(filters.filter.filter((str) => str !== name)))
        } else {
            store.dispatch(changeFilter([...filters.filter, name]))
        }
    }

    return (
        <Grid style={styles.filtersBlock}>
            {Filters.map((el) =>
                <FilterBox key={el.id} sx={[filters.filter.includes(el.name) && styles.activeFilter]} onClick={() => handleClickActiveFilter(el.name)}>
                    {el.title}
                </FilterBox>)
            }
        </Grid >
    )
}