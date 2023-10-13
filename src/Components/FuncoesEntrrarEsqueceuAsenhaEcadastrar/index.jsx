import {BiLogoFacebookSquare} from 'react-icons/bi';
import style from "./Funcoes.module.css";
const Funcao = () => {
    return (
        <div className={style.divFuncoes}>
        <a className={style.faceboock} href="#"><BiLogoFacebookSquare />Entrar com o Faceboock</a>
            
        <a className={style.esqueceuASenha} href="#">Esqueceu a senha?</a>
        
        </div>)
}
export default Funcao;