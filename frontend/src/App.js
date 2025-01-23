import { useState, useEffect } from 'react';
import Footer from './layout/footer';
import Header from './layout/header';
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './components/home/banner';
import About from './components/home/about';
import Gallery from './components/home/gallery';
import Services from './components/home/services';
import ReservationModal from './components/reservation';
import Rooms from './components/rooms';


function App() {
  const [loader, setLoader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);


  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  const handleOpenReservation = () => {
    setShow(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={loader ? 'preloader show' : 'preloader hide'}>
        <div className="stage">
          <div className="box bounce-7">
            <img src="/veloon.svg" alt='Veloon Hotel' className="logo" style={{width: '100%'}} />
          </div>
        </div>
      </div>
      <div className="App">
        <Header onClick={handleOpenReservation} dateFrom={dateFrom} dateTo={dateTo} />
        {(dateFrom && dateTo) ?
          <Rooms
            dateFrom={dateFrom}
            dateTo={dateTo}
            setDateFrom={setDateFrom}
            setDateTo={setDateTo} /> :
          <>
            <Banner />
            <About onClick={handleOpenReservation} />
            <Gallery />
            <Services onClick={handleOpenReservation} />
          </>
        }

        <Footer />
        {scrolled ? <button className='whats-icon'><img src={'/whatsapp.png'} /></button> : <></>}
        {show && <ReservationModal
          show={show}
          setShow={setShow}
          dateFrom={dateFrom}
          setDateFrom={setDateFrom}
          dateTo={dateTo}
          setDateTo={setDateTo}
        />}

      </div>
    </>
  );
}

export default App;
