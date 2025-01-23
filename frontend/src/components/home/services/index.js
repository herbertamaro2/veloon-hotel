import React from 'react';


const Services = ({onClick}) => {

    return (
        <section className="w-full py-20">
            <div className='container' style={{ padding: 0 }}>
                <div className='flex justify-between'>
                    <div className="w-full sm-w-6/12 flex flex-column gap-4 p-4 flex-start justify-center">
                        <img src="/photos/meeting.jpg" className='rounded-xl' />

                    </div>
                    <div className="w-full sm-w-6/12 flex flex-column gap-4 p-4 flex-start justify-center">
                        <h1 className='text-2xl text-left font-bold'>Veloon Hotel | Reuniões e Eventos</h1>

                        <p className='text-left'>O Veloon Hotel é o local perfeito para realizar reuniões e eventos com sofisticação e eficiência. Com salas de conferências amplas e modernas, equipadas com tecnologia de ponta, o hotel oferece o ambiente ideal para encontros corporativos, seminários, workshops e eventos sociais.</p>

                        <p className='text-left'>Com um serviço de excelência e uma equipe dedicada, o Veloon Hotel garante que cada evento seja um sucesso. Além das salas de reunião, o hotel conta com espaços versáteis para eventos personalizados, desde coffee breaks até jantares exclusivos. Localizado a poucos passos dos principais centros comerciais e empresariais de Alphaville, o Veloon é a escolha ideal para quem busca praticidade e um ambiente inspirador para seus eventos.</p>

                        <div className='text-left'>
                            <button className="btn btn-primary btn-black w-auto"
                                style={{ background: '#000', borderColor: '#000' }}
                                onClick={() => onClick()}>
                                RESERVE JÁ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;