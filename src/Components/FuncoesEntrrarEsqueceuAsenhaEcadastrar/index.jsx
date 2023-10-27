import {BiLogoFacebookSquare} from 'react-icons/bi';
import style from "./Funcoes.module.css";
const Funcao = ({senhaErrada}) => {
    console.log("senha:", senhaErrada)
    return (
        <div className={style.divFuncoes}>
        <a className={style.faceboock} href="#"><BiLogoFacebookSquare />Entrar com o Faceboock</a>


            {senhaErrada > 0 && <p className={style.paragrafo}> Sua senha está incorreta. Confira-a.</p>
}

        <a className={style.esqueceuASenha} href="#">Esqueceu a senha?</a>
        
        </div>)
}
export default Funcao;