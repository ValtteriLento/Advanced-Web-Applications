import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import {Link} from 'react-router-dom'
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">{t("Home")}</Button>
                <Button color="inherit" component={Link} to="/about">{t("About")}</Button>
                <Button id="fi" color="inherit" onClick={()=> changeLanguage("fi")}>fi</Button>
                <Button id="en" color="inherit" onClick={()=> changeLanguage("en")}>en</Button>
            </Toolbar>
        </AppBar>
    );
}

export default function App() {
    return (
      <Suspense fallback="loading">
        <Header />
      </Suspense>
    );
}