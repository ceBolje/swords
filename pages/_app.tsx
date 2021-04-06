import React from 'react';
import 'styles/init.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { blue, green } from '@material-ui/core/colors';

const CustomApp = ({ Component, pageProps }) => {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: blue[900],
            },
            secondary: {
                main: green[500],
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default CustomApp;
