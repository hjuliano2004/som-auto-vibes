import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const WHATSAPP = "https://wa.me/5547740051110?text=" + encodeURIComponent("me interessei pelos serviços");

const SITE_HTML = `
<header class="js-header">
  <div class="container bar">
    <a href="#home" class="logo"><span class="dot"></span>JÚNIOR SOM</a>
    <nav class="nav">
      <ul>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#produtos">Produtos</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
    <button class="menu-btn" aria-label="Abrir menu">☰</button>
  </div>
</header>

<section id="home" class="hero">
  <div class="container">
    <div class="kicker">Som automotivo de verdade</div>
    <h1>SENTE A PRESSÃO</h1>
    <p>Da escolha do equipamento à instalação completa — entregamos o som que faz seu carro vibrar.</p>
    <div class="cta-row">
      <a class="btn btn-primary" href="${WHATSAPP}" target="_blank" rel="noopener">Fale no WhatsApp</a>
      <a class="btn btn-ghost" href="#produtos">Ver produtos</a>
    </div>
    <div class="eq" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span>
    </div>
  </div>
</section>

<section id="sobre" class="sobre">
  <div class="container">
    <div class="sobre-grid">
      <div class="sobre-text reveal">
        <div class="eyebrow">Sobre nós</div>
        <h2>Paixão por som,<br/>experiência de sobra.</h2>
        <p>A Júnior Som nasceu da paixão pelo som de qualidade e pela cultura automotiva. Há anos transformamos carros comuns em máquinas de pressão, com atendimento próximo, honesto e técnico.</p>
        <p>Trabalhamos com as melhores marcas do mercado e cuidamos de cada detalhe — do projeto à última conexão.</p>
        <div class="stats">
          <div class="stat"><strong>+10</strong><span>anos de mercado</span></div>
          <div class="stat"><strong>+1.5k</strong><span>projetos entregues</span></div>
          <div class="stat"><strong>100%</strong><span>clientes satisfeitos</span></div>
        </div>
      </div>
      <div class="sobre-visual reveal" aria-hidden="true"></div>
    </div>
  </div>
</section>

<section id="produtos">
  <div class="container">
    <div class="section-head reveal">
      <div class="eyebrow">Produtos</div>
      <h2>Equipamentos que entregam</h2>
      <p>Aparelhos, caixas, rádios, amplificadores e acessórios das melhores marcas — selecionados pra cada projeto.</p>
    </div>
    <div class="produtos-grid">
      <article class="produto reveal" data-zoom>
        <div class="img"><img src="/images/radio.jpg" alt="Rádio multimídia" loading="lazy"/></div>
        <div class="body"><h3>Multimídias</h3><p>Telas touchscreen com Android Auto e CarPlay.</p></div>
      </article>
      <article class="produto reveal" data-zoom>
        <div class="img"><img src="/images/amp.jpg" alt="Amplificador" loading="lazy"/></div>
        <div class="body"><h3>Amplificadores</h3><p>Potência limpa pra mover qualquer subwoofer.</p></div>
      </article>
      <article class="produto reveal" data-zoom>
        <div class="img"><img src="/images/caixa.jpg" alt="Caixa de som" loading="lazy"/></div>
        <div class="body"><h3>Caixas & Subwoofers</h3><p>Projetadas pra pressão e definição máxima.</p></div>
      </article>
      <article class="produto reveal" data-zoom>
        <div class="img"><img src="/images/speakers.jpg" alt="Alto-falantes" loading="lazy"/></div>
        <div class="body"><h3>Alto-falantes</h3><p>Médios, tweeters e kits 2 vias de alto desempenho.</p></div>
      </article>
    </div>
  </div>
</section>

<section id="servicos" class="servicos">
  <div class="container">
    <div class="section-head reveal">
      <div class="eyebrow">Serviços</div>
      <h2>Da venda à instalação completa</h2>
      <p>Cuidamos de cada etapa pra você só apertar o play.</p>
    </div>
    <div class="servicos-grid">
      <div class="servico reveal">
        <div class="icon">🔧</div>
        <h3>Instalação Completa</h3>
        <p>Projeto elétrico, isolamento acústico e instalação profissional com garantia.</p>
      </div>
      <div class="servico reveal">
        <div class="icon">🎨</div>
        <h3>Personalização</h3>
        <p>Caixas em fibra, iluminação LED e acabamentos sob medida pro seu estilo.</p>
      </div>
      <div class="servico reveal">
        <div class="icon">🛠️</div>
        <h3>Suporte Técnico</h3>
        <p>Manutenção, ajustes e troca de peças com atendimento ágil e direto.</p>
      </div>
      <div class="servico reveal">
        <div class="icon">⚡</div>
        <h3>Projetos SPL</h3>
        <p>Montagens de alta pressão sonora pra competições e som de rua.</p>
      </div>
    </div>
  </div>
</section>

<section id="portfolio">
  <div class="container">
    <div class="section-head reveal">
      <div class="eyebrow">Portfólio</div>
      <h2>Projetos que falam por si</h2>
      <p>Alguns dos carros que passaram pela bancada da Júnior Som.</p>
    </div>
    <div class="portfolio-grid">
      <div class="port-item reveal" data-zoom><img src="/images/portfolio1.jpg" alt="Projeto 1" loading="lazy"/></div>
      <div class="port-item reveal" data-zoom><img src="/images/portfolio2.jpg" alt="Projeto 2" loading="lazy"/></div>
      <div class="port-item reveal" data-zoom><img src="/images/portfolio3.jpg" alt="Projeto 3" loading="lazy"/></div>
      <div class="port-item reveal" data-zoom><img src="/images/hero.jpg" alt="Projeto 4" loading="lazy"/></div>
      <div class="port-item reveal" data-zoom><img src="/images/caixa.jpg" alt="Projeto 5" loading="lazy"/></div>
      <div class="port-item reveal" data-zoom><img src="/images/amp.jpg" alt="Projeto 6" loading="lazy"/></div>
    </div>
  </div>
</section>

<section id="contato" class="contato">
  <div class="container">
    <div class="reveal">
      <div class="eyebrow">Contato</div>
      <h2>BORA DAR PRESSÃO<br/>NO SEU CARRO?</h2>
      <p>Chama no WhatsApp — atendimento direto, orçamento sem enrolação.</p>
      <a class="whats-btn" href="${WHATSAPP}" target="_blank" rel="noopener">
        <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.2 7.9L0 32l8.4-2.7C10.7 30.4 13.3 31 16 31c8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.3c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-5 1.6 1.6-4.9-.3-.5C3.6 20.7 3 18.4 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.8-13 12.8zm7.5-9.7c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-.9.2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.5-.7.2-.2.2-.4.3-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-1 .4-.3.4-1.3 1.3-1.3 3.2 0 1.9 1.4 3.7 1.5 3.9.2.2 2.7 4.2 6.6 5.9.9.4 1.7.6 2.2.8.9.3 1.8.3 2.5.2.8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z"/></svg>
        47 74005110
      </a>
      <div class="socials">
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">📷</a>
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">📘</a>
        <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok">🎵</a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>Júnior Som</h4>
        <p>Som automotivo, instalação e personalização. Qualidade e pressão pra você sentir cada batida.</p>
      </div>
      <div>
        <h4>Contato</h4>
        <p>📞 (47) 74005110</p>
        <p>📍 Rua do Som, 123 — Centro</p>
      </div>
      <div>
        <h4>Links</h4>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
        </ul>
      </div>
    </div>
    <div class="copy">© ${new Date().getFullYear()} Júnior Som — Todos os direitos reservados.</div>
  </div>
</footer>

<a class="whats-float" href="${WHATSAPP}" target="_blank" rel="noopener" aria-label="WhatsApp">
  <svg viewBox="0 0 32 32"><path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.2 7.9L0 32l8.4-2.7C10.7 30.4 13.3 31 16 31c8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm7.5 19.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-.9.2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.5-.7.2-.2.2-.4.3-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-1 .4-.3.4-1.3 1.3-1.3 3.2 0 1.9 1.4 3.7 1.5 3.9.2.2 2.7 4.2 6.6 5.9.9.4 1.7.6 2.2.8.9.3 1.8.3 2.5.2.8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z"/></svg>
</a>
<button class="top-btn" aria-label="Voltar ao topo">↑</button>

<div class="lightbox" aria-hidden="true"><button class="close" aria-label="Fechar">×</button><img alt=""/></div>
`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Júnior Som — Som Automotivo, Instalação e Personalização" },
      { name: "description", content: "Júnior Som: venda, instalação e personalização de som automotivo. Sente a pressão." },
      { property: "og:title", content: "Júnior Som — Sente a pressão" },
      { property: "og:description", content: "Som automotivo, instalação completa, personalização e suporte técnico." },
      { property: "og:image", content: "/images/hero.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;700;800;900&display=swap" },
      { rel: "stylesheet", href: "/site.css" },
    ],
    scripts: [{ src: "/site.js", defer: true }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Re-init the vanilla script after client-side hydration in case it ran before nodes mounted
    const s = document.createElement("script");
    s.src = "/site.js";
    s.async = true;
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: SITE_HTML }} />;
}
