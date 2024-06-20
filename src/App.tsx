import './App.scss';
import { Grid } from '@mui/material';
import { Filter } from './Components/Filter/Filter';
import { Articles } from './Components/Articles/Articles';

function App() {
  return (
    <Grid container className="App">
      <Filter />
      <Articles />
    </Grid>
  );
}

export default App;
