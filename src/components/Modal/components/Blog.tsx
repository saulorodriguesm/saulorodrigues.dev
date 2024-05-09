import React from "react";

const Blog = () => {
  return (
    <div style={{ height: "100%" }}>
      <div className="app-modal_content__posts">
        <div className="app-modal_content__list">
          <div className="app-modal_content__list___title">Meus posts</div>
          <span>
            &gt; A importancia de um blog pessoal para desenvolvedores
          </span>
        </div>
        <div className="app-modal_content__post">
          <div className="app-modal_content__info">
            06 de maio de 2024 | 3 min de leitura
          </div>
          <div className="app-modal_content__title">
            <h1>A importância de um blog pessoal para desenvolvedores</h1>
          </div>
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

export default Blog;
