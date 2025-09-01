# Site do Advogado Darci - Advocacia Criminal

Site profissional para o advogado criminalista Dr. Darci, desenvolvido em React com Tailwind CSS e componentes shadcn/ui.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Navegação Suave**: Scroll suave entre seções
- **Integração Supabase**: Configurado para usar imagens do Supabase Storage
- **Componentes Modernos**: Interface construída com shadcn/ui
- **SEO Otimizado**: Estrutura semântica e meta tags apropriadas

## 📋 Seções do Site

1. **Header**: Navegação fixa com logo e menu
2. **Hero**: Seção principal com call-to-action
3. **Sobre o Escritório**: Apresentação e missão
4. **Áreas de Atuação**: Serviços oferecidos
5. **Advogado**: Perfil do Dr. Darci
6. **Depoimentos**: Avaliações de clientes
7. **Artigos**: Blog jurídico
8. **Contato**: Formulário e informações
9. **Footer**: Links e informações adicionais

## 🛠️ Tecnologias Utilizadas

- React 18
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- Framer Motion (para animações)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   ├── Header.jsx      # Cabeçalho
│   ├── Hero.jsx        # Seção principal
│   ├── About.jsx       # Sobre o escritório
│   ├── Services.jsx    # Áreas de atuação
│   ├── Lawyer.jsx      # Perfil do advogado
│   ├── Testimonials.jsx # Depoimentos
│   ├── Articles.jsx    # Artigos jurídicos
│   ├── Contact.jsx     # Contato
│   └── Footer.jsx      # Rodapé
├── config/
│   └── supabase.js     # Configuração do Supabase
├── hooks/
│   └── useScrollToSection.js # Hook para navegação suave
├── assets/             # Imagens e recursos
├── App.jsx            # Componente principal
└── main.jsx           # Ponto de entrada
```

## 🔧 Configuração do Supabase

Para configurar as imagens do Supabase:

1. Crie uma conta no [Supabase](https://supabase.com)
2. Crie um novo projeto
3. Vá para Storage e crie um bucket público
4. Faça upload das seguintes imagens:
   - `logo-darci.png` - Logo do escritório
   - `darci-profile.jpg` - Foto principal do Dr. Darci
   - `darci-photo.jpg` - Foto secundária do Dr. Darci
   - `justice-background.jpg` - Imagem de fundo tema justiça
   - `article-1.jpg`, `article-2.jpg`, `article-3.jpg` - Imagens para artigos
   - `office-environment.jpg` - Imagem do ambiente do escritório

5. Edite o arquivo `src/config/supabase.js`:
   - Substitua `YOUR_SUPABASE_URL` pela URL do seu projeto
   - Substitua `YOUR_BUCKET_NAME` pelo nome do seu bucket

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   pnpm install
   ```

2. **Executar em desenvolvimento**:
   ```bash
   pnpm run dev
   ```

3. **Build para produção**:
   ```bash
   pnpm run build
   ```

## 📱 Deploy no Netlify

1. Faça build do projeto: `pnpm run build`
2. Faça upload da pasta `dist` no Netlify
3. Configure as variáveis de ambiente se necessário
4. O site estará disponível na URL fornecida pelo Netlify

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `src/App.css` nas variáveis CSS customizadas.

### Conteúdo
- Textos: Edite diretamente nos componentes
- Imagens: Configure as URLs no `src/config/supabase.js`
- Informações de contato: Atualize no componente `Contact.jsx`

### Funcionalidades
- Formulário de contato: Integre com serviços como Formspree ou Netlify Forms
- Analytics: Adicione Google Analytics ou similar
- Chat: Integre WhatsApp ou chat ao vivo

## 📞 Informações de Contato (Exemplo)

- **Telefone**: (11) 99999-9999
- **E-mail**: contato@darciadvogado.com.br
- **Endereço**: Rua dos Advogados, 123 - Centro - São Paulo/SP

## 📄 Licença

Este projeto foi desenvolvido especificamente para o Dr. Darci. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para advocacia criminal especializada**

