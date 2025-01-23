import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        waitForAnimate: false,
    };

    const slides = [
        {
            src: 'https://www.youtube.com/embed/KoiN7h6ePqA',
            type: 'video',
        },
        { src: '/photos/lobby.jpg', alt: 'Lobby', type: 'image' },
        { src: '/photos/restaurant.jpg', alt: 'Restaurante', type: 'image' },
        { src: '/photos/room.jpg', alt: 'Room', type: 'image' },
    ];

    return (
        <section className="banner w-full relative overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-[700px]">
                        {slide.type === 'image' ? (
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="relative w-full h-full overflow-hidden">
                                <iframe
                                    src={`${slide.src}?autoplay=1&mute=1&controls=0&loop=1&vq=hd720&playlist=KoiN7h6ePqA`}
                                    className="absolute top-1/2 left-1/2 w-[200%] h-[200%] transform -translate-x-1/2 -translate-y-1/2 object-cover"
                                    title={`video-${index}`}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Banner;
