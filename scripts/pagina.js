/* Monta as partes repetidas da página e cuida das interações. */
(function () {
  const D = window.DADOS;
  const $ = (sel, raiz = document) => raiz.querySelector(sel);
  const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];
  const semMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cor = (nome) => D.cores[nome];
  const vars = (nome) => `--c:${cor(nome).c};--d:${cor(nome).d};--l:${cor(nome).l}`;
  const etiqueta = (nome) => `<span class="etiqueta-pasta" style="--c:${cor(nome).c}">${nome}</span>`;

  // Botões que levam ao app
  $$("[data-app]").forEach((a) => (a.href = window.ENDERECO_DO_APP));

  // Barra do topo ganha sombra quando a página rola
  const topo = $("[data-topo]");
  const marcaTopo = () => topo.classList.toggle("rolou", scrollY > 8);
  addEventListener("scroll", marcaTopo, { passive: true });
  marcaTopo();

  // Faixa corrida (lista duplicada para dar a volta sem emenda)
  const coresFaixa = Object.values(D.cores).map((x) => x.c);
  const itens = (oculto) => D.tarefasInvisiveis
    .map((t, i) => `<li${oculto ? ' aria-hidden="true"' : ""} style="--cor:${coresFaixa[i % coresFaixa.length]}">${t}</li>`)
    .join("");
  $("[data-faixa]").innerHTML = itens(false) + itens(true);

  // Estante: as cinco pastas de vidro funcionam como abas
  const estante = $("[data-abas]");
  const painel = $("[data-painel]");
  estante.innerHTML = D.pastas
    .map(
      (p, i) => `
      <button class="pasta3d" role="tab" id="aba-${p.id}" aria-controls="painel-pasta" style="${vars(p.nome)}"
        aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-i="${i}">
        <span class="p-sombra" aria-hidden="true"></span>
        <span class="p-fundo" aria-hidden="true"></span>
        <span class="p-papel" aria-hidden="true"></span>
        <span class="p-marcador" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${cor(p.nome).icone}</svg></i></span>
        <span class="p-frente"><span class="p-nome">${p.nome}</span><span class="p-sub">${p.sub}</span></span>
      </button>`
    )
    .join("");
  painel.id = "painel-pasta";

  const desenhaPainel = (p) => {
    painel.setAttribute("aria-labelledby", `aba-${p.id}`);
    painel.setAttribute("style", vars(p.nome));
    painel.innerHTML = `
      <div class="painel-texto">
        ${etiqueta(p.nome)}
        <h3>${p.sub}</h3>
        <p class="painel-frase">${p.frase}</p>
        <ul>${p.itens.map((t) => `<li>${t}</li>`).join("")}</ul>
      </div>
      <div class="mini" aria-hidden="true">${p.mini}</div>`;
  };

  const abreAba = (i, foco) => {
    $$(".pasta3d", estante).forEach((b, j) => {
      b.setAttribute("aria-selected", String(i === j));
      b.tabIndex = i === j ? 0 : -1;
      if (i === j && foco) b.focus();
    });
    if (semMovimento) return desenhaPainel(D.pastas[i]);
    painel.classList.add("trocando");
    setTimeout(() => {
      desenhaPainel(D.pastas[i]);
      requestAnimationFrame(() => painel.classList.remove("trocando"));
    }, 180);
  };

  estante.addEventListener("click", (e) => {
    const b = e.target.closest(".pasta3d");
    if (b && b.getAttribute("aria-selected") !== "true") abreAba(+b.dataset.i);
  });
  estante.addEventListener("keydown", (e) => {
    const atual = $$(".pasta3d", estante).findIndex((b) => b.getAttribute("aria-selected") === "true");
    const total = D.pastas.length;
    const mapa = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (e.key in mapa) { e.preventDefault(); abreAba((atual + mapa[e.key] + total) % total, true); }
    if (e.key === "Home") { e.preventDefault(); abreAba(0, true); }
    if (e.key === "End") { e.preventDefault(); abreAba(total - 1, true); }
  });
  desenhaPainel(D.pastas[0]);

  // Um dia comum
  $("[data-dia]").innerHTML = D.dia
    .map(
      (m) => `
      <li class="momento revela">
        <p class="momento-hora"><time>${m.hora}</time></p>
        <div>
          ${etiqueta(m.pasta)}
          <h3 class="momento-titulo">${m.titulo}</h3>
          <p class="momento-texto">${m.texto}</p>
        </div>
      </li>`
    )
    .join("");

  // Quadro de escolhas, com "gostei desta" de verdade
  const quadro = $("[data-escolhas]");
  quadro.innerHTML = D.escolhas
    .map(
      (o, i) => `
      <article class="opcao">
        <span class="opcao-num">0${i + 1}</span>
        <h4 class="opcao-nome">${o.nome}</h4>
        <button type="button" class="opcao-voto" aria-pressed="false" data-i="${i}">Gostei desta <span aria-hidden="true">→</span></button>
        <p class="opcao-quem" data-quem>${o.quem}</p>
        <dl class="opcao-criterios">
          ${Object.entries(o.criterios)
            .map(([k, v]) => `<div><dt>${k}</dt><dd aria-label="${k}: ${v} de 100"><span style="width:${v}%"></span></dd></div>`)
            .join("")}
        </dl>
      </article>`
    )
    .join("");
  quadro.addEventListener("click", (e) => {
    const b = e.target.closest(".opcao-voto");
    if (!b) return;
    const marcado = b.getAttribute("aria-pressed") !== "true";
    b.setAttribute("aria-pressed", String(marcado));
    b.innerHTML = marcado ? 'Você gostou <span aria-hidden="true">✓</span>' : 'Gostei desta <span aria-hidden="true">→</span>';
    const original = D.escolhas[+b.dataset.i].quem;
    $("[data-quem]", b.closest(".opcao")).textContent = marcado
      ? (original.startsWith("Ninguém") ? "Você opinou" : "Você e Lucas opinaram")
      : original;
  });

  // Casa x Minha visão
  const lista = $("[data-visoes-lista]");
  const mostraVisao = (v) => {
    lista.innerHTML = D.visoes[v].map((x) => `<li><span>${x.nome}</span><small>${x.meta}</small></li>`).join("");
    $$("[data-visao]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.visao === v)));
  };
  $$("[data-visao]").forEach((b) => b.addEventListener("click", () => mostraVisao(b.dataset.visao)));
  mostraVisao("casa");

  // Perguntas
  $("[data-faq]").innerHTML = D.perguntas
    .map(
      (q, i) => `
      <details${i === 0 ? " open" : ""}>
        <summary><span>${q.p}</span><span class="mais" aria-hidden="true">+</span></summary>
        <p>${q.r}</p>
      </details>`
    )
    .join("");

  // Entrada ao rolar
  const revelas = $$(".revela");
  if (semMovimento || !("IntersectionObserver" in window)) {
    revelas.forEach((el) => el.classList.add("visivel"));
  } else {
    const olho = new IntersectionObserver(
      (entradas) => entradas.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("visivel"); olho.unobserve(en.target); }
      }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    revelas.forEach((el) => olho.observe(el));
  }

  // Logo e avisos da capa flutuam de leve com o rolar
  if (!semMovimento) {
    const objetos = $$("[data-flutua]");
    let pedido = 0;
    const flutua = () => {
      pedido = 0;
      const y = Math.min(scrollY, 900);
      objetos.forEach((o) => o.style.setProperty("--desloca", `${(y * +o.dataset.flutua).toFixed(1)}px`));
    };
    addEventListener("scroll", () => { if (!pedido) pedido = requestAnimationFrame(flutua); }, { passive: true });
  }
})();
