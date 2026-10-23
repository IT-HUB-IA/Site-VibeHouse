# Vibe House · direção de arte da página

## 1. Estratégia de marca
- **Personalidade:** calma, organizada, de casa. Fala baixo e resolve.
- **Público:** qualquer casa onde mais de uma pessoa divide a vida: casais, famílias, quem mora com amigos.
- **Posicionamento:** o lugar onde a casa inteira enxerga o que a casa precisa.
- **Promessa:** a casa é de todos, a memória dela também.
- **Botão principal:** Criar conta grátis. Secundário: Ver como funciona.
- **Sensação nos 5 primeiros segundos:** alívio. "Alguém finalmente organizou isso."
- **Diferencial visual:** a página fala a mesma língua do app. As cinco pastas de vidro coloridas do app viram a peça central, e o logo 3D é o herói da capa.

> Esta marca deve parecer **o próprio app Vibe House apresentado como produto premium: claro, de vidro, calmo.**

## 2. Direção criativa (versão 2, alinhada ao app)
Mesma identidade do app em 127.0.0.1:4317: fundo névoa, cartões brancos translúcidos com borda branca, cantos de 18px, Inter em peso 600 com letras fechadas, azul `#0064CC` nos botões. Na capa, o logo 3D cercado pelos mesmos avisos que o app mostra na tela "Hoje".

## 3. DNA visual
- Pastas de vidro coloridas, iguais às do app, uma cor por área.
- Cartões com leve degradê colorido no canto, como os destaques do app.
- Logo 3D azul (enviado pelo William) em ladrilho branco no topo e grande na capa.
- Etiquetas coloridas por pasta (Finanças verde, Planos roxo, Mercado dourado, Rotina cinza, Nós laranja).

## 4. Paleta (valores do app)
| Papel | HEX | Uso |
|---|---|---|
| Fundo névoa | `#E8E9EC` | fundo da página |
| Superfície | `#FFFFFF` | cartões (78% de opacidade) |
| Texto | `#1D1D1F` | títulos e texto |
| Apoio | `#636366` | textos de apoio |
| Azul | `#0064CC` | botões, links, destaques |
| Azul claro | `#E5F0FF` | botões secundários |
| Pastas | `#278366` `#7250BC` `#B68A16` `#757585` `#C0782C` | uma cor por área |

## 5. Tipografia
- **Uma família só: Inter**, como no app. Títulos 600 a 700 com espaçamento -0,04em; texto 400; rótulos 500 a 600.

## 6. Fotografia
A página nasce sem fotos (não há fotos reais da marca e não inventamos). O visual vem de objetos montados no próprio código. Se depois quiser fotos, seguir esta direção:
- Luz natural lateral de janela, fim de manhã. Lente 50mm, f/4. Vista de cima ou 3/4.
- Cores: madeira clara, papel cru, cinza névoa, um único toque de amarelo.
- Pessoas só por mãos e gestos, nunca rosto posado. Sem casas de revista: casa real, arrumada.

## 7. Arquitetura (história)
1. **Mesa (atenção):** "A casa é de todos. A memória dela também."
2. **01 · O que ninguém vê (curiosidade):** a lista invisível que mora na cabeça de uma pessoa.
3. **02 · Cinco pastas (entendimento):** Finanças, Planos, Mercado, Rotina, Nós. Abas clicáveis.
4. **03 · Um dia comum (desejo):** linha do tempo de um dia com o app.
5. **04 · Para combinar (desejo):** decisões grandes decididas juntas.
6. **05 · Antes de começar (confiança):** perguntas e respostas, perfis e privacidade.
7. **06 · Sua vez (conversão):** botão final e rodapé em forma de etiqueta.

## 8. Componentes
Cabeçalho, Mesa (hero com colagem), Pasta (seção com aba), Faixa corrida, Abas de pastas, Linha do tempo, Cartão de escolha, Perguntas, Etiqueta de rodapé, Objeto solto (bilhete, cartão).

## 9. Prompts de imagem (para uso futuro, sem texto nem interface na imagem)
- **IMAGEM 01 · MESA:** top-down still life of a light oak kitchen table, a few kraft paper file folders slightly fanned, two ceramic mugs, a set of house keys, one small yellow sticky note with no writing, soft natural window light from the left, 50mm lens, f/4, muted palette of warm paper, mist grey #E8E9EC and a single yellow accent, gentle paper shadows, generous negative space on the right, photorealistic, editorial interior magazine style, 4:5.
- **IMAGEM 02 · GELADEIRA:** close crop of a matte grey fridge door with three blank paper notes held by simple magnets, morning side light, 35mm, shallow depth of field, calm and tidy, no text, 3:4.
- **IMAGEM 03 · MÃOS:** two pairs of hands sorting grocery items into a cloth bag on a kitchen counter, faces out of frame, natural light, 50mm, f/2.8, warm neutral tones, candid, 16:9.
- **IMAGEM 04 · ENTRADA:** a small ceramic bowl by the front door with keys and a folded receipt, late afternoon light, 85mm, f/2, soft background of a light grey wall, 1:1.
- **IMAGEM 05 · OBJETO SOLTO:** a single kraft file folder isolated on transparent background, slightly rotated, realistic paper texture, soft contact shadow, PNG.
- **IMAGEM 06 · OBJETO SOLTO:** a single blank yellow sticky note, corner slightly curled, transparent background, PNG.

## 10. Movimento
- Entrada: seções sobem 16px com opacidade, rápido (450ms).
- Pastas: a aba aparece antes do conteúdo, como se a pasta abrisse.
- Faixa corrida lenta com a lista invisível.
- Objetos soltos da mesa: leve flutuação com o rolar; ao passar o mouse, endireitam.
- Tudo desliga com "reduzir movimento" do sistema.

## 11. Responsivo
- **Computador:** colagem completa, abas escalonadas, grade assimétrica.
- **Tablet:** colagem com menos objetos, abas mais curtas.
- **Celular:** a colagem vira um leque de três cartões sob o título; abas de pastas viram faixa rolável; linha do tempo em coluna única com horários grandes.

## 12. Plano técnico
HTML, CSS e JavaScript simples, sem instalação, para abrir em qualquer computador. Conteúdo repetido vem de listas em `scripts/dados.js`. O endereço do app fica num só lugar (`scripts/dados.js`, `ENDERECO_DO_APP`).
