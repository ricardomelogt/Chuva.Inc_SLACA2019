import './Comments.css';

export const Comments = () => {

    const btnAdd = (e) => {
        e.target.parentElement.classList.add('hidden');
        document.getElementById('add_form').classList.remove('hidden');
    } // Acessar o formulário

    const addComment = () => {
        let subject = document.getElementById('add_subject').value;
        let text = document.getElementById('add_text').value;
        let commentsHTML = document.getElementById('cards_wrapper').innerHTML;

        if (subject.length > 0 && text.length > 0) {
        document.getElementById('cards_wrapper').innerHTML = 
        `<div class='comment_card'>
            <article class='comment_post'>
                <h5>${subject}</h5>
                <p class='card_autor'>Ricardo Melo</p>
                <p class='card_text'>${text}</p>
                <div class='option_area'>
                    <div class='card_options'><i class="bi bi-three-dots-vertical"></i></div>
                    <div class='btn like'><i class="bi bi-heart-fill"></i></div>
                    <p class='count_info'><span class='like_count'>0 likes</span> <span class='respostas_count'>0 respostas</span></p>
                </div>
                <div class='overlay'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1671 7.33594C20.3494 7.51823 20.4406 7.73958 20.4406 8C20.4406 8.26042 3494 8.48177 20.1671 8.66406L8.60461 20.2266C8.42232 20.4089 8.20097 20.5 7.94055 5C7.68014 20.5 7.45878 20.4089 7.27649 20.2266L0.713989 13.6641C0.531698 13.4818440552 13.2604 0.440552 13C0.440552 12.7396 0.531698 12.5182 0.713989 12.3359L2.27610.7734C2.45878 10.5911 2.68014 10.5 2.94055 10.5C3.20097 10.5 3.42232 10.5911 3.60410.7734L7.94055 15.1484L17.3156 5.77344C17.4718 5.59115 17.6801 5.5 17.9406 5.5C18.25.5 18.4223 5.59115 18.6046 5.77344L20.1671 7.33594ZM7.51086 11.4766L3.13586 7.1015682336 6.78906 2.82336 6.48958 3.13586 6.20312L4.89368 4.44531C5.02389 4.3151 5.1671125 5.32336 4.25C5.50566 4.25 5.66191 4.3151 5.79211 4.44531L7.94055 6.59375L13.8781695312C13.9822 0.565104 14.1124 0.5 14.2687 0.5C14.451 0.5 14.6072 0.565104 14.7374695312L16.4952 2.45312C16.8077 2.73958 16.8077 3.03906 16.4952 3.35156L8.37024 4766C8.26607 11.6068 8.12284 11.6719 7.94055 11.6719C7.75826 11.6719 7.61503 11.606851086 11.4766Z" fill="#707070"/>
                    </svg>
                    <p>Aguardando feedback dos autores</p>
                    <a href="www.google.com">Editar tópico</a>
                </div>
            </article>
        </div>` + commentsHTML; // adiciona o html do novo tópico
        
        document.getElementById('add_form').classList.add('hidden');
        document.getElementById('add_sucesso').classList.remove('hidden'); // tópico enviado com sucesso

        document.getElementById('add_subject').value = '';
        document.getElementById('add_text').value = ''; // limpa os campos de formulário para usar novamente

        } else {
            alert('Os campos do formulário não podem estar vazios.')
        };
    } // Adicionar nova pergunta caso os campos de texto não estajam vazios

    return (
        <section className="comments panel">
            <h4>Discussões</h4>
            <div className='comments panel_content'>

                <section className='add_area'>

                    <div id='add_inicio' className='criar_topico'>
                        <h5>Compartilhe suas ideias ou dúvidas com os autores!</h5>
                        <div className='icones_add_area'>
                            <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8603 18.0563C19.8603 16.0563 20.8603 8.55636 25.3603 3.55638C33.9103 -5.94368 47.1802 5.55627 41.8603 15.0563C38.3624 21.3025 53.3603 21.5563 50.3603 38.0563C47.3603 54.5563 28.8603 49.0563 25.3603 42.5563C21.8603 36.0563 16.3603 41.5563 5.86026 38.0563C-4.63974 34.5563 1.86026 20.5563 11.8603 18.0563Z" fill="#F4F4F4"/>
                            <path d="M13.6355 25.0232C13.2829 25.0291 13 25.3177 13 25.6704V37.615C13 37.7933 13.1453 37.9386 13.3236 37.9386H16.3868C16.6754 37.9386 16.9293 37.7468 17.0087 37.4697L19.8665 27.3967C20.0506 26.7457 19.7018 26.0617 19.0663 25.8312C17.8961 25.403 16.1 24.9826 13.6355 25.0232Z" fill="#4D4D4D"/>
                            <path d="M41.4175 32.1259C38.8349 32.1259 33.6675 35.3964 31.0849 35.3964C28.5022 35.3964 25.594 33.4163 25.594 33.4163C25.594 33.4163 29.0737 34.0615 31.0829 34.0615C33.0921 34.0615 33.6656 33.3756 33.6656 32.4475C33.6656 30.1865 29.8255 29.8358 27.8841 29.5413C25.9776 28.4795 24.9875 27.6406 21.8294 27.3732C21.81 27.5573 21.781 27.7394 21.7306 27.9235L19.1363 37.0685C22.0755 38.4054 27.1343 40.523 29.7906 40.523C33.6656 40.523 43.9983 35.3557 43.9983 34.0654C43.9983 32.775 42.7079 32.1259 41.4175 32.1259Z" fill="#4D4D4D"/>
                            <path d="M42.603 10.3989C42.4906 10.0385 42.1186 9.76726 41.7427 9.71688C39.4565 9.41463 36.3236 9.00388 33.8164 11.2591C32.1502 12.7607 31.9293 15.2833 33.2216 17.0658C32.0243 18.2942 31.2648 19.5652 30.7862 20.6831C30.298 19.664 29.7245 18.7514 29.151 17.9668C29.4086 17.3293 29.5443 16.6279 29.5365 15.8878C29.521 14.394 28.9165 12.9293 27.9187 11.9721C24.8613 9.03101 21.027 9.41657 17.9464 9.72657L17.7875 9.74207C17.4117 9.78082 17.092 10.0327 16.968 10.3892C16.8459 10.7457 16.9408 11.1429 17.2121 11.4044C18.5916 12.7297 18.8725 14.1383 19.1709 15.6282C19.4363 16.9534 19.7095 18.3252 20.8275 19.4005C21.8853 20.4177 23.2823 20.9292 24.6463 20.9292C25.8746 20.9292 27.0681 20.501 27.973 19.6659C28.8371 20.9505 29.6469 22.5373 29.9744 24.3024C29.9821 24.3431 30.0054 24.376 30.017 24.4148C30.0325 24.4613 30.0461 24.5039 30.0674 24.5465C30.1023 24.6163 30.1449 24.6783 30.1953 24.7364C30.2205 24.7674 30.2418 24.7984 30.2708 24.8255C30.3367 24.8875 30.4123 24.9359 30.4936 24.9766C30.5169 24.9883 30.5363 25.0057 30.5614 25.0154C30.6758 25.0619 30.7978 25.0948 30.9257 25.0948C30.9838 25.0948 31.0439 25.089 31.1039 25.0793C31.1466 25.0716 31.1776 25.0464 31.2183 25.0328C31.2706 25.0154 31.3171 24.9979 31.3655 24.9747C31.4314 24.9418 31.4895 24.9011 31.5438 24.8546C31.5825 24.8216 31.6174 24.7868 31.6523 24.748C31.6988 24.6938 31.7356 24.6395 31.7704 24.5756C31.7976 24.5271 31.8189 24.4768 31.8363 24.4244C31.8576 24.3605 31.8693 24.2985 31.877 24.2326C31.8809 24.1978 31.8983 24.1687 31.8983 24.1319C31.9003 23.9808 31.9778 21.0222 34.7406 18.2826C35.1533 18.4531 35.6048 18.5674 36.0872 18.5964C36.1783 18.6023 36.2693 18.6061 36.3604 18.6061C37.488 18.6061 38.6079 18.1934 39.4042 17.4785C40.3458 16.6299 40.5996 15.5468 40.8438 14.5006C41.1014 13.3943 41.3456 12.3519 42.3899 11.4122C42.6689 11.1603 42.7154 10.7593 42.603 10.3989Z" fill="#F0A880"/>
                            </svg>
                            <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8603 18.0563C19.8603 16.0563 20.8603 8.55636 25.3603 3.55638C33.9103 -5.94368 47.1802 5.55627 41.8603 15.0563C38.3624 21.3025 53.3603 21.5563 50.3603 38.0563C47.3603 54.5563 28.8603 49.0563 25.3603 42.5563C21.8603 36.0563 16.3603 41.5563 5.86026 38.0563C-4.63974 34.5563 1.86026 20.5563 11.8603 18.0563Z" fill="#F4F4F4"/>
                            <path d="M47.0086 38.2829C47.0072 38.2783 47.0057 38.2737 47.0042 38.269L45.5898 33.9715V23.4476C45.5898 21.722 44.1859 20.3181 42.4602 20.3181H33.3247V25.4387C33.3247 28.3147 30.9849 30.6546 28.1088 30.6546H27.369V35.6875C27.369 37.4131 28.7729 38.817 30.4985 38.817H41.1156L43.8483 40.6355C44.2075 40.8786 44.6138 40.9998 45.0192 40.9998C45.4538 40.9998 45.8876 40.8606 46.2613 40.5832C46.9851 40.0461 47.2785 39.1432 47.0086 38.2829ZM39.9078 34.577C39.3688 34.7805 38.7669 34.5083 38.5635 33.9693L38.1092 32.7656H34.9337L34.4741 33.9723C34.3156 34.3884 33.9194 34.6444 33.499 34.6444C33.3756 34.6444 33.2501 34.6224 33.128 34.5759C32.5895 34.3708 32.3194 33.7681 32.5244 33.2297L35.3971 25.687C35.4001 25.6791 35.4032 25.6711 35.4064 25.6633C35.5941 25.2045 36.0356 24.9078 36.5312 24.9073C37.0296 24.9047 37.4689 25.2027 37.6575 25.6611C37.6614 25.6706 37.6651 25.68 37.6687 25.6896L40.5153 33.2326C40.7188 33.7716 40.4468 34.3735 39.9078 34.577Z" fill="#F0A880"/>
                            <path d="M35.7283 30.6794H37.3218L36.5287 28.5777L35.7283 30.6794Z" fill="#F0A880"/>
                            <path d="M28.1088 10H16.1471C14.4215 10 13.0176 11.4039 13.0176 13.1295V23.7232L11.6032 28.0211C11.6017 28.0257 11.6002 28.0305 11.5987 28.0351C11.3291 28.8951 11.6226 29.7978 12.3464 30.3348C12.7201 30.612 13.1538 30.7513 13.5883 30.7513C13.9936 30.7513 14.3997 30.6303 14.7587 30.3872L17.4917 28.5685H28.1087C29.8344 28.5685 31.2383 27.1646 31.2383 25.439V13.1296C31.2383 11.4039 29.8344 10 28.1088 10ZM26.4819 23.9186C26.2782 24.1223 26.0112 24.2241 25.7443 24.2241C25.4773 24.2241 25.2104 24.1223 25.0067 23.9186L24.5499 23.4617C23.7851 23.9625 22.8722 24.255 21.8918 24.255C19.2085 24.255 17.0255 22.0719 17.0255 19.3887C17.0255 16.7054 19.2085 14.5224 21.8918 14.5224C24.575 14.5224 26.758 16.7054 26.758 19.3887C26.758 20.3379 26.4839 21.2238 26.012 21.9733L26.482 22.4432C26.8893 22.8508 26.8893 23.5112 26.4819 23.9186Z" fill="#F0A880"/>
                            <path d="M21.8917 16.6089C20.3589 16.6089 19.1118 17.856 19.1118 19.3889C19.1118 20.9217 20.3589 22.1688 21.8917 22.1688C22.2924 22.1688 22.6732 22.0829 23.0177 21.9296L22.5606 21.4726C22.1532 21.0652 22.1532 20.4047 22.5606 19.9973C22.968 19.5899 23.6285 19.5899 24.0359 19.9973L24.4686 20.43C24.5991 20.1082 24.6716 19.7569 24.6716 19.3889C24.6716 17.856 23.4246 16.6089 21.8917 16.6089Z" fill="#F0A880"/>
                            </svg>
                            <svg width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8603 18.0563C19.8603 16.0563 20.8603 8.55636 25.3603 3.55638C33.9103 -5.94368 47.1802 5.55627 41.8603 15.0563C38.3624 21.3025 53.3603 21.5563 50.3603 38.0563C47.3603 54.5563 28.8603 49.0563 25.3603 42.5563C21.8603 36.0563 16.3603 41.5563 5.86026 38.0563C-4.63974 34.5563 1.86026 20.5563 11.8603 18.0563Z" fill="#F4F4F4"/>
                            <path d="M40.1414 33.6881H32.922C30.9315 33.6881 29.3132 35.3064 29.3132 37.2968V39.2656C29.3132 39.809 29.7542 40.25 30.2976 40.25H42.7657C43.3091 40.25 43.7501 39.809 43.7501 39.2656V37.2968C43.7501 35.3064 42.1318 33.6881 40.1414 33.6881Z" fill="#4D4D4D"/>
                            <path d="M23.0781 33.6881H15.8587C13.8683 33.6881 12.25 35.3064 12.25 37.2968V39.2656C12.25 39.809 12.691 40.25 13.2344 40.25H25.7025C26.2458 40.25 26.6868 39.809 26.6868 39.2656V37.2968C26.6868 35.3064 25.0685 33.6881 23.0781 33.6881Z" fill="#4D4D4D"/>
                            <path d="M36.5305 31.0618C38.7051 31.0618 40.468 29.2989 40.468 27.1243C40.468 24.9496 38.7051 23.1868 36.5305 23.1868C34.3559 23.1868 32.593 24.9496 32.593 27.1243C32.593 29.2989 34.3559 31.0618 36.5305 31.0618Z" fill="#4D4D4D"/>
                            <path d="M19.4695 31.0618C21.6441 31.0618 23.407 29.2989 23.407 27.1243C23.407 24.9496 21.6441 23.1868 19.4695 23.1868C17.2949 23.1868 15.532 24.9496 15.532 27.1243C15.532 29.2989 17.2949 31.0618 19.4695 31.0618Z" fill="#4D4D4D"/>
                            <path d="M30.6775 22.1001V23.0451C30.6775 23.8464 30.0219 24.502 29.2068 24.502H26.7912C26.0824 24.502 25.3205 23.9763 25.3205 22.8088V22.1001H30.6775Z" fill="#F0A880"/>
                            <path d="M33.9063 14.6188C33.9063 16.3906 33.1188 18.0444 31.7407 19.1607C31.1894 19.6076 30.8351 20.1844 30.7169 20.7888H25.297C25.2044 20.1982 24.8776 19.6469 24.3382 19.2276C22.8813 18.0857 22.0544 16.367 22.0938 14.5026C22.1588 11.3782 24.7713 8.79323 27.9075 8.75385C29.4963 8.71448 31.0182 9.3307 32.16 10.4608C33.2901 11.5613 33.9063 13.0438 33.9063 14.6188Z" fill="#F0A880"/>
                            </svg>
                        </div>
                        <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</p>
                        <div onClick={btnAdd} className='btn add_btn'><i className="bi bi-plus-lg"></i> criar tópico</div>
                    </div>

                    <div id='add_sucesso' className='criar_topico success hidden'>
                        <h5>Seu tópico foi enviado com sucesso! :D</h5>

                        <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
                        <a className='discover_link' href="www.google.com">Descubra outros trabalhos!</a>
                        <div onClick={btnAdd} className='btn add_btn'>criar novo tópico</div>
                    </div>

                    <div id='add_form' className='add_form hidden'>
                        <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>

                        <h5>Assunto</h5>
                        <input id='add_subject' type="text" placeholder='Defina um tópico sucinto para notificar os autores...' />

                        <h5>Conteúdo</h5>
                        <textarea id='add_text' cols="30" rows="10"></textarea>
                        <div className='text_controls'>
                            <div className='text_editor'>
                                <div className='editor_bold'>B</div>
                                <div className='editor_italic'>I</div>
                                <div onClick={addComment} className='btn enviar' >Enviar</div>
                            </div>
                        </div>
                    </div>

                </section>

                <div id='cards_wrapper'>

                    <div className='comment_card'>

                        <article className='comment_post'>
                            <h5>Assunto da pergunta aparece aqui</h5>
                            <p className='card_autor'>Carlos Henrique Santos</p>
                            <p className='card_text'>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                            <div className='option_area'>
                                <div className='card_options'><i className="bi bi-three-dots-vertical"></i></div>
                                <div className='btn like'><i className="bi bi-heart-fill"></i></div>
                                <p className='count_info'><span className='like_count'>1 like</span> <span className='respostas_count'>1 resposta</span></p>
                            </div>
                        </article>

                        <article className='comment_post comment_awnser_author'>
                            <p className='card_autor'>
                                Adriano da Silva
                                <span className='categoria_autor'><span>Autor</span>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6603 7.33594C20.8426 7.51823 20.9337 7.73958 20.9337 8C20.9337 8.26042 20.8426 8.48177 20.6603 8.66406L9.09778 20.2266C8.91549 20.4089 8.69413 20.5 8.43372 20.5C8.1733 20.5 7.95194 20.4089 7.76965 20.2266L1.20715 13.6641C1.02486 13.4818 0.933716 13.2604 0.933716 13C0.933716 12.7396 1.02486 12.5182 1.20715 12.3359L2.76965 10.7734C2.95194 10.5911 3.1733 10.5 3.43372 10.5C3.69413 10.5 3.91549 10.5911 4.09778 10.7734L8.43372 15.1484L17.8087 5.77344C17.965 5.59115 18.1733 5.5 18.4337 5.5C18.6941 5.5 18.9155 5.59115 19.0978 5.77344L20.6603 7.33594ZM8.00403 11.4766L3.62903 7.10156C3.31653 6.78906 3.31653 6.48958 3.62903 6.20312L5.38684 4.44531C5.51705 4.3151 5.66028 4.25 5.81653 4.25C5.99882 4.25 6.15507 4.3151 6.28528 4.44531L8.43372 6.59375L14.3712 0.695312C14.4754 0.565104 14.6056 0.5 14.7618 0.5C14.9441 0.5 15.1004 0.565104 15.2306 0.695312L16.9884 2.45312C17.3009 2.73958 17.3009 3.03906 16.9884 3.35156L8.8634 11.4766C8.75924 11.6068 8.61601 11.6719 8.43372 11.6719C8.25142 11.6719 8.10819 11.6068 8.00403 11.4766Z" fill="#ED7839"/>
                                    </svg>
                                </span>
                            </p>
                            <p className='card_text'>Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
                        </article>

                        <article className='comment_post comment_awnser'>
                            <p className='card_autor'>
                                Carlos Henrique Santos 
                            </p>
                            <p className='card_text'>Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
                        </article>

                        <article className='comment_post comment_awnser_author'>
                            <p className='card_autor'>
                                Camila Ferreira Andrade
                                <span className='categoria_autor'><span>Coautor</span>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6603 7.33594C20.8426 7.51823 20.9337 7.73958 20.9337 8C20.9337 8.26042 20.8426 8.48177 20.6603 8.66406L9.09778 20.2266C8.91549 20.4089 8.69413 20.5 8.43372 20.5C8.1733 20.5 7.95194 20.4089 7.76965 20.2266L1.20715 13.6641C1.02486 13.4818 0.933716 13.2604 0.933716 13C0.933716 12.7396 1.02486 12.5182 1.20715 12.3359L2.76965 10.7734C2.95194 10.5911 3.1733 10.5 3.43372 10.5C3.69413 10.5 3.91549 10.5911 4.09778 10.7734L8.43372 15.1484L17.8087 5.77344C17.965 5.59115 18.1733 5.5 18.4337 5.5C18.6941 5.5 18.9155 5.59115 19.0978 5.77344L20.6603 7.33594ZM8.00403 11.4766L3.62903 7.10156C3.31653 6.78906 3.31653 6.48958 3.62903 6.20312L5.38684 4.44531C5.51705 4.3151 5.66028 4.25 5.81653 4.25C5.99882 4.25 6.15507 4.3151 6.28528 4.44531L8.43372 6.59375L14.3712 0.695312C14.4754 0.565104 14.6056 0.5 14.7618 0.5C14.9441 0.5 15.1004 0.565104 15.2306 0.695312L16.9884 2.45312C17.3009 2.73958 17.3009 3.03906 16.9884 3.35156L8.8634 11.4766C8.75924 11.6068 8.61601 11.6719 8.43372 11.6719C8.25142 11.6719 8.10819 11.6068 8.00403 11.4766Z" fill="#ED7839"/>
                                    </svg>
                                </span>
                            </p>
                            <p className='card_text'>Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.

                            Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
                        </article>

                        <article className='comment_post comment_awnser_author'>
                            <p className='card_autor'>
                                Ana Carolina
                                <span className='categoria_autor'><span>Coautor</span>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6603 7.33594C20.8426 7.51823 20.9337 7.73958 20.9337 8C20.9337 8.26042 20.8426 8.48177 20.6603 8.66406L9.09778 20.2266C8.91549 20.4089 8.69413 20.5 8.43372 20.5C8.1733 20.5 7.95194 20.4089 7.76965 20.2266L1.20715 13.6641C1.02486 13.4818 0.933716 13.2604 0.933716 13C0.933716 12.7396 1.02486 12.5182 1.20715 12.3359L2.76965 10.7734C2.95194 10.5911 3.1733 10.5 3.43372 10.5C3.69413 10.5 3.91549 10.5911 4.09778 10.7734L8.43372 15.1484L17.8087 5.77344C17.965 5.59115 18.1733 5.5 18.4337 5.5C18.6941 5.5 18.9155 5.59115 19.0978 5.77344L20.6603 7.33594ZM8.00403 11.4766L3.62903 7.10156C3.31653 6.78906 3.31653 6.48958 3.62903 6.20312L5.38684 4.44531C5.51705 4.3151 5.66028 4.25 5.81653 4.25C5.99882 4.25 6.15507 4.3151 6.28528 4.44531L8.43372 6.59375L14.3712 0.695312C14.4754 0.565104 14.6056 0.5 14.7618 0.5C14.9441 0.5 15.1004 0.565104 15.2306 0.695312L16.9884 2.45312C17.3009 2.73958 17.3009 3.03906 16.9884 3.35156L8.8634 11.4766C8.75924 11.6068 8.61601 11.6719 8.43372 11.6719C8.25142 11.6719 8.10819 11.6068 8.00403 11.4766Z" fill="#ED7839"/>
                                    </svg>
                                </span>
                            </p>
                            <p className='card_text'>Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.</p>
                        </article>

                    </div>

                    <div className='comment_card'>

                        <article className='comment_post'>
                            <h5>Assunto da pergunta aparece aqui</h5>
                            <p className='card_autor'>Carlos Henrique Santos</p>
                            <p className='card_text'>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
                            <div className='option_area'>
                                <div className='card_options'><i className="bi bi-three-dots-vertical"></i></div>
                                <div className='btn like'><i className="bi bi-heart-fill"></i></div>
                                <p className='count_info'><span className='like_count'>1 like</span> <span className='respostas_count'>1 resposta</span></p>
                            </div>
                        </article>

                    </div>
                    
                </div>
            </div>
        </section>
    )
}