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
                <meta property="og:updated_time" content="2026-03-12T00:00:00+00:00" />
                <link rel="canonical" href="https://www.linkplas.pt/Policy" />
            </Helmet>
            <Header/>
            <div className="policy-body-img">
                <h1 className='fw-bold text-shadow'>Politica de qualidade</h1>
            </div>
            <Container>
                <div className="policy-text">
                    <p>
                        Através de uma estratégia de Melhoria Contínua, a Linkplas compromete-se a desenvolver e implementar continuamente medidas e ações necessárias no sentido de manter os padrões de Qualidade, reduzir e minimizar Perigos e Riscos da sua atividade tomando as medidas necessárias para atingir os seus objetivos.
                    </p>
                    <p>
                        A Linkplas compromete-se a:
                    </p>
                    <ol>
                        <li>
                            Assegurar o cumprimento dos requisitos do Sistema de Gestão, da legislação aplicável e das boas práticas do setor.
                        </li>
                        <li>
                            Promover a excelência no design e a melhoria contínua dos processos para maximizar resultados e satisfação, liderando a transição para soluções mais sustentáveis através da consciencialização proativa da nossa cadeia de valor (clientes e fornecedores) para a escolha de produtos de reduzido impacto ambiental. Garantindo a superação da satisfação das necessidades e expectativas das partes interessadas relevantes.
                        </li>
                        <li>
                            Promover comportamentos orientados para o uso racional de energia e matérias-primas, incentivando a economia circular através da redução de desperdícios e da valorização de materiais reciclados sempre que tecnicamente viável.
                        </li>
                        <li>
                            Promover o crescimento e a motivação através da formação contínua e do desenvolvimento de competências, consolidando uma cultura de segurança, responsabilidade ambiental e reconhecimento da criatividade individual como pilares do nosso sucesso.
                        </li>
                    </ol>
                </div>
            </Container>
            <Footer />
        </div>
    )
}