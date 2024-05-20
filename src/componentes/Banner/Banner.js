import './Banner.css';

export const Banner = () => {
    //JSX - como o React lê e transforma em elementos no DOM, como se fosse um document.createElement('img')
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página do Organo"/>
        </header>
    );
}