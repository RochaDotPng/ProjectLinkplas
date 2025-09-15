import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';

export default function Policy() {
    return (
        <div>
            <Helmet>
                <title>Política de Qualidade - Linkplas</title>
                <meta name="description" content="Política de qualidade Linkplas: empresa certificada ISO 9001, compromisso com melhoria contínua, satisfação do cliente e excelência na produção de peças plásticas." />
                <meta property="og:title" content="Política de Qualidade - Linkplas | ISO 9001" />
                <meta property="og:description" content="Conheça a política de qualidade da Linkplas, empresa certificada ISO 9001 com compromisso na excelência." />
                <meta property="og:url" content="https://www.linkplas.pt/Policy" />
                <link rel="canonical" href="https://www.linkplas.pt/Policy" />
            </Helmet>
            <Header/>
            <div className="policy-body-img">
                <h1 className='fw-bold text-shadow'>Politica de qualidade</h1>
            </div>
            <Container>
                <div className="policy-text">
                    <p>Através de uma estratégia de Melhoria Contínua, a Linkplas compromete-se a desenvolver e implementar continuamente medidas e ações necessárias no sentido de manter os padrões de Qualidade, reduzir e minimizar Perigos e Riscos da sua atividade tomando as medidas necessárias para atingir os seguintes objetivos:</p>
                    <ul>
                        <li>
                            Assegurar a divulgação e cumprimento dos requisitos do Sistema de Gestão da Qualidade.
                        </li>
                        <li>
                            Agir continuamente na melhoria dos processos, projetando estratégias que potenciem o desempenho organizacional e a superação da satisfação das necessidades e expectativas dos clientes, colaboradores e partes interessadas.
                        </li>
                        <li>
                            Promover a recolha e o tratamento de informação de suporte à decisão, proveniente da avaliação da satisfação de clientes e indicadores de desempenho.
                        </li>
                        <li >
                            Assegurar a identificação e cumprimento dos requisitos normativos aplicáveis, assim como a integração de boas práticas.
                        </li>
                        <li>
                            Estimular o crescimento, compromisso e motivação de todos os colaboradores no alcance dos objetivos e metas da empresa através da formação contínua, do desenvolvimento de competências, da criatividade e do reconhecimento individual;
                        </li>
                    </ul>
                </div>
            </Container>
            <Footer />
        </div>
    )
}