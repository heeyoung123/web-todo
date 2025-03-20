// import {ThemeProvider} from "styled-components";
import * as React from "react";
import {GlobalStyle} from "./shared/global.ts";
import {Outlet} from "react-router-dom";
// import theme from "./shared/theme.ts";

const App: React.FC = () => {
    return (
        // <ThemeProvider theme={theme}>
        <>
            <GlobalStyle/>
            <Outlet/>
        </>
        // </ThemeProvider>
    );
};
export default App;
