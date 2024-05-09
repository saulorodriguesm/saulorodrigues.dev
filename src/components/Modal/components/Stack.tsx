import React from "react";
import icons from "../../Icons";

interface Props {
  language: string;
}

const Stack: React.FC<Props> = ({ language }) => {
  return (
    <div className="app-modal_content__stacks">
      <div className="app-modal_content__stack">
        <div className="app-modal_content__stack__logo">
          <img alt="Logotipo da empresa VTEX." src={icons.vtex} />
        </div>
        <div className="app-modal_content__stack__name">
          <b>VTEX</b>
        </div>
        <div className="app-modal_content__stack__project">
          Projeto:
          <a href="https://github.com/vtex-sites/carrefourbrfood.store">
            Carrefour Food
          </a>
        </div>
      </div>
      <div className="app-modal_content__stack">
        <div className="app-modal_content__stack__logo">
          <img alt="Logotipo do framework ReactJS." src={icons.react} />
        </div>

        <div className="app-modal_content__stack__name">
          <b> React</b>
        </div>
        <div className="app-modal_content__stack__project">
          Projeto:
          <a href="https://github.com/saulorodriguesm/desafio-itau">
            Desafio Seguros
          </a>
        </div>
      </div>
      <div className="app-modal_content__stack">
        <div className="app-modal_content__stack__logo">
          <img alt="Logotipo do framework Angular." src={icons.angular} />
        </div>
        <div className="app-modal_content__stack__name">
          <b>Angular</b>
        </div>
        <div className="app-modal_content__stack__project">
          Projeto:
          <a href="https://github.com/saulorodriguesm/desafio-picpay">
            Desafio Picpay
          </a>
        </div>
      </div>
      <div className="app-modal_content__stack">
        <div className="app-modal_content__stack__logo">
          <img alt="Logotipo da linguagem TypeScript." src={icons.ts} />
        </div>
        <div className="app-modal_content__stack__name">
          <b>TypeScript</b>
        </div>
        <div className="app-modal_content__stack__project">
          Projeto:
          <a href="https://github.com/saulorodriguesm/desafio-corebiz">
            Desafio Corebiz
          </a>
        </div>
      </div>
      <div className="app-modal_content__stack___footer">
        {language === "pt"
          ? "Confira mais projetos com diversas tecnologias"
          : "Check out more projects with different technologies"}
        : <a href="https://github.com/saulorodriguesm/"> Github</a>
      </div>
    </div>
  );
};

export default Stack;
