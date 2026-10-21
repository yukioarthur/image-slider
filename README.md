# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# WILD / STORIES — Image Slider

Atividade SPA, React com Vite, Tailwind CSS v4 e Lucide React.

## Executar


Para conferir a compilação: `npm run build`.

## Estrutura

- `src/App.jsx`: layout principal e hero.
- `src/components/Background.jsx`: fundo decorativo.
- `src/components/ImageSlider.jsx`: estado, imagens, troca e teclado.
- `src/components/SliderControls.jsx`: botões e indicadores.
- `src/data/slides.js`: cinco objetos com textos e fotos.
- `public/images`: imagens originais da atividade.

## Funcionamento

Use botões anterior e próximo, indicadores e setas do teclado (← / →). Navegação circular preserva o estado. O efeito visual respeita redução de movimento do sistema.

## Referência

Protótipo: https://www.figma.com/design/M9uYIV5AskfRFf2VgmtYwJ?node-id=10-31

## Evidências da entrega

Preencha: versões de Node/Vite, prints desktop/mobile, testes de borda e lista dos commits semânticos realizados.
