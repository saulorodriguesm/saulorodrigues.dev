import React from "react";
import icons from "../../Icons";

const Stack: React.FC = () => {
  return (
    <div className="app-modal_content__stacks">
      <div className="app-modal_content__stack">
        <div className="app-modal_content__stack__logo">
          <img src={icons.vtex} />
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
          <img src={icons.react} />
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
          <img src={icons.angular} />
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
          <img src={icons.ts} />
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
        Confira mais projetos com diversas tecnologias:
        <a href="https://github.com/saulorodriguesm/"> Meu Github</a>
      </div>
    </div>
  );
};

export default Stack;
