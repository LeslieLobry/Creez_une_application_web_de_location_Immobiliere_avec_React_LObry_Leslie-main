import footer from "../../assets/footer.png";
import footerbis from "../../assets/footerbis.png";
import "../../components/Footer/footer.css";

function Footer(){
    return (
        <footer className="footer-components">
            <div className="footer-logo">
                <img src ={footer} alt="Kasa"></img>
            </div>
            <div className="footer-text">
                <img src ={footerbis} alt="Kasa"></img>
            </div>
        </footer>
    )
}
export default Footer