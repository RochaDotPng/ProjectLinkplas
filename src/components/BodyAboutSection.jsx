import Button from 'react-bootstrap/Button'

export default function BodyAboutSection() {
    return (
        <>
            <div className="about-container">
                <div className="about-text-container">
                    <h1 className="fw-bold mb-4">Sobre nós</h1>
                    <p>A LinkPlas é uma empresa industrial de produção e comercialização de plásticos para peças industriais, e para outros fins. Somos uma organização dinâmica, moderna e dedicada na satisfação das necessidades dos nossos clientes.</p>
                    <p>A empresa é fundada em 2011, no entanto só inicia a sua atividade em março de 2012, com sede e instalações fabris na freguesia de Pindelo, concelho de Oliveira de Azeméis. O seu parque de máquinas era constituído por três máquinas de injeção com uma força de fecho entre 120 e 550 toneladas, permitindo injetar peças até 2,2kg; os principais produtos produzidos eram peças plásticas para máquinas de encadernação, máquinas de café e para motociclos e bicicletas.</p>
                    <p>Em 2013, a empresa angaria novos clientes, nomeadamente na indústria farmacêutica, passa, esporadicamente, a participar no desenvolvimento dos moldes e das próprias peças a produzir; tendo em vista acrescentar valor à sua produção, atrair clientes mais exigentes e afirmar-se no mercado. A empresa inicia o processo de implementação do SGQ com vista à sua certificação em Qualidade. A empresa instala-se num pavilhão industrial com 1 200 m2, onde se encontra atualmente, é adquirida uma ponte rolante de 10 toneladas e é lançado o website da empresa.</p>
                    <p>O ano de 2013 foi iniciado com um novo cliente na área da indústria farmacêutica em que foi desenvolvido um produto desde a sua conceção até á injeção das peças.</p>
                    <Button>Ler mais</Button>
                </div>
                <div className="about-img-container">
                    <div className='about-vision-div'>
                        <div>
                            <h4>Missão</h4>
                            <p className='hightlight m-0'>Fornecer peças e componentes plásticos de elevada qualidade e complexidade técnica.</p>
                        </div>
                        <div>
                            <a className='pointer link-light text-decoration-none d-flex align-items-center'>Ver mais <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className='about-mission-div'>
                        <div>
                            <h4>Visão</h4>
                            <p className='highlight m-0'>Dar uma resposta global às necessidades dos mais exigentes clientes nacionais e estrangeiros.</p>
                        </div>
                        <div>
                            <a className='pointer link-light text-decoration-none d-flex align-items-center gap-1'>Ver mais <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}