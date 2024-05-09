import React from "react";
import icons from "../../Icons";

interface Props {
  language: string;
}

const Career: React.FC<Props> = ({ language }) => {
  return (
    <div className="app-modal_content__career">
      <div className="app-modal_content__career___experience">
        <div className="app-modal_content__career__logo">
          <img alt="Logotipo da empresa Runtalent." src={icons.runtalent} />
        </div>
        <div className="app-modal_content__career__company">
          <b> {language === "pt" ? "Empresa" : "Company"}: </b>Runtalent
        </div>
        <div className="app-modal_content__career__role">
          <b>{language === "pt" ? "Função" : "Role"}: </b>
          Front End Developer
        </div>
        <div className="app-modal_content__career__role">
          <b>{language === "pt" ? "Período" : "When"}: </b>
          desde jul 2023
        </div>
        <div className="app-modal_content__career__role">
          <b>Stack: </b>React/TypeScript e Node
        </div>
        <div className="app-modal_content__career__text">
          {language === "pt"
            ? "Atuação como desenvolvedor front-end dentro do ecossistema React alocado em um cliente de varejo, responsável pela loja virtual e também por aplicações dentro do aplicativo."
            : "Acting as a front-end developer within the React ecosystem allocated to a retail client, responsible for the virtual store and also for applications within the application."}
        </div>
      </div>
      <div className="app-modal_content__career___experience">
        <div className="app-modal_content__career__logo">
          <img alt="Logotipo da empresa Itaú." src={icons.itau} />
        </div>
        <div className="app-modal_content__career__company">
          <b>{language === "pt" ? "Empresa" : "Company"}: </b>Itaú Unibanco
        </div>

        <div className="app-modal_content__career__role">
          <b>{language === "pt" ? "Função" : "Role"}: </b>Front End Developer
        </div>
        <div className="app-modal_content__career__role">
          <b>{language === "pt" ? "Período" : "When"}: </b>dez 2021 até fev 2023
        </div>
        <div className="app-modal_content__career__role">
          <b>Stack: </b>React/Angular e Java
        </div>
        <div className="app-modal_content__career__text">
          {language === "pt"
            ? "Responsavel pelo desenvolvimento de componentes no front-end em Angular e em ReactJS, além de integra-los com BFF's construidos em Java. Fui o ponto focal do time de desenvolvimento nos assuntos relacionados a acessibilidade dentro das aplicacoes."
            : "Responsible for developing front-end components in Angular and ReactJS, in addition to integrating them with BFF's built in Java. I was the focal point of the development team on issues related to accessibility within applications."}
        </div>
      </div>
      <div className="app-modal_content__career___experience">
        <div className="app-modal_content__career__logo">
          <img alt="Logotipo da empresa ACCT." src={icons.acct} />
        </div>
        <div className="app-modal_content__career__company">
          <b>{language === "pt" ? "Empresa" : "Company"}: </b> ACCT
        </div>

        <div className="app-modal_content__career__role">
          <b>{language === "pt" ? "Função" : "Role"}: </b>Front End Developer
        </div>
        <div className="app-modal_content__career__role">
          <b>{language === "pt" ? "Período" : "When"}: </b>set 2019 até nov 2021
        </div>
        <div className="app-modal_content__career__role">
          <b>Stack: </b>React/TypeScript
        </div>

        <div className="app-modal_content__career__text">
          {language === "pt"
            ? "Além de trabalhar com uma implementação do zero na VTEX IO, pude desenvolver componentes customizados através do React JS para atender os requisitos trazidos pelo cliente. Foram dois anos trabalhando de acordo com a metodologia SCRUM, participando e resolvendo problemas diretamente com o cliente."
            : "In addition to working with an implementation from scratch at VTEX IO, I was able to develop customized components using React JS to meet the requirements brought by the client. It was two years working according to the SCRUM methodology, participating and solving problems directly with the client."}
        </div>
      </div>
    </div>
  );
};

export default Career;
