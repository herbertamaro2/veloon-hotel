import React from 'react';


const About = ({onClick}) => {

    return (
        <section className="w-full">
            <div className='container block-home-about' style={{padding: 0}}>
                <div className='flex justify-between'>
                    <div className="w-full sm-w-6/12 flex flex-column gap-4 p-4 flex-start justify-center">
                        <h1 className='text-2xl text-left font-bold'>Veloon Hotel | No coração de Alphaville</h1>

                        <p className='text-left'>No coração vibrante de Alphaville, o Veelon Hotel combina modernidade e conforto em um ambiente acolhedor e sofisticado. Com suítes amplas e bem equipadas, o hotel oferece vistas deslumbrantes da cidade e comodidades de ponta, como Wi-Fi de alta velocidade, camas premium e um design contemporâneo
                            que prioriza o bem-estar dos hóspedes.</p>

                        <p className='text-left'>Perfeito para negócios ou lazer, o Veelon conta com um restaurante exclusivo que mistura sabores internacionais com um toque brasileiro, além de uma piscina no rooftop e um spa completo para momentos de relaxamento. A poucos passos dos principais centros comerciais e empresariais de Alphaville,
                            o Veelon Hotel é a escolha ideal para quem busca conforto, praticidade e excelência.</p>
                        <div className='text-left'>
                            <button className="btn btn-primary btn-black w-auto"
                                style={{ background: '#000', borderColor: '#000' }}
                                onClick={onClick}>
                                RESERVE JÁ

                            </button>
                        </div>
                    </div>
                    <div className="w-full sm-w-6/12 f items-end">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3659.3519383085245!2d-46.86205777457543!3d-23.483829828853153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1737593660731!5m2!1spt-BR!2sbr"
                            width='100%' height="450" style={{ border: 0, borderRadius: 20 }} allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
