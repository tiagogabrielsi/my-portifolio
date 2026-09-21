# Meu Portfólio

Template de portfólio para desenvolvedores(as), construído em **HTML, CSS e
JavaScript puros** (sem frameworks, sem build step). Tema claro/escuro e
idioma PT/EN com alternância salva no navegador, animações ao rolar a
página, efeito de digitação no hero e layout totalmente responsivo.

## Como visualizar localmente

Não precisa instalar nada. Basta abrir o `index.html` no navegador, ou usar
um servidor local simples:

```bash
# com Python
python3 -m http.server 8000

# ou com Node (npx)
npx serve .
```

Depois acesse `http://localhost:8000`.

## Estrutura do projeto

```
.
├── index.html          # Estrutura das seções (Hero, Sobre, Skills, Projetos, Formação, Contato)
├── css/
│   └── style.css       # Design system (cores, tipografia, componentes, responsivo)
├── js/
│   └── script.js       # Traduções PT/EN, skills, tema, menu, scroll reveal, digitação, contador, formulário
└── assets/
    ├── favicon.svg      # Ícone da aba do navegador
    ├── cv-pt.pdf        # (adicione seu currículo em português aqui)
    └── cv-en.pdf        # (adicione seu currículo em inglês aqui)
```

> **Dica:** se depois de atualizar o site publicado (GitHub Pages, Netlify
> etc.) as mudanças não aparecerem, geralmente é cache do navegador. Dê um
> refresh forçado (`Ctrl+Shift+R` no Windows/Linux, `Cmd+Shift+R` no Mac) ou
> abra em uma aba anônima. Os links do CSS e do JS em `index.html` têm um
> `?v=4` no final — sempre que editar `style.css` ou `script.js`, aumente
> esse número (`?v=5`, `?v=6`...) para forçar o navegador a buscar a versão
> nova.

## Como personalizar

1. **Dados pessoais** — abra `index.html` e substitua os placeholders:
   - Nome já está como "Tiago"; troque e-mails e links de GitHub/LinkedIn
     (busque por `seunome` e `voce@email.com`)
   - Link do Currículo Lattes (busque por `lattes.cnpq.br`) — esse ícone só
     aparece na versão em português, já que o Lattes é uma plataforma
     brasileira
   - Adicione seu currículo em `assets/cv-pt.pdf` e `assets/cv-en.pdf`
     (o botão "Baixar CV" troca de arquivo automaticamente conforme o
     idioma selecionado)

2. **Cores** — no topo de `css/style.css`, ajuste as variáveis:
   ```css
   --accent: #7c5cff;   /* cor principal */
   --accent-2: #00d4c4; /* cor secundária */
   ```

3. **Textos e tradução PT/EN** — quase todo o texto do site (menu, seções,
   botões, formulário) fica centralizado no objeto `TRANSLATIONS` no topo de
   `js/script.js`, com uma versão `pt` e uma `en`. Para mudar um texto, edite
   os dois lugares (ex: `'about.p1'`) — a chave é a mesma nos dois idiomas.
   As frases do efeito de digitação no hero estão em `'hero.roles'` (um
   array) dentro de cada idioma.

4. **Tecnologias, logos e nível de proficiência (estrelas)** — em
   `js/script.js`, edite o objeto `SKILLS`. Cada tecnologia tem `name` (nome
   exibido), `icon` (slug do logo, veja [simpleicons.org](https://simpleicons.org)
   para encontrar o slug de cada marca) e `level` (de 0 a 5, quantas
   estrelas ficam preenchidas). Para tecnologias/skills sem uma marca única
   (ex: idiomas, BI, Redes), use `badge` no lugar de `icon` com um texto
   curto (2-4 letras) em vez de logo. Os logos são carregados de uma CDN
   pública ([Simple Icons](https://simpleicons.org)) — se algum logo não
   existir, o card mostra só o nome e as estrelas, sem quebrar o layout.

5. **Fonte "estilo game"** — o nome ("Tiago"), o logo do menu e os números
   das seções (01., 02., ...) usam a fonte pixelada **Press Start 2P**
   (Google Fonts), para dar uma pegada retrô/gamer parecida com a estética
   do Minecraft. A fonte oficial do Minecraft é proprietária da Mojang e não
   pode ser redistribuída livremente, por isso foi usada essa alternativa
   gratuita. Para trocar, edite a variável `--font-pixel` no topo de
   `css/style.css` (e o link do Google Fonts em `index.html`, se trocar de
   fonte).

6. **Formulário de contato** — o formulário em "Contato" está pronto para
   ser conectado a um serviço como [Formspree](https://formspree.io/) ou
   [EmailJS](https://www.emailjs.com/): troque o valor de `action` no
   `<form>` (em `index.html`) pela URL do seu endpoint.

7. **Foto de perfil** — já está configurada em `assets/tiago.jpg` (referenciada
   no hero via `<img class="avatar-placeholder">`). Para trocar, basta
   substituir esse arquivo por outra imagem de mesmo nome (ou apontar o
   `src` para outro arquivo). Fica melhor com uma foto quadrada, já que o
   CSS corta em círculo com `object-fit: cover`.

## Deploy

Como é um site 100% estático, pode ser publicado gratuitamente em:

- **GitHub Pages**: Settings → Pages → Source: branch `main`, pasta `/root`
- **Netlify**: arraste a pasta do projeto em [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: `vercel --prod` na raiz do projeto

## Licença

Este projeto está sob a licença definida em [LICENSE](LICENSE). Sinta-se
livre para usar este template como base para o seu próprio portfólio.
