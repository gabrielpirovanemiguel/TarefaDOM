export const htmlModal = `<span class="topo-modal">
                    <h3>Adicionar item</h3>
                    <button class="btn-cancelar-modal">✕</button>
                </span>
                <form action="" class="form-adicionar">
                    <label for="nome-produto">NOME DO ITEM</label>
                    <input type="text" name="nome-produto" id="nome-produto" placeholder="Ex: Leite integral" required>
                    <label for="quantidade-produto">QUANTIDADE (OPCIONAL)</label>
                    <input type="text" name="quantidade-produto" id="quantidade-produto"
                        placeholder="Ex: 2 unidades, 500g…">
                    <div class="btn-modal">
                        <button class="btn-cancelar-modal" type="button">Cancelar</button>
                        <input type="submit" value="Adicionar" id="btn-adicionar-modal">
                    </div>
                </form>
`;

export const htmlListaVazia = `                    
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.5 0C1.1193 0 0 1.1193 0 2.5C0 3.8807 1.1193 5 2.5 5H5.54805L14.4586 40.6423C11.8319 41.809 10 44.4405 10 47.5C10 51.6423 13.3579 55 17.5 55C21.6421 55 25 51.6423 25 47.5C25 46.6235 24.8495 45.782 24.5732 45H35.4268C35.1505 45.782 35 46.6235 35 47.5C35 51.6423 38.3577 55 42.5 55C46.6423 55 50 51.6423 50 47.5C50 43.3577 46.6423 40 42.5 40H19.452L18.202 35H42.5C47.6605 35 50.7548 31.7398 52.4718 28.1398C54.1498 24.6218 54.7337 20.4173 54.9375 17.3592C55.221 13.1003 51.7007 10 47.8027 10H11.952L10.3988 3.78732C9.8423 1.56148 7.8424 0 5.54805 0H2.5ZM42.5 30H16.952L13.202 15H47.8027C49.1855 15 50.0158 16.0169 49.9485 17.027C49.7585 19.8805 49.2265 23.3295 47.959 25.9873C46.7305 28.5628 45.0503 30 42.5 30ZM42.5 49.9845C41.1278 49.9845 40.0155 48.8722 40.0155 47.5C40.0155 46.1278 41.1278 45.0155 42.5 45.0155C43.8722 45.0155 44.9845 46.1278 44.9845 47.5C44.9845 48.8722 43.8722 49.9845 42.5 49.9845ZM15.0154 47.5C15.0154 48.8722 16.1278 49.9845 17.5 49.9845C18.8722 49.9845 19.9846 48.8722 19.9846 47.5C19.9846 46.1278 18.8722 45.0155 17.5 45.0155C16.1278 45.0155 15.0154 46.1278 15.0154 47.5Z"
                            fill="white" />
                    </svg>
                    <h2>Nenhum item na lista ainda</h2>
                    <h3>Toque em "+ Adicionar item" para começar</h3>
`;


export const htmlModalEdicao = `
 <span class="topo-modal">
                        <h3>Editar lista</h3>
                        <button class="btn-fechar-modal-editar">✕</button>
                    </span>
                    <div class="produtos-edicao">
                        <div class="produto-edicao">
                            <span class="nome-edicao">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                        <path
                                            d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                                            fill="#1741C4" />
                                    </g>
                                </svg>
                                Maça
                            </span>
                            <span class="btn-deletar">
                                <span>3</span>
                                <button>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                                            fill="#E03336" />
                                        <g clip-path="url(#clip0_24_595)">
                                            <path
                                                d="M21.25 10.6667L20.5492 21.3448C20.4879 22.28 20.4572 22.7476 20.2584 23.1022C20.0833 23.4144 19.8192 23.6653 19.501 23.822C19.1395 24 18.6781 24 17.7554 24H14.2445C13.3219 24 12.8605 24 12.499 23.822C12.1808 23.6653 11.9167 23.4144 11.7417 23.1022C11.5428 22.7476 11.5121 22.28 11.4508 21.3448L10.75 10.6667M9 10.6667H23M19.5 10.6667L19.2632 9.94495C19.0337 9.24556 18.9189 8.89586 18.7061 8.63732C18.5182 8.409 18.2768 8.23228 18.0042 8.12336C17.6954 8 17.3326 8 16.6069 8H15.3931C14.6674 8 14.3046 8 13.9958 8.12336C13.7232 8.23228 13.4818 8.409 13.2939 8.63732C13.081 8.89586 12.9663 9.24556 12.7368 9.94495L12.5 10.6667M17.75 14.2222V20.4444M14.25 14.2222V20.4444"
                                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_595">
                                                <rect width="16" height="18" fill="white" transform="translate(8 7)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </span>
                        </div>
                        <div class="produto-edicao">
                            <span class="nome-edicao">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                        <path
                                            d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                                            fill="#1741C4" />
                                    </g>
                                </svg>
                                Maça
                            </span>
                            <span class="btn-deletar">
                                <span>3</span>
                                <button>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                                            fill="#E03336" />
                                        <g clip-path="url(#clip0_24_595)">
                                            <path
                                                d="M21.25 10.6667L20.5492 21.3448C20.4879 22.28 20.4572 22.7476 20.2584 23.1022C20.0833 23.4144 19.8192 23.6653 19.501 23.822C19.1395 24 18.6781 24 17.7554 24H14.2445C13.3219 24 12.8605 24 12.499 23.822C12.1808 23.6653 11.9167 23.4144 11.7417 23.1022C11.5428 22.7476 11.5121 22.28 11.4508 21.3448L10.75 10.6667M9 10.6667H23M19.5 10.6667L19.2632 9.94495C19.0337 9.24556 18.9189 8.89586 18.7061 8.63732C18.5182 8.409 18.2768 8.23228 18.0042 8.12336C17.6954 8 17.3326 8 16.6069 8H15.3931C14.6674 8 14.3046 8 13.9958 8.12336C13.7232 8.23228 13.4818 8.409 13.2939 8.63732C13.081 8.89586 12.9663 9.24556 12.7368 9.94495L12.5 10.6667M17.75 14.2222V20.4444M14.25 14.2222V20.4444"
                                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_595">
                                                <rect width="16" height="18" fill="white" transform="translate(8 7)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>

                    <button class="btn-fechar-modal-editar" id="btn-concluir">Concluir</button>
`
