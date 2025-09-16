import { FaGithub } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="footerSimpleContent">
                    <p className="footerCopyright">© {currentYear} Todos los derechos reservados.</p>
                    <a href="https://github.com/santinolamberti/pnt2-2025-c2-simu"><FaGithub /></a>
                </div>
            </div>
        </footer>
    );
}