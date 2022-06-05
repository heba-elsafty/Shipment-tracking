//Bootstrap
import {useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/FormLabel';

// logo path
import logoEnPath from "../../assets/images/LogoEn.svg";
import logoArPath from "../../assets/images/LogoAr.svg";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

//Scss
import "./Header.scss"
import LangSwitch from '../LangSwitch/LangSwitch';
import Icon from '../Shared/Icon/Icon';

const Header = () => {
  const { t, i18n } = useTranslation("translation");


  const [trackNumber, setTrackNumber] = useState("")
  const changeTrackNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrackNumber(event.target.value)
  }

  const navigate = useNavigate();

  const keyDownHandler = (event:any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate(`/tracking-shipments/${trackNumber}`)
    }
  };

  const TrackNumberHandler = () => {
    navigate(`/tracking-shipments/${trackNumber}`)
  }


  return (
    <Navbar collapseOnSelect expand="lg" className='border-bottom header'>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={i18n.language === 'en' ? logoEnPath : logoArPath} width={120} height={36} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <div className='menu mx-auto'>
            <Link to="/" className='menu__item'> {t("home")} </Link>
            <Link to="#" className='menu__item'> {t("navbar.price")} </Link>
            <Link to="#" className='menu__item'> {t("navbar.callSales")} </Link>
          </div>

          <Nav>
            <NavDropdown title={t('navbar.trakShipment')} className='fw-bold text-dark-blue'>
              <div className="track-shipment">
                <FormLabel>{t("navbar.TrackYourShipment")}</FormLabel>
                <div className='d-flex border rounded'>
                  <FormControl
                    className='border-0'
                    placeholder={t("navbar.trackNo")}
                    value={trackNumber}
                    onChange={changeTrackNumberHandler}
                    onKeyDown={keyDownHandler}
                  />
                  <Button type='submit' variant="primary" onClick={TrackNumberHandler}>
                    <Icon iconName="search" iconColor="#fff" />
                  </Button>
                </div>
              </div>
            </NavDropdown>

          <LangSwitch />
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header;