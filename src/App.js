import './App.css';
import { Timer } from './timer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Garland } from './Garland';

const lightTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
        <CssBaseline/>
            <Garland/>
            
                <Timer/>
            
        </ThemeProvider>
    );
}

export default App;
