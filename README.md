# Desafio Alura

🔗 **Deploy:** [https://desafio-alura-umber.vercel.app/](https://desafio-alura-umber.vercel.app/)

### 🎯 Principais Features
- Design Responsivo
- Cache
- Busca em Tempo Real
- Filtros por Categoria
- Paginação
- Tema Escuro/Claro
- Performance Otimizada
- Acessibilidade

### 🛠️ Funcionalidades Técnicas
- **Server-side Rendering (SSR)** - Melhor SEO e performance inicial
- **Client-side Hydration** - Interatividade fluida após carregamento
- **Cache Inteligente** - Gerenciamento de estado e cache com TanStack Query
- **URL State Management** - Filtros e paginação refletidos na URL
- **Skeleton Loading** - Estados de carregamento elegantes
- **Error Boundaries** - Tratamento robusto de erros

### Frontend Core
- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**


## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   └── post/[id]/         # Páginas dinâmicas de posts
├── components/            # Componentes reutilizáveis
│   ├── layout/           # Componentes de layout
│   └── ui/               # Componentes base (Shadcn)
├── features/             # Features organizadas por domínio
│   └── blog/            # Feature do blog
│       ├── components/   # Componentes específicos do blog
│       ├── hooks/        # Hooks customizados
│       ├── services/     # Serviços de API
│       └── types/        # Tipos TypeScript
├── lib/                  # Utilitários e configurações
├── providers/            # Providers React (Context, Query)
└── services/             # Serviços globais
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação
1. **Clone o repositório**
```bash
git clone https://github.com/hugomendonca98/desafio-alura
cd desafio-alura
```

2. **Instale as dependências**
```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install

# bun
bun install
```

3. **Variáveis de ambiente para teste**
```
NEXT_PUBLIC_API_URL=https://nextjs-alura-teste.vercel.app/api
```
4. **Execute o projeto**
```bash
# Desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. **Acesse no navegador**
Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

