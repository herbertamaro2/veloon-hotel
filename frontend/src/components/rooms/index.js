import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MakeReservation from '../reservation/form';
import api from '../../services/api';


const Rooms = ({ dateFrom, dateTo, setDateFrom, setDateTo }) => {
    const [rooms, setRooms] = useState([]);
    const [showPromotions, setShowPromotions] = useState({});
    const [makeReservation, setMakeReservation] = useState(false);
    const [roomSelected, setRoomSelected] = useState({});

    useEffect(() => {
        const getRooms = async () => {
            try {
                const formatDate = (date) => {
                    const day = String(date.getDate()).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const year = date.getFullYear();

                    return `${day}-${month}-${year}`;
                };


                const formattedDateFrom = formatDate(new Date(dateFrom));
                const formattedDateTo = formatDate(new Date(dateTo));

                const response = await api.get(`/rooms/list/${formattedDateFrom}/${formattedDateTo}`);
                //console.log(response, 'test');
                if (response.data) {
                    setRooms(response.data.rooms)
                }
            } catch (err) {
                console.log(err);
            }
        }

        getRooms();

    }, [])


    const handleClean = () => {
        setDateFrom(null);
        setDateTo(null);
    };

    const handleTogglePromotions = (roomId) => {
        setShowPromotions((prev) => ({
            ...prev,
            [roomId]: !prev[roomId],
        }));
    };



    const handleOpenReservation = (room, rate) => {
        setRoomSelected({
            id: room.id,
            name: room.name,
            image: room.image,
            rate
        });
        setMakeReservation(true)
    }


    return (
        <>
            <MakeReservation
                show={makeReservation}
                setShow={setMakeReservation}
                selectedRoom={roomSelected}
                setRoomSelected={setRoomSelected}
                handleClean={handleClean}
            />
            <section className="w-full pt-5 mt-5 bg-gray-100" style={{ minHeight: '80vh' }}>
                <div className="container mx-auto px-5">
                    <div className="flex justify-end items-center pt-4">
                        <button onClick={handleClean} className="btn-outline bg-red-500 text-white font-bold px-3 py-2 rounded mb-4">
                            x Limpar Filtro
                        </button>
                    </div>

                    {rooms && rooms.length >= 1 && rooms.map((room) => (
                        <div key={room.id} className="list-room mb-6 bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="flex">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-1/3 object-cover"
                                    style={{ maxHeight: "200px" }}
                                />
                                <div className="w-2/3 p-4">
                                    <h3 className="text-lg text-left font-semibold">{room.name}</h3>
                                    <ul className="flex space-x-4 mt-2">
                                        {room.amenities.map((amenity, index) => (
                                            <li key={index} className="text-md font-light text-gray-600">
                                                {amenity}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='text-end'>
                                        <p className="mt-3 text-xl font-bold text-end text-purple-600">{room.price}</p>
                                        <button
                                            onClick={() => handleTogglePromotions(room.id)}
                                            className="mt-2 bg-green-500 text-black font-bold px-2 py-1 rounded text-sm"
                                        >
                                            {showPromotions[room.id] ? "Fechar Promoções" : "Ver Promoções"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {showPromotions[room.id] && (
                                <div className="p-4">
                                    <h4 className="text-md font-semibold mb-2">Promoções</h4>
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        navigation
                                        breakpoints={{
                                            640: { slidesPerView: 2 },
                                            768: { slidesPerView: 3 },
                                            1024: { slidesPerView: 4 },
                                        }}
                                    >
                                        {room.rates.map((rate, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="border rounded-lg p-2 text-center hover:shadow-md transition">
                                                    <h5 className="text-sm font-semibold">{rate.name}</h5>
                                                    <p className="text-purple-600 font-bold mt-2">{rate.price}</p>
                                                    <button className="mt-2 bg-black font-bold text-white px-2 py-1 rounded text-sm" onClick={() => handleOpenReservation(room, rate)}>
                                                        RESERVAR
                                                    </button>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Rooms;
