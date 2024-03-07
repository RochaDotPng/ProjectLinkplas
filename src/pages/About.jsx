import Header from "../components/Header";
import Footer from "../components/Footer";
import GreenCard from "../components/about-components/GreenCard";
import { Container } from "react-bootstrap";

export default function About() {
    return (
        <div>
            <Header />
            <div className="about-body-img">
                <h1 className='fw-bold text-shadow'>Sobre nós</h1>
            </div>
            <GreenCard />
            <Container>
                <div className="about-text">
                    <div className="flex-1">
                        <span>A LinkPlas é uma empresa industrial de produção e comercialização de plásticos para peças industriais, e para outros fins. Somos uma organização dinâmica, moderna e dedicada na satisfação das necessidades dos nossos clientes.</span>
                        <br />
                        <span>A empresa é fundada em 2011, no entanto só inicia a sua atividade em março de 2012, com sede e instalações fabris na freguesia de Pindelo, concelho de Oliveira de Azeméis. O seu parque de máquinas era constituído por três máquinas de injeção com uma força de fecho entre 120 e 550 toneladas, permitindo injetar peças até 2,2kg; os principais produtos produzidos eram peças plásticas para máquinas de encadernação, máquinas de café e para motociclos e bicicletas.</span>
                        <br />
                        <span>Em 2013, a empresa angaria novos clientes, nomeadamente na indústria farmacêutica, passa, esporadicamente, a participar no desenvolvimento dos moldes e das próprias peças a produzir; tendo em vista acrescentar valor à sua produção, atrair clientes mais exigentes e afirmar-se no mercado. A empresa inicia o processo de implementação do SGQ com vista à sua certificação em Qualidade. A empresa instala-se num pavilhão industrial com 1 200 m2, onde se encontra atualmente, é adquirida uma ponte rolante de 10 toneladas e é lançado o website da empresa.</span>
                        <br />
                        <span>O ano de 2013 foi iniciado com um novo cliente na área da indústria farmacêutica em que foi desenvolvido um produto desde a sua conceção até á injeção das peças.</span>
                    </div>
                    <div className="flex-1">
                        <span>Com o rápido crescimento, a empresa sentiu necessidade de mudar de instalações, para assim obtermos uma melhor organização. Tendo como objetivo a conclusão do processo da Implementação do Sistema de Gestão da Qualidade pela Norma NP ISO 9001:2008.</span>
                        <br />
                        <span>Em 2014 a empresa obtém a Certificação em Qualidade ISO 9001:2008. A empresa consegue ir angariando novos clientes tentando libertar-se gradualmente da excessiva dependência dos seus clientes tradicionais; adquire uma máquina de injeção de 50 toneladas de nova geração, mais sofisticada, com maior produtividade, melhor performance energética e maior fiabilidade em termos de Qualidade.</span>
                        <br />
                        <span>Entre 2015 e 2016 foi adquirida a uma máquina de 350 toneladas para a produção de peças técnicas com elevada qualidade. Foi angariado um novo cliente para a Industria automóvel. </span>
                        <br />
                        <span>Concorremos também a um projeto para financiamento “Portugal 2020”, em 2 vertentes Internacionalização, procura de mercados estrangeiros e Inovação com o objetivo de aumentar a capacidade produtiva tornando o processo produtivo mais eficiente. Foi adquirido um novo software de gestão que permite uma melhor interação entre produção e gestão.</span>
                        <br />
                        <span>Apesar de sermos uma empresa com uma história recente, podemos afirmar que possuímos um Know-how bastante especializado e a tecnologia mais avançada na indústria, já que a aposta na inovação, é uma constante na nossa empresa.</span>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}