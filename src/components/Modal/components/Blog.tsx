import React from "react";

interface Props {
  language: string;
}

const Blog: React.FC<Props> = ({ language }) => {
  return (
    <div style={{ height: "100%" }}>
      <div className="app-modal_content__posts">
        <div className="app-modal_content__list">
          <div className="app-modal_content__list___title">
            {" "}
            {language === "pt" ? "Meus Posts" : "My Posts"}
          </div>
          <span>
            &gt;{" "}
            {language === "pt"
              ? "A importancia de um blog pessoal para desenvolvedores"
              : "The importance of a personal blog for developers"}
          </span>
        </div>
        <div className="app-modal_content__post">
          <div className="app-modal_content__info">
            {language === "pt"
              ? "06 de maio de 2024 | 3 min de leitura"
              : "May 6, 2024 | 3 min read"}
          </div>
          <div className="app-modal_content__title">
            <h1>
              {language === "pt"
                ? "A importancia de um blog pessoal para desenvolvedores"
                : "The importance of a personal blog for developers"}
            </h1>
          </div>
          {language === "pt"
            ? "Ter um blog pessoal como desenvolvedor web é crucial para estabelecer sua marca pessoal, demonstrar conhecimento e construir uma rede profissional. Escrever regularmente ajuda a aprimorar suas habilidades de comunicação e documenta seu progresso ao longo do tempo. Além disso, é uma maneira eficaz de compartilhar seu conhecimento e experiência com outros profissionais da indústria, aumentando sua visibilidade e oportunidades de networking. Em resumo, um blog pessoal é uma ferramenta poderosa para impulsionar sua carreira como desenvolvedor web."
            : "Having a personal blog as a web developer is crucial to establishing your personal brand, demonstrate knowledge and build a network professional. Writing regularly helps hone your skills communication and documents your progress over time. In addition Furthermore, it is an effective way to share your knowledge and experience with other industry professionals, increasing your visibility and networking opportunities. In short, a personal blog is a powerful tool to boost your career as Web developer."}
        </div>
      </div>
    </div>
  );
};

export default Blog;
