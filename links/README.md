# Links da bio do Instagram

Página independente da Vibe House, destinada ao perfil `@vibe.house.it`.

Endereço previsto no mesmo domínio: `https://vibehouse.it-ia.tec.br/links/`.
A disponibilidade desse endereço depende da publicação deste commit pelo provedor
que já hospeda o site. A existência dos arquivos no GitHub não comprova um deploy.

## Estrutura

- `index.html`: conteúdo, contatos e destinos dos botões.
- `style.css`: identidade visual e interações dos ícones.
- `assets/`: logos, fonte Inter com licença e imagem de compartilhamento.

HTML e CSS estáticos. Sem dependências, instalação, build, acesso ao banco,
formulários, cookies ou scripts de rastreamento. Os ícones são vetoriais internos.
O salto dos ícones respeita a preferência de movimento reduzido.

Esta pasta não altera a página principal, os scripts ou as configurações de
hospedagem existentes. Seus estilos só são carregados pelo HTML desta pasta.
Não adiciona links na navegação do site nem depende do servidor local do app.
O `noindex,follow` mantém a página fora da indexação de busca sem bloquear os links.

## Contatos e manutenção

WhatsApp da IT autorizado para a página: `5511960288595`.
E-mail: `contato@it-ia.tec.br`.
Instagram: `https://www.instagram.com/vibe.house.it/`.
Botão principal: `https://vibehouse.it-ia.tec.br/`.

Para mudar destinos ou mensagens do WhatsApp, edite os `href` de `index.html`.
O botão principal apresenta o site; não presume uma rota de login não confirmada.
Caso a página seja publicada em outro caminho ou domínio, atualize `canonical`,
`og:url` e `og:image`. As referências locais de CSS, imagens e fontes são relativas
à própria pasta e funcionam a partir de `/links/`.

Manter o logo branco sobre azul no topo e o logo azul sobre Névoa no primeiro
botão. Iniciais V e H em `#0064CC`. Rodapé IT. inteiro em `#FF0000`.
