import style from "./Formulario.module.css";
const Formulario = () => {
   return ( <form className={style.formulario}>
        <input className={style.inpt} type="text" />
        <input className={style.inpt} type="password" />
        <button>Entrar</button>
    </form>)
}
export default Formulario;