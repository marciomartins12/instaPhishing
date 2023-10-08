import {BiLogoFacebookSquare} from 'react-icons/bi';
import style from "./PaginaLogin.module.css";
import Formulario from '../../Components/Formulario';
const PaginaLogin = () => {
    return (
        <section>
            <h1 className={style.tituloInstagram}>Instagram</h1>
           <Formulario/>
            <div>
                <h4>OU</h4>
            </div>
            <a href="#"><BiLogoFacebookSquare/>Entrar com o Faceboock</a>
            <a href="#">Esqueceu a senha?</a>
            <h6>não tem uma conta? <a href="#">Cadastre-se</a></h6>
            <div>
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