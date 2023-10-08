
import style from "./PaginaLogin.module.css";
import Formulario from '../../Components/Formulario';
import Funcao from '../../Components/FuncoesEntrrarEsqueceuAsenhaEcadastrar';
const PaginaLogin = () => {
    return (
        <section>
            <h1 className={style.tituloInstagram}>Instagram</h1>
            <Formulario />
            <div className={style.divOU}>
                <div></div>
                <span>OU</span>
                <div></div>
            </div>

            <Funcao/>

            <div className={style.divAplicativos}>
                <p>Obtenha o aplicativo.</p>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div>
                <a href="#">.</a>
                <a href="#">.</a>
                <a href="#">.</a>
                <a href="#">.</a>
                <a href="#">.</a>
                <a href="#">.</a>
                <a href="#">.</a>
                <a href="#">.</a>
            </div>
        </section>)
};
export default PaginaLogin;