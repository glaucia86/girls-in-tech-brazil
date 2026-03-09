# Girls in Tech Brazil Web Platform

Plataforma web estática para destacar criadoras e referências femininas na tecnologia brasileira.

## Estado atual

Este repositório está evoluindo a camada de dados das criadoras. O foco atual é manter um dataset validado, documentação de contribuição e consumo tipado para os próximos épicos visuais.

## Pre-requisitos

- Node.js >= 22.0.0
- npm >= 10.0.0

## Setup local

```bash
npm install
npm run dev
```

Aplicacao local: `http://localhost:3000`

## Rotas placeholder do MVP

- `/`
- `/sobre`
- `/contribuir`
- `/criadoras`
- `/criadoras/[slug]`

## Scripts disponiveis

- `npm run dev`: sobe ambiente local
- `npm run build`: gera build estatico
- `npm run start`: inicia app em modo producao
- `npm run lint`: executa lint
- `npm run validate`: valida os perfis em `src/data/creators/`
- `npm run type-check`: executa tipagem sem emitir arquivos
- `npm run format`: formata arquivos
- `npm run format:check`: valida formatacao

## Estrutura de diretorios

```text
src/
  app/
  components/
  data/creators/
  lib/
  schemas/
  styles/
public/
```

## Legado da comunidade

O conteúdo histórico original do repositório foi preservado em `README-legacy.md`.

## Contribuicao

Fluxo de contribuição via Pull Request. Antes de abrir PR, execute:

```bash
npm run validate
npm run lint
npm run type-check
npm run build
```
