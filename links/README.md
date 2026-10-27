# Links da bio do Instagram

Página independente da Vibe House, destinada ao perfil `@vibe.house.it`.

Endereço publicado: `https://vibehouse.it-ia.tec.br/links/`.
Publicação e verificação realizadas em 27/10/2026.

## Hospedagem independente

A página está no projeto Vercel **vibe-house-links**, da equipe
**you-contabilidade**, com origem pública `https://vibe-house-links.vercel.app/`.
No projeto principal **vibe-house**, duas regras de roteamento publicadas atendem
exclusivamente estes caminhos:

- `^/links$`: redireciona para `/links/` com status 308.
- `^/links/(.*)$`: encaminha para `https://vibe-house-links.vercel.app/$1`.

As demais páginas continuam no deployment anterior do projeto principal.
O site em produção contém arquivos do aplicativo que não fazem parte deste
repositório. **Não substituir o deployment principal pelo conteúdo deste
repositório**, pois isso removeria arquivos do aplicativo publicado.

A primeira publicação de links foi feita por upload dos arquivos desta pasta.
A integração GitHub da conta Vercel ainda não tem acesso administrativo ou de
escrita a `IT-HUB-IA/Site-VibeHouse` para conectar o repositório. Assim, um push
isolado no GitHub não atualiza automaticamente o projeto de links. Quando o acesso
for concedido, vincular o projeto **vibe-house-links** e usar `links` como sua
Root Directory. Preservar o projeto principal **vibe-house** e seus arquivos.

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
