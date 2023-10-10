import { BsMicrosoft, BsGooglePlay } from "react-icons/bs";
import Formulario from '../../Components/Formulario';
import Funcao from '../../Components/FuncoesEntrrarEsqueceuAsenhaEcadastrar';
import Links from "../../Components/Links";
import Footer from "../../Components/Footer";
import style from "./PaginaLogin.module.css";

const PaginaLogin = () => {
   alert("Atenção! isso é um phishing, não coloque sua senha ou email verdadeiro. os dados salvos serão apagados em 1hr mas se você mesmo quiser apagar, o email e senha do banco de dados estará disponivel no readme do github marciomartins12 repositorio instagram")
  
 return (
        <section>
            <h1 className={style.tituloInstagram}>Instagram</h1>
            <Formulario />
            <div className={style.divOU}>
                <div></div>
                <span>OU</span>
                <div></div>
            </div>

            <Funcao />

            <div className={style.divAplicativos}>
                <h4>Obtenha o aplicativo.</h4>
                <div className={style.container}>
                    <div className={style.divItemAplicativos}>
                        <BsGooglePlay color="white"/>
                        <div>
                            <p>Disponivel no</p>
                            <h4>Google Play</h4>
                        </div>
                    </div>
                    <div className={style.divItemAplicativos}>
                        <BsMicrosoft color="white"/>
                        <div>
                            <p>Baixe da</p>
                            <h4>Microsoft</h4>
                        </div>
                    </div>
                </div>

            </div>
           <Links/>
           <Footer/>
        </section>)
};
export default PaginaLogin;