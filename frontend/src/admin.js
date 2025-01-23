import React, { useState, useEffect } from 'react';
import Footer from './layout/footer';
import Header from './layout/header';
import './style.css';
import api from './services/api';
import { Table, Button } from 'react-bootstrap';


function Admin() {
    const [loader, setLoader] = useState(true);
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [reservations, setReservations] = useState([]);
    const [expandedRow, setExpandedRow] = useState(null);

    const toggleRow = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const handleOpenReservation = () => {
        
    }

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3000);
        //window.addEventListener('scroll', handleScroll)
    }, [])


    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const formatDate = (date) => {
                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = date.getFullYear();

                    return `${day}-${month}-${year}`;
                };


                const formattedDateFrom = formatDate(new Date(dateFrom));
                const formattedDateTo = formatDate(new Date(dateTo));

                const response = await api.get(`/reservation/list/${formattedDateFrom}/${formattedDateTo}`);
                console.log(response, 'test');
                if (response.data) {
                    setReservations(response.data.reservations)
                }
            } catch (err) {
                console.log(err);
            }
        }

        fetchReservations();

    }, [])


    return (
        <>
            <div className={loader ? 'preloader show' : 'preloader hide'}>
                <div className="stage">
                    <div className="box bounce-7">
                        <img src="/veloon.svg" alt='Veloon Hotel' className="logo" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            <div className="App">
                <Header onClick={handleOpenReservation} dateFrom={'25-01-2020'} dateTo={'25-01-2020'} />
                <section className='mt-5 pt-5 bg-gray-100' style={{ minHeight: '70vh' }}>
                    <div className='container py-2'>
                        <h1 className='font-bold text-2xl mb-4'>Reservas</h1>


                        <Table striped bordered hover responsive className="shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Data da Reserva</th>
                                    <th>Email</th>
                                    <th>CPF</th>
                                    <th>Telefone</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {reservations && reservations.length >= 1 && reservations.map((reservation, index) => (
                                    <React.Fragment key={reservation.id}>
                                        {/* Main Row */}
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{reservation.user.name}</td>
                                            <td>{new Date(reservation.timestamp).toLocaleString('pt-BR')}</td>
                                            <td>{reservation.user.email}</td>
                                            <td>{reservation.user.cpf}</td>
                                            <td>{reservation.user.telefone}</td>
                                            <td>
                                                <Button
                                                className='btn-black'
                                                    size="sm"
                                                    onClick={() => toggleRow(index)}
                                                >
                                                    {expandedRow === index ? '-' : '+'}
                                                </Button>
                                            </td>
                                        </tr>

                                        {/* Expanded Row */}
                                        {expandedRow === index && (
                                            <tr>
                                                <td colSpan="7">
                                                    <div className="p-3 bg-light border rounded">
                                                        <h5 className='font-bold mb-2'>Detalhes da Reserva</h5>
                                                        <div className='flex gap-3'>
                                                            <img
                                                                src={reservation.room.image}
                                                                alt={reservation.room.name}
                                                                style={{ width: '150px', borderRadius: '5px' }}
                                                            />
                                                            <div>
                                                                <p><strong>Quarto:</strong> {reservation.room.name}</p>
                                                                <p><strong>Promoção:</strong> {reservation.room.rate.name}</p>
                                                                <p><strong>Preço:</strong> {reservation.room.rate.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                </section>


                <Footer />

            </div>
        </>
    );
}

export default Admin;
