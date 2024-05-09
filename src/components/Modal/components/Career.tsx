import React from "react";
import icons from "../../Icons";

const Career: React.FC = () => {
  return (
    <div className="app-modal_content__career">
      <div className="app-modal_content__career___experience">
        <div className="app-modal_content__career__logo">
          <img src={icons.runtalent} />
        </div>
        <div className="app-modal_content__career__company">
          <b>Empresa: </b>Runtalent
        </div>
        <div className="app-modal_content__career__role">
          <b>Função: </b>Front End Developer
        </div>
        <div className="app-modal_content__career__role">
          <b>Período: </b>desde jul 2023
        </div>
        <div className="app-modal_content__career__role">
          <b>Stack: </b>React/TypeScript e Node
        </div>
        <div className="app-modal_content__career__text">
          Atuação como desenvolvedor front-end dentro do ecossistema React
          alocado em um cliente de varejo, responsável pela loja virtual e
          também por aplicações dentro do aplicativo.
        </div>
      </div>
      <div className="app-modal_content__career___experience">
        <div className="app-modal_content__career__logo">
          <img src={icons.itau} />
        </div>
        <div className="app-modal_content__career__company">
          <b>Empresa: </b>Itaú Unibanco
        </div>

        <div className="app-modal_content__career__role">
          <b>Função: </b>Front End Developer
        </div>
        <div className="app-modal_content__career__role">
          <b>Período: </b>dez 2021 até fev 2023
        </div>
        <div className="app-modal_content__career__role">
          <b>Stack: </b>React/Angular e Java
        </div>
        <div className="app-modal_content__career__text">
          Responsavel pelo desenvolvimento de componentes no front-end em
          Angular e em ReactJS, além de integra-los com BFF's construidos em
          Java. Fui o ponto focal do time de desenvolvimento nos assuntos
          relacionados a acessibilidade dentro das aplicacoes.
        </div>
      </div>
      <div className="app-modal_content__career___experience">
        <div className="app-modal_content__career__logo">
          <img src={icons.acct} />
        </div>
        <div className="app-modal_content__career__company">
          <b>Empresa: </b> ACCT
        </div>

        <div className="app-modal_content__career__role">
          <b>Função: </b>Front End Developer
        </div>
        <div className="app-modal_content__career__role">
          <b>Período: </b>set 2019 até nov 2021
        </div>
        <div className="app-modal_content__career__role">
          <b>Stack: </b>React/TypeScript
        </div>

        <div className="app-modal_content__career__text">
          Além de trabalhar com uma implementação do zero na VTEX IO, pude
          desenvolver componentes customizados através do React JS para atender
          os requisitos trazidos pelo cliente. Foram dois anos trabalhando de
          acordo com a metodologia SCRUM, participando e resolvendo problemas
          diretamente com o cliente.
        </div>
      </div>
    </div>
  );
};

export default Career;
