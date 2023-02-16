import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function MyContainer() {
    const { t, i18n } = useTranslation();

    return (
        <div>
          <h1>{t("This is the front page")}.</h1>
        </div>
    );
}

export default function App() {
    return (
      <Suspense fallback="loading">
        <MyContainer />
      </Suspense>
    );
}