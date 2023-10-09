import { Link } from "react-router-dom";
import Style from "./Erro.module.css";
import {GiMarsPathfinder} from "react-icons/gi"
const Erro404 = () => {
    return (
        <section className={Style.section}>
            <h3>Erro 404!</h3>
            <p>Page not found</p>
            <GiMarsPathfinder className={Style.icon}/>
            <Link className={Style.btn} to="/">Come back for login page</Link>
        </section>
    )
}
export default Erro404;