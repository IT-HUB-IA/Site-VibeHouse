/* Conteúdo da página. Troque textos aqui, sem mexer no HTML. */

// Para onde vão os botões "Criar conta grátis" e "Entrar".
// Hoje aponta para a prévia local do app. Troque pelo endereço público quando houver.
window.ENDERECO_DO_APP = "http://127.0.0.1:4317/";

window.DADOS = {
  // Cor e ícone de cada pasta, iguais aos do app
  cores: {
    Finanças: { c: "#278366", d: "#14533F", l: "#B9E6D6", icone: '<path d="M3 7h18v13H3zM3 7V4h14v3M16 12h5v4h-5z"/>' },
    Planos:   { c: "#7250BC", d: "#432778", l: "#D5C2FA", icone: '<path d="M3 7V4h6l3 3h9v14H3zM8 13h8M8 17h5"/>' },
    Mercado:  { c: "#B68A16", d: "#76580C", l: "#F4E5A9", icone: '<path d="M2 3h3l2 12h12l2-8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>' },
    Rotina:   { c: "#757585", d: "#474755", l: "#DFDFEC", icone: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 2v6M16 2v6M8 15l3 3 5-5"/>' },
    Nós:      { c: "#C0782C", d: "#7B4B1B", l: "#F9DDB5", icone: '<path d="M20 5c-3-3-6-1-8 1-2-2-5-4-8-1-4 5 2 10 8 15 6-5 12-10 8-15Z"/>' },
  },

  // 01 · O que ninguém vê
  tarefasInvisiveis: [
    "a conta de luz",
    "o remédio do cachorro",
    "a reunião da escola",
    "o presente da sogra",
    "o gás no fim",
    "a revisão do carro",
    "o boleto do condomínio",
    "o café que acabou",
    "a vacina da Mel",
    "a parcela do sofá",
  ],

  // 02 · Cinco pastas
  pastas: [
    {
      id: "financas",
      nome: "Finanças",
      sub: "Contas, rendas e metas",
      frase: "Saibam o que vence nos próximos dias e quanto ainda entra no mês, sem planilha.",
      itens: ["Contas com vencimento e responsável", "Rendas previstas e recebidas", "Metas e reservas com contribuições"],
      mini: `
        <div class="mini-cabeca"><span>Próximos 7 dias</span><span>Casa</span></div>
        <div class="mini-cartao"><div class="cresce"><strong>Conta de luz</strong><small>Ana paga</small></div><span class="mini-etiqueta atencao">sexta</span></div>
        <div class="mini-cartao"><div class="cresce"><strong>Internet</strong><small>Lucas pagou</small></div><span class="mini-etiqueta">paga</span></div>
        <div class="mini-cartao"><div class="cresce"><strong>Reserva da viagem</strong><small>R$ 1.200 de R$ 3.000</small><div class="mini-barra"><span style="width:40%"></span></div></div></div>`,
    },
    {
      id: "planos",
      nome: "Planos",
      sub: "Pesquisas e projetos",
      frase: "Mudança, reforma, viagem: as opções, os critérios e a opinião de cada um no mesmo lugar.",
      itens: ["Opções lado a lado", "Critérios que importam para vocês", "Próximos passos com prazo"],
      mini: `
        <div class="mini-cabeca"><span>Nossa mudança</span><span>3 opções</span></div>
        <div class="mini-cartao"><div class="cresce"><strong>Apartamento perto do trabalho</strong><small>2 de 2 opinaram</small></div><span class="mini-etiqueta azul">favorita</span></div>
        <div class="mini-cartao"><div class="cresce"><strong>Boa opção, endereço a confirmar</strong><small>falta sua opinião</small></div></div>
        <div class="mini-cartao"><div class="cresce"><strong>Casa maior, fora da região</strong><small>1 de 2 opinaram</small></div></div>`,
    },
    {
      id: "mercado",
      nome: "Mercado",
      sub: "Lista e compras",
      frase: "Viu que acabou, anotou. Quem for ao mercado já sabe o que levar.",
      itens: ["Lista compartilhada", "Quem compra o quê", "Compras em conjunto"],
      mini: `
        <div class="mini-cabeca"><span>Lista da semana</span><span>5 itens</span></div>
        <div class="mini-cartao riscado"><span class="mini-check feito"></span><div class="cresce"><strong>Arroz</strong></div><small>Lucas</small></div>
        <div class="mini-cartao"><span class="mini-check"></span><div class="cresce"><strong>Café</strong></div><small>Ana</small></div>
        <div class="mini-cartao"><span class="mini-check"></span><div class="cresce"><strong>Ração da Mel</strong></div><small>Lucas</small></div>
        <p class="mini-nota">não esquece o pão!</p>`,
    },
    {
      id: "rotina",
      nome: "Rotina",
      sub: "Agenda e tarefas",
      frase: "Compromissos, tarefas e vencimentos aparecem juntos, com quem ficou responsável.",
      itens: ["Agenda da casa", "Tarefas com responsável", "Cuidados com filhos e pets"],
      mini: `
        <div class="mini-cabeca"><span>Quinta, 22 de outubro</span><span>Hoje</span></div>
        <div class="mini-cartao"><span class="mini-hora">07:40</span><div class="cresce"><strong>Levar a Bia na escola</strong><small>Lucas</small></div></div>
        <div class="mini-cartao"><span class="mini-hora">14:00</span><div class="cresce"><strong>Vacina da Mel</strong><small>Ana</small></div><span class="mini-etiqueta atencao">hoje</span></div>
        <div class="mini-cartao"><span class="mini-hora">19:30</span><div class="cresce"><strong>Jantar na casa da mãe</strong><small>todos</small></div></div>`,
    },
    {
      id: "nos",
      nome: "Nós",
      sub: "Conversas e combinados",
      frase: "Como estamos, apoio e conversas que merecem tempo. A casa também é feita disso.",
      itens: ["Combinados da casa", "Convites e tempo juntos", "Conversas que merecem tempo"],
      mini: `
        <div class="mini-cabeca"><span>Espaço para vocês</span><span>Nós</span></div>
        <div class="mini-cartao"><div class="cresce"><strong>Combinado: louça é de quem não cozinhou</strong><small>desde setembro</small></div></div>
        <div class="mini-cartao"><div class="cresce"><strong>Cinema no sábado?</strong><small>convite de Ana</small></div><span class="mini-etiqueta azul">topo</span></div>
        <p class="mini-nota">a gente precisa conversar sobre as férias</p>`,
    },
  ],

  // 03 · Um dia comum
  dia: [
    { hora: "07:40", pasta: "Finanças", titulo: "A conta de luz vence hoje.", texto: "O aviso aparece para todos da casa. Quem estiver com o celular na mão já resolve." },
    { hora: "12:10", pasta: "Mercado", titulo: "Acabou o arroz.", texto: "Quem percebeu anota na hora. A lista é de todos, não de quem lembrou." },
    { hora: "18:30", pasta: "Rotina", titulo: "Quem busca as crianças?", texto: "A agenda mostra o compromisso e quem ficou responsável. Sem mensagem perguntando." },
    { hora: "21:15", pasta: "Planos", titulo: "Dois minutos sobre o apartamento.", texto: "As opções estão lado a lado. Cada um dá sua opinião no seu tempo." },
    { hora: "22:00", pasta: "Nós", titulo: "E a gente, como está?", texto: "Um espaço para o que merece conversa, longe da lista de tarefas." },
  ],

  // 04 · Para combinar (exemplo igual ao do app)
  escolhas: [
    { nome: "Apartamento perto do trabalho", criterios: { Preço: 55, Distância: 92, Espaço: 48 }, quem: "Lucas já opinou" },
    { nome: "Boa opção, endereço a confirmar", criterios: { Preço: 78, Distância: 60, Espaço: 62 }, quem: "Ninguém opinou ainda" },
    { nome: "Casa maior, fora da região", criterios: { Preço: 70, Distância: 25, Espaço: 95 }, quem: "Lucas já opinou" },
  ],

  // 05 · Casa x Minha visão
  visoes: {
    casa: [
      { nome: "Conta de luz", meta: "todos veem" },
      { nome: "Lista do mercado", meta: "todos veem" },
      { nome: "Nossa mudança", meta: "todos veem" },
    ],
    minha: [
      { nome: "Presente de aniversário da Ana", meta: "só você" },
      { nome: "Minha reserva pessoal", meta: "só você" },
      { nome: "Consulta no dentista", meta: "só você" },
    ],
  },

  // 05 · Perguntas
  perguntas: [
    { p: "É grátis mesmo?", r: "Sim. Criar a conta e usar o Vibe House é grátis." },
    { p: "Todo mundo da casa precisa entrar?", r: "Não. Você pode começar sozinho e chamar as outras pessoas quando quiser. Cada uma tem o próprio perfil." },
    { p: "Serve para quem mora com amigos?", r: "Serve. Casais, famílias, repúblicas: qualquer casa onde mais de uma pessoa divide contas e rotina." },
    { p: "O que é meu continua só meu?", r: "O app separa a visão da Casa, que todos veem, da Minha visão, que é só sua." },
    { p: "Preciso entender de finanças?", r: "Não. Você anota a conta, o valor e o vencimento. O app mostra o que vem pela frente." },
    { p: "E se eu perder meus dados?", r: "Você pode guardar uma cópia de segurança de tudo quando quiser, em Dados e backups." },
  ],
};
