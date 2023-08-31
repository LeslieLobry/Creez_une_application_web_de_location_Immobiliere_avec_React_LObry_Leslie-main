import { Link } from "react-router-dom";
import "../Error/error.css"
function Error() {
    return (
        <div className="container">
            <div className="code-error">404</div>
            <h2 className="text-error">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="return">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error