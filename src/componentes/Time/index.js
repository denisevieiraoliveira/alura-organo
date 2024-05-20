import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    return (
        //renderização condicional - se for verdadeiro retorna o que está a direita, se não, não faz nada
        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corPrimaria={props.corPrimaria}
                />)}
            </div>
        </section>

        //renderização com ternario
        // (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria }}>
        //     <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        //     <div className='colaboradores'>
        //         {props.colaboradores.map(colaborador => <Colaborador 
        //             nome={colaborador.nome}
        //             cargo={colaborador.cargo}
        //             imagem={colaborador.imagem}
        //         />)}
        //     </div>
        // </section>
        // : ''
    );
}

export default Time;