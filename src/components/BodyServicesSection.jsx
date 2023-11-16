import Cards from '../components/Cards';

export default function BodyServicesSection() {
    return (
        <>
            <div className="services-body-container">
                <div className="services-body-img">
                    <div className="services-text">
                        <h2 className='fw-bold text-shadow'>Os nossos serviços</h2>
                    </div>
                    <div className="cards-container">
                        <Cards title={"Equipamento de Escritório"} text={"Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes liberit vitultricies sit dignissim pellentesque. Etiam duis eu auctor sn amet dola pellentesque.umauriLorem ipsum dolor sit amet conse Vie liberofd cras purus nam. Ultrices libero sit vitae "} />
                        <Cards title={"Eletrodomésticos"} text={"Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes liberit vitultricies sit dignissim pellentesque. Etiam duis eu auctor sn amet dola pellentesque.umauriLorem ipsum dolor sit amet conse Vie liberofd cras purus nam. Ultrices libero sit vitae "} />
                        <Cards title={"Moldes e Plástico"} text={"Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes liberit vitultricies sit dignissim pellentesque. Etiam duis eu auctor sn amet dola pellentesque.umauriLorem ipsum dolor sit amet conse Vie liberofd cras purus nam. Ultrices libero sit vitae "} />
                        <Cards title={"Recipientes Takeaway"} text={"Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes liberit vitultricies sit dignissim pellentesque. Etiam duis eu auctor sn amet dola pellentesque.uLorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes liberit vitultricies sit dignissim pellentesque. Etiam duis eu auctor sn amet dola pellentesque.umauriLorem ipsum dolor sit amet conse Vie liberofd cras purus nam. Ultrices libero sit vitae mauriLorem ipsum dolor sit amet conse Vie liberofd cras purus nam. Ultrices libero sit vitae "} />
                    </div>
                </div>
            </div>
        </>
    )
}