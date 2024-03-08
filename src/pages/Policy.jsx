import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

export default function Policy() {
    return (
        <div>
            <Header />
            <div className="policy-body-img">
                <h1 className='fw-bold text-shadow'>Politica de qualidade</h1>
            </div>
            <Container>
                <div className="policy-text">
                    <span>Através de uma estratégia de Melhoria Contínua, a Linkplas compromete-se a desenvolver e implementar continuamente medidas e ações necessárias no sentido de manter os padrões de Qualidade, reduzir e minimizar Perigos e Riscos da sua atividade tomando as medidas necessárias para atingir os seguintes objetivos:</span>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Assegurar a divulgação e cumprimento dos requisitos do Sistema de Gestão da Qualidade.
                        </li>
                        <li className="list-group-item">
                            Agir continuamente na melhoria dos processos, projetando estratégias que potenciem o desempenho organizacional e a superação da satisfação das necessidades e expectativas dos clientes, colaboradores e partes interessadas.
                        </li>
                        <li className="list-group-item">
                            Promover a recolha e o tratamento de informação de suporte à decisão, proveniente da avaliação da satisfação de clientes e indicadores de desempenho.
                        </li>
                        <li className="list-group-item">
                            Assegurar a identificação e cumprimento dos requisitos normativos aplicáveis, assim como a integração de boas práticas.
                        </li>
                        <li className="list-group-item">
                            Estimular o crescimento, compromisso e motivação de todos os colaboradores no alcance dos objetivos e metas da empresa através da formação contínua, do desenvolvimento de competências, da criatividade e do reconhecimento individual;
                        </li>
                    </ul>
                </div>
            </Container>
            <Footer />
        </div>
    )
}