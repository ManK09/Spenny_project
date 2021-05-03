import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import HomePage from './HomePage'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles={
  paddingLeft:"10%",
  paddingRight:"10%"
}


function App() {
  return (
    <Provider store={store}>
    <div>
    <AppBar position="static" style={{height:"70px",paddingTop:"30px"}}>
          <Typography variant="h6" color="inherit" style={{textAlign:"center"}}>
            Image Grid
          </Typography>
      </AppBar>
    <div style={{...styles}}>
    <HomePage />
    {/* <Search />
    <VideoDetail />
    <VideoList /> */}
    </div>
    </div>
    </Provider>
  );
}

export default App;
