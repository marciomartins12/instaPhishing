import {BiLogoFacebookSquare} from 'react-icons/bi';
import style from "./Funcoes.module.css";
const Funcao = () => {
    return (
        <div className={style.divFuncoes}>
        <a className={style.faceboock} href="#"><BiLogoFacebookSquare />Entrar com o Faceboock</a>
            
        <a className={style.esqueceuASenha} href="#">Esqueceu a senha?</a>
        <h6 className={style.semConta}>não tem uma conta? <a href="#">Cadastre-se</a></h6>
        </div>)
}
export default Funcao;