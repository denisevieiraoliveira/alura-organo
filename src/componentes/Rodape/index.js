import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section className='redes'>
                <a href='https://www.facebook.com/?locale=pt_BR' target="_blank"><img src='../imagens/fb.png' alt='Logo Facebook' /></a>
                <a href='https://x.com/home?lang=pt-br' target="_blank"><img src='../imagens/tw.png' alt='Logo Twitter' /></a>
                <a href='https://instagram.com' target="_blank"><img src='../imagens/ig.png' alt='Logo Instagram' /></a>
            </section>
            <section className='logo'>
                <img src='../imagens/logo.png' alt='Logo Organo' />
            </section>
            <section className='texto'>
                <p>Desenvolvido por Alura.</p>
            </section>

        </footer>
    );
}

export default Rodape;