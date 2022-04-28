import './Footer.css';
import Logo from '../../img/Galoa_logo.png';

export const Footer = () => {
    return(
        <footer className='footer_container'>

            <div className='footer_wrapper'>

                <div className='footer_left'>
                    <img alt='Galoá - anais e proceedings' src={Logo}></img>
                    <div className='btn'>Saiba Mais</div>
                </div>

                <div className='footer_right'>
                    <p><strong>Preservar a memória do evento e ampliar o acesso ao conhecimento científico</strong> gerado em eventos é a razão de ser da plataforma Galoá Proceedings.
                    </p>
                    <p>Os trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda a comunidade científica, mantendo aceso o debate científico fomentado pelos encontros e aumentando o impacto do evento.
                    </p>
                </div>

            </div>

        </footer>
    )
};