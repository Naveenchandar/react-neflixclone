import React, { useState } from 'react';
import Header from '../Components/Header';
import Tabs from '../Components/Tabs';
import FrequentlyPart from '../Components/FrequentlyPart';
import Footer from '../Components/Footer';
// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "../GlobalStyles";
// import { lightTheme, darkTheme } from '../Components/Theme';
// import { weather_fog_sun } from 'react-icons-kit/linea/weather_fog_sun';
// import { weather_downpour_fullmoon } from 'react-icons-kit/linea/weather_downpour_fullmoon';
// import { Icon } from 'react-icons-kit';

function Main() {
    const [theme, setTheme] = useState('dark');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        //     <>
        //         <GlobalStyles />
                <div>
                    <>
                        {/* <Icon onClick={themeToggler} icon={theme === 'light' ? weather_fog_sun : weather_downpour_fullmoon} size={20} /> */}
                        <Header />
                        <Tabs />
                        <FrequentlyPart />
                        <Footer />
                    </>
                </div>
        //     </>
        // </ThemeProvider>
    )
}

export default Main;
