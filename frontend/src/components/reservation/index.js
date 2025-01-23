import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ReservationModal({ show, setShow, dateFrom, setDateFrom, dateTo, setDateTo }) {

  const [isOpenFrom, setIsOpenFrom] = useState(false);
  const [isOpenTo, setIsOpenTo] = useState(false);

  const formatDate = (date) => {
    if (!date) return { weekday: '--', day: '--', monthYear: '--' };
    return {
      weekday: new Date(date).toLocaleDateString('pt-BR', { weekday: 'short' }).toUpperCase(),
      day: new Date(date).getDate(),
      monthYear: new Date(date).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }).toUpperCase(),
    };
  };

  const handleClose = () => {
    setShow(false)
    setDateFrom(null)
    setDateTo(null)
  };


  const handleNext = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Reserve Sua Estadia
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reserve Sua Estadia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex justify-between">
            <div className="flex w-6/12 flex-col items-center my-4">
              <label htmlFor="dateFrom" className="text-sm mb-2">
                Check-in
              </label>
              <div
                className="text-center cursor-pointer"
                onClick={() => setIsOpenFrom(true)}
              >
                {dateFrom ? (
                  <>
                    <h2 className='font-bold'>{new Date(dateFrom).toLocaleDateString('pt-BR', { weekday: 'short' }).toUpperCase()}</h2>
                    <h1 className='text-4xl font-bold text-purple-500'>{new Date(dateFrom).getDate()}</h1>
                    <h2 className='font-bold'>{new Date(dateFrom).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }).toUpperCase()}</h2>
                  </>
                ) : (
                  <p>Selecionar data</p>
                )}
              </div>
              {isOpenFrom && (
                <DatePicker
                  id="dateFrom"
                  selected={dateFrom}
                  onChange={(date) => {
                    setDateFrom(date);
                    setIsOpenFrom(false);
                  }}
                  dateFormat="dd MMM yyyy"
                  className="datepicker-reservation rounded-lg p-2"
                  onClickOutside={() => setIsOpenFrom(false)} // Fecha ao clicar fora
                  open={isOpenFrom} // Força a abertura
                  onCalendarClose={() => setIsOpenFrom(false)} // Fecha o calendário
                  popperPlacement="bottom" // Mostra abaixo
                  popperClassName="custom-popper" // Customiza a posição
                />
              )}
            </div>

            {/* Check-out */}
            <div className="flex w-6/12 flex-col items-center my-4">
              <label htmlFor="dateTo" className="text-sm mb-2">
                Check-out
              </label>
              <div
                className="text-center cursor-pointer"
                onClick={() => setIsOpenTo(true)}
              >
                {dateTo ? (
                  <>
                    <h2 className='font-bold'>{new Date(dateTo).toLocaleDateString('pt-BR', { weekday: 'short' }).toUpperCase()}</h2>
                    <h1 className='text-4xl font-bold text-purple-500'>{new Date(dateTo).getDate()}</h1>
                    <h2 className='font-bold'>{new Date(dateTo).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }).toUpperCase()}</h2>
                  </>
                ) : (
                  <p>Selecionar data</p>
                )}
              </div>
              {(
                <DatePicker
                  id="dateTo"
                  selected={dateTo}
                  onChange={(date) => {
                    setDateTo(date);
                    setIsOpenTo(false);
                  }}
                  minDate={dateFrom}
                  dateFormat="dd MMM yyyy"
                  className="datepicker-reservation rounded-lg p-2"
                  style={{marginTop: -20}}
                  onClickOutside={() => setIsOpenTo(false)}
                  open={isOpenTo} 
                  onCalendarClose={() => setIsOpenTo(false)}
                  popperPlacement="bottom" 
                  popperClassName="custom-popper"
                />
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button className="bg-purple-500 border-purple-500" disabled={dateFrom === null || dateTo === null} variant="primary" onClick={handleNext}>
            Próximo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReservationModal;