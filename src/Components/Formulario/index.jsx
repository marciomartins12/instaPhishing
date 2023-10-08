import style from "./Formulario.module.css";
const Formulario = () => {
    return (<form className={style.formulario}>
        <input className={style.inpt}
            type="text"
            placeholder="Telefone, nome de usuário ou email"
        />
        <input className={style.inpt}
            type="password"
            placeholder="Senha"
        />
        <button>Entrar</button>
    </form>)
}
export default Formulario;