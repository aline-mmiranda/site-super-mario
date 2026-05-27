<div align="center">

  <img src="./assets/img/logo-header.png" alt="Logo Super Mario Bros" height="80px"/>

  # 🍄 The Super Mario Bros — Encanadores Mario & Luigi

  **Landing page temática** de um serviço fictício de encanamento inspirado no universo Super Mario Bros.  
  Projeto desenvolvido como exercício prático acompanhando aula, com foco em **HTML, CSS e JavaScript puro.**

  [![Demo](https://img.shields.io/badge/▶_Ver_Demo-C51111?style=for-the-badge)](https://aline-mmiranda.github.io/site-super-mario/)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 🎬 Preview

![Demonstração do projeto](./assets/img/the-super-mario-bros.gif)

> 👆 Vídeo de fundo em loop, modal de contato com animação e botão flutuante de WhatsApp.

---

## ✨ Funcionalidades

- 🎥 **Vídeo de fundo** em loop com máscara de gradiente para manter a legibilidade
- 📋 **Modal de contato** animado — abre ao clicar nos botões e fecha ao clicar no fundo escuro
- 📬 **Formulário de orçamento** integrado ao [Formcarry](https://formcarry.com) (nome, e-mail e mensagem)
- 💬 **Botão flutuante de WhatsApp** com número e mensagem pré-configurados
- 📱 **Layout responsivo** adaptado para telas menores que 1000px

---

## 🗂️ Estrutura do Projeto

```
├── index.html
├── style.css
├── script.js
└── assets/
    ├── img/
    │   ├── logo-header.png
    │   ├── logo.png
    │   ├── mario.png
    │   ├── whatsapp.png
    │   └── video.mp4
    └── icons/
        ├── apple-touch-icon.png
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        └── site.webmanifest
```

---

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/aline-mmiranda/site-super-mario.git

# Acesse a pasta
cd site-super-mario

# Abra no navegador
# Recomendado: extensão Live Server no VS Code
```

> ⚠️ O vídeo de fundo (`video.mp4`) precisa estar em `assets/img/` para funcionar corretamente.

---

## ⚙️ Configurações

**Número do WhatsApp** — edite a variável `number` em `script.js`:
```js
const number = '5585997794148'; // Código do país + DDD + número
```

**Endpoint do formulário** — edite o atributo `action` em `index.html`:
```html
<form action="https://formcarry.com/s/SEU_ID_AQUI" method="POST">
```

---

## 📚 O que aprendi com este projeto

- Manipulação do **DOM** com JavaScript puro para controle de visibilidade e animações
- Uso de **transições CSS** para criar efeitos de entrada e saída de elementos
- Como integrar um formulário HTML com um serviço externo (**Formcarry**)
- Como gerar links dinâmicos para o **WhatsApp Web API**
- Aplicação de **responsividade com media queries**
- Uso de **vídeo como background** com sobreposição de gradiente via CSS

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.  
Os personagens e elementos visuais de **Super Mario Bros** são propriedade da **Nintendo** — nenhum uso comercial é feito.