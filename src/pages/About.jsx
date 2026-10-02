import Header from "../components/Header";
import Footer from "../components/Footer";
import GreenCard from "../components/about-components/GreenCard";
import { Container } from "react-bootstrap";
import PageMeta from '../components/seo/PageMeta/PageMeta';

export default function About() {
    return (
        <div>
            <PageMeta page="about" />
            <Header  />
            <main id="conteudo" tabIndex={-1}>
            <div className="about-body-img">
                <h1 className='fw-bold text-shadow'>Sobre nós</h1>
            </div>
            <GreenCard />
            <Container>
                <div className="about-text">
                    <div className="flex-1">
                        <span>Fundada em 2012 a LinkPlas tem como atividade principal a injeção de peças plásticas para diversas áreas de mercado. É uma empresa de referência neste setor e aposta diariamente na inovação do produto, na qualidade e satisfação dos seus clientes.</span>
                        <br />
                        <br />
                        <span>2014 - Certificação ISO 9001.</span>
                        <br />
                        <br />
                        <span>2016 – Criação primeiro produto LinkPlas na área alimentar.</span>
                        <br />
                        <br />
                        <span>2018 – Implementação linha montagem para vários setores.</span>
                        <br />
                        <br />
                        <span>2020 – Aquisição de máquina Ultra-sons para dar resposta as solicitações de mercado.</span>
                        <br />
                        <br />
                        <span>2023 – Conceção, desenvolvimento e início de produção de uma gama de caixas plásticas para armazenamento de alimentos eco amigável.</span>
                        <br />
                        <br />
                        <span>2024 – Inicio de produção de Caixas de transporte de medicamentos fabricada em plástico de alta resistência, desenhada para a segurança e conservação de produtos farmacêuticos com moldes próprios.</span>
                    </div>
                </div>
                <div className="about-text">
                    <div className="flex-1">
                        <h5>Missão</h5>
                        <p>
                            A LinkPlas fornece peças e componentes plásticos de elevada qualidade e complexidade técnica, desenvolvendo as mais eficientes e inovadoras soluções em parceria com os seus clientes, minimizando, sempre que possível, o impacto ambiental ao longo de todo o ciclo de vida do produto.
                        </p>
                    </div>
                    <div className="flex-1">
                        <h5>Visão</h5>
                        <p>
                            Crescer como uma empresa de referência no setor dos componentes plásticos, com capacidade para dar uma resposta global às necessidades dos mais exigentes clientes nacionais e estrangeiros.
                        </p>
                        <p>
                            A LinkPlas posiciona-se pelo reconhecimento da sua capacidade de resposta tecnológica e pelo seu compromisso inabalável com o desenvolvimento sustentável.
                        </p>
                    </div>
                    <div className="flex-1">
                        <h5>Valores</h5>
                        <p>A LinkPlas rege-se pelos seguintes valores empresariais:</p>
                        <ul>
                            <li>Confiança e Rigor</li>
                            <li>Qualidade e Excelência</li>
                            <li>Responsabilidade Ambiental e Social</li>
                            <li>Eficácia e Eficiência Operacional</li>
                        </ul>
                    </div>
                </div>
            </Container>
            </main>
            <Footer />
        </div>
    )
}