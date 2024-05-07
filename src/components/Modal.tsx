import React from "react";
interface Props {
  closeModal: () => void;
}
const Modal: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="app-modal">
      <div className="app-modal_header">
        <div className="app-modal_header__close">
          {" "}
          <button onClick={closeModal}>X</button>{" "}
        </div>
        <div className="app-modal_header__title"> Modal </div>
      </div>
      <div className="app-modal_content">
        <div className="app-modal_content__info">
          06 de maio de 2024 | 3 min de leitura{" "}
        </div>
        <div className="app-modal_content__title">
          <h1>A importância de um blog pessoal para desenvolvedores</h1>
        </div>
        <div className="app-modal_content__post">
          {" "}
          Ter um blog pessoal como desenvolvedor web é crucial para estabelecer
          sua marca pessoal, demonstrar conhecimento e construir uma rede
          profissional. Escrever regularmente ajuda a aprimorar suas habilidades
          de comunicação e documenta seu progresso ao longo do tempo. Além
          disso, é uma maneira eficaz de compartilhar seu conhecimento e
          experiência com outros profissionais da indústria, aumentando sua
          visibilidade e oportunidades de networking. Em resumo, um blog pessoal
          é uma ferramenta poderosa para impulsionar sua carreira como
          desenvolvedor web.
        </div>
      </div>
    </div>
  );
};

export default Modal;
