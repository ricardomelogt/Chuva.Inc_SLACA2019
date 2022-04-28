import {Comments} from '../Comments/Comments';
import './Content.css';
import Video from '../../img/Video.png';
import DOI from '../../img/Doi.png';
import Autor from '../../img/Ada.png';

export const Content = () => {

    const showText = (e) => {
        e.target.parentElement.classList.remove('less');
        e.target.classList.add('off')
    };

    return(

        <section className='content_container'>

            <header className='trabalho_title'>
                <h3>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP</h3>

                <div className='botoes'>
                    <div className='btn'><i className="bi bi-download"></i> Download</div>
                    <div className='btn star'><i className="bi bi-star-fill"></i></div>
                    <div className='btn'><img alt='D.O.I.' src={DOI}></img></div>
                    <a className='como_citar' href='www.google.com'>COMO CITAR ESSE TRABALHO?</a>
                </div>
            </header>

            <div className='trabalho_content'>
                <div className='video_player'>
                    <img className='video_bg' src={Video} alt='video'></img>

                    <div className='video_overlay'>
                        <h3>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP</h3>

                        <div className='video_info'>
                            <img alt='Autor' src={Autor}></img>
                            <div>
                                <p className='nome'>Beatriz Christiane Melo</p>
                                <p className='instituicao'>FCA / Universidade Estadual de Campinas</p>
                            </div>
                        </div>
                    </div>

                </div>

                <section className='detalhes panel'>
                    <h4>Detalhes</h4>
                    <div>
                        <div className='meta_dados'>
                            <p>Tipo de Apresentação: <strong>Pôster</strong></p>
                            <p>Eixo temático: <strong>Alimentação e saúde (AS)</strong></p>
                            <p>Palavras-chaves: <strong>Alimentos funcionais, alimentação escolar.</strong></p>
                        </div>

                        <h5>Autores:</h5>
                        <ul className='lista_autores'>
                            <li>Galileo Galilei<span>1</span></li>
                            <li>Berta Lange de Morretes<span>2</span></li>
                            <li>Isaac Newton<span>3</span></li>
                            <li>Cesar Lattes<span>1</span></li>
                            <li>Stephen Hawking<span>4</span></li>
                        </ul>

                        <ul className='instituicoes_autores'>
                            <li><span>1</span>Universidade Estadual de Campinas</li>
                            <li><span>2</span>Universidade de São Paulo</li>
                            <li><span>3</span>Instituto Nacional de Pesquisas Espaciais</li>
                            <li><span>4</span>Universidade Federal do Rio de Janeiro</li>
                        </ul>
                    </div>
                </section>

                <article className='resumo panel'>
                    <h4>Resumo</h4>
                    <div className='panel_content less'>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.
                        </p>

                        <p>
                            Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.
                        </p>

                        <p>
                            Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.
                        </p>

                        <p>
                            Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <span className='resumo_ver_mais on' onClick={showText}>ver mais</span>
                    </div>
                </article>
            </div>

            <Comments></Comments>

        </section>
    )
};