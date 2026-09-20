# Meu Portfólio

Template de portfólio para desenvolvedores(as), construído em **HTML, CSS e
JavaScript puros** (sem frameworks, sem build step). Tema claro/escuro com
alternância salva no navegador, animações ao rolar a página, efeito de
digitação no hero e layout totalmente responsivo.

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
├── index.html          # Estrutura das seções (Hero, Sobre, Skills, Projetos, Experiência, Contato)
├── css/
│   └── style.css       # Design system (cores, tipografia, componentes, responsivo)
├── js/
│   └── script.js       # Tema, menu mobile, scroll reveal, digitação, contador, formulário
└── assets/
    ├── favicon.svg      # Ícone da aba do navegador
    └── cv.pdf           # (adicione o seu currículo aqui)
```

## Como personalizar

1. **Dados pessoais** — abra `index.html` e substitua os placeholders:
   - `Seu Nome`, e-mails, links de GitHub/LinkedIn (busque por `seunome` e
     `voce@email.com`)
   - Textos das seções "Sobre", "Experiência" e "Projetos"
   - Adicione seu currículo em `assets/cv.pdf` (usado no botão "Baixar CV")

2. **Cores** — no topo de `css/style.css`, ajuste as variáveis:
   ```css
   --accent: #7c5cff;   /* cor principal */
   --accent-2: #00d4c4; /* cor secundária */
   ```

3. **Frases do efeito de digitação** — em `js/script.js`, edite o array
   `roles` dentro de `initTypedText()`.

4. **Formulário de contato** — o formulário em "Contato" está pronto para
   ser conectado a um serviço como [Formspree](https://formspree.io/) ou
   [EmailJS](https://www.emailjs.com/): troque o valor de `action` no
   `<form>` (em `index.html`) pela URL do seu endpoint.

5. **Foto de perfil** — para trocar o círculo com iniciais por uma foto
   real, substitua o `<div class="avatar-placeholder">` por uma `<img>` e
   ajuste o CSS de `.avatar-placeholder` conforme necessário.

## Deploy

Como é um site 100% estático, pode ser publicado gratuitamente em:

- **GitHub Pages**: Settings → Pages → Source: branch `main`, pasta `/root`
- **Netlify**: arraste a pasta do projeto em [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: `vercel --prod` na raiz do projeto

## Licença

Este projeto está sob a licença definida em [LICENSE](LICENSE). Sinta-se
livre para usar este template como base para o seu próprio portfólio.
