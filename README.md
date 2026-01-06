# Meu Portifolio - William Domingues

Portfolio pessoal desenvolvido com React + Vite.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Requisitos

- Node.js (recomendado LTS)
- npm

## Como rodar localmente

```bash
git clone https://github.com/WilliamD2022/MeuPortifolioWilliamDomingues.git
cd MeuPortifolioWilliamDomingues
npm install
npm run dev
```

## Scripts principais

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera a build de producao
- `npm run preview`: visualiza a build localmente

## Estrutura principal

- `src/components/sections`: secoes do portfolio
- `src/pages/Index.tsx`: pagina principal
- `src/App.tsx`: app root

## Como subir para o GitHub (repositorio novo)

```bash
git add -A
git commit -m "Atualiza portfolio"
git remote set-url origin https://github.com/WilliamD2022/MeuPortifolioWilliamDomingues.git
git push -u origin main
```

Se o repositorio no GitHub ja tiver commits, use:

```bash
git pull --rebase origin main
git push origin main
```

## Deploy

Qualquer hospedagem estatica funciona. Sugestoes:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

### GitHub Pages

Repositorio: `https://williamd2022.github.io/MeuPortifolioWilliamDomingues/`

1) Garanta o `base` no Vite:

Arquivo: `vite.config.ts`

```ts
base: "/MeuPortifolioWilliamDomingues/",
```

2) Gere a build:

```bash
npm run build
```

3) Instale a dependencia e publique com `gh-pages`:

```bash
npm install
npm run deploy
```

Isso cria/atualiza o branch `gh-pages` com a pasta `dist`.
