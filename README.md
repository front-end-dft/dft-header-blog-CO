# Documentação do Projeto

## Visão Geral

Este projeto é uma aplicação web que utiliza Pug para templates HTML, Sass para estilos CSS, e JavaScript puro para funcionalidades interativas. O Gulp é usado como ferramenta de automação para compilar, minificar e servir os arquivos durante o desenvolvimento.

## Estrutura do Projeto

dft-stucture/
│
├── src/
│   └── scriptExternal/
│   │   └── ...                # Scripts externos não desenvolvidos pelo time
│   ├── script/
│   │   ├── imports.js         # Importa script de templates e componentes
│   │   └── main.js            # Arquivo limpo para inserção de scripts globais
│   ├── styles/
│   │   ├── default.scss       # Importa estilos de templates e componentes
│   │   └── main.scss          # Importa default.scss e define estilos globais
│   ├── views/
│   │   ├── templates/
│   │   │   ├── nome_do_template/
│   │   │   │   ├── index.pug  # Template Pug
│   │   │   │   ├── style.scss # Estilos específicos do template
│   │   │   │   └── script.js  # Funcionalidades JavaScript do template
│   │   ├── components/
│   │   │   ├── nome_do_componente/
│   │   │   │   ├── index.pug  # Template Pug
│   │   │   │   ├── style.scss # Estilos específicos do template
│   │   │   │   └── script.js  # Funcionalidades JavaScript do template
│   ├── index.pug              # Index global de desenvolvimento do projeto

│
├── bob/                       # Arquivos prontos para produção para copiar e colar no bob
├── dist/                      # Arquivos compilados e prontos para produção
├── gulpfile.js                # Configuração do Gulp para automação de tarefas
├── package.json               # Configuração do projeto e dependências
└── README.md                  # Documentação do projeto


## Funcionalidades

### Pug

- **Templates**: Utiliza Pug para criar templates HTML de forma concisa e legível.
- **Componentização**: Cada template é modular, permitindo fácil reutilização e manutenção.

### Sass

- **Estilos Modulares**: Usa Sass para criar estilos modulares e reutilizáveis.
- **Importação**: `imports.scss` importa estilos de templates e componentes, enquanto `main.scss` importa `imports.scss` e define estilos globais.

### JavaScript

- **Funcionalidades Interativas**: Scripts JavaScript são usados para adicionar interatividade aos templates.
- **Organização**: Scripts são organizados por template, facilitando a manutenção.

### Gulp

- **Automação de Tarefas**: Gulp é usado para compilar Pug, Sass, e JavaScript, além de minificar e concatenar arquivos.
- **Servidor de Desenvolvimento**: Usa `browser-sync` para servir arquivos e atualizar o navegador automaticamente durante o desenvolvimento.
- **Observação de Arquivos**: Observa mudanças nos arquivos de origem e recompila automaticamente.

## Scripts do NPM

- **`npm run prod`**: Compila todos os arquivos para produção, criando a pasta `dist`.
- **`npm run dev`**: Inicia o servidor de desenvolvimento e observa mudanças nos arquivos.
- **`npm run bob`**: Gera o arquivo final, pronto para ser copiado e colado no CMS bob.

## Como Executar

1. **Instalar Dependências**: Execute `npm install` para instalar todas as dependências necessárias.
2. **Produção**: Execute `npm run prod` para compilar os arquivos para produção.
3. **Desenvolvimento**: Execute `npm run dev` para iniciar o servidor de desenvolvimento.
4. **Desenvolvimento**: Execute `npm run bob` para gerar os arquivos para o bob.

## Considerações Finais

Este projeto é projetado para ser modular e escalável, facilitando a adição de novos templates e componentes. A automação com Gulp melhora a eficiência do desenvolvimento, permitindo foco na criação de funcionalidades e estilos.