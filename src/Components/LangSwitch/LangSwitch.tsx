 import { useState } from 'react';
 import { useTranslation } from 'react-i18next';

//Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown';

const LangSwitch = () => {
  const { t, i18n } = useTranslation("translation");
  const checkLang = i18n.language === "ar" ? t("navbar.lang.ar") : t("navbar.lang.en");
  const [currentLanguage, setCurrentLanguage] = useState(checkLang);


  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang === "ar" ? t("navbar.lang.ar") : t("navbar.lang.en"))
    window.location.reload()
  }


  return (
    <NavDropdown title={currentLanguage} className='fw-bold text-dark-blue'>
      <NavDropdown.Item onClick={() => changeLanguage("ar")}>
        {t("navbar.lang.ar")}
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeLanguage("en")}>
        {t("navbar.lang.en")}
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default LangSwitch;