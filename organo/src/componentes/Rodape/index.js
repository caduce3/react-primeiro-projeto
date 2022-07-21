import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/cadu.eduardo.3" target="_blank" rel="noreferrer">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/CaduCe3" target="_blank" rel="noreferrer">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/cadu.lucenaa/" target="_blank" rel="noreferrer">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img className="logo"src="/imagens/uern.png" alt="" />
        </section>
        <section>
            <p className="creditos">
                <a href="https://www.linkedin.com/in/carlos-eduardo-b0baa5229/" target="_blank" rel="noreferrer">Desenvolvido por Cadu Lucena.</a>
            </p>
        </section>
    </footer>)
}

export default Rodape