# Instruções de Deploy no Netlify

## Método 1: Deploy Manual (Recomendado para primeira vez)

1. **Acesse o Netlify**: Vá para [netlify.com](https://netlify.com) e faça login
2. **Novo Site**: Clique em "New site from Git" ou "Deploy manually"
3. **Upload da Pasta**: Arraste e solte a pasta `dist` na área de deploy
4. **Configuração**: O site será automaticamente deployado

## Método 2: Deploy via Git (Recomendado para atualizações)

1. **Conectar Repositório**: 
   - Faça upload do projeto para GitHub/GitLab
   - No Netlify, conecte o repositório
   
2. **Configurações de Build**:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Node version: `20`

3. **Deploy Automático**: Cada push no repositório fará deploy automático

## Configuração do Supabase

Após o deploy, configure as imagens do Supabase:

1. **Crie conta no Supabase**: [supabase.com](https://supabase.com)
2. **Crie um projeto** e vá para Storage
3. **Crie um bucket público** (ex: "darci-images")
4. **Faça upload das imagens**:
   - `logo-darci.png` - Logo do escritório
   - `darci-profile.jpg` - Foto principal do Dr. Darci
   - `darci-photo.jpg` - Foto secundária do Dr. Darci
   - `justice-background.jpg` - Imagem de fundo tema justiça
   - `article-1.jpg`, `article-2.jpg`, `article-3.jpg` - Imagens para artigos
   - `office-environment.jpg` - Imagem do ambiente do escritório

5. **Atualize as URLs** no arquivo `src/config/supabase.js`:
   ```javascript
   const SUPABASE_URL = 'https://SEU_PROJETO.supabase.co'
   const SUPABASE_BUCKET = 'darci-images'
   ```

6. **Redeploy** o site após atualizar as configurações

## Configuração de Formulário

Para o formulário de contato funcionar:

1. **Netlify Forms** (Gratuito):
   - Adicione `netlify` ao atributo `form` no HTML
   - Netlify processará automaticamente os envios

2. **Formspree** (Alternativa):
   - Crie conta em [formspree.io](https://formspree.io)
   - Substitua a action do formulário pela URL do Formspree

3. **EmailJS** (Alternativa):
   - Configure EmailJS para envio direto via JavaScript
   - Adicione as credenciais nas variáveis de ambiente

## Domínio Personalizado

1. **Compre um domínio** (ex: darciadvogado.com.br)
2. **Configure DNS**:
   - Aponte para os nameservers do Netlify
   - Ou configure CNAME para o domínio do Netlify
3. **SSL**: Netlify configura automaticamente HTTPS

## Monitoramento

- **Analytics**: Configure Google Analytics
- **Performance**: Use Lighthouse para otimizações
- **SEO**: Configure meta tags e sitemap

## Suporte

Para dúvidas sobre o deploy:
- Documentação Netlify: [docs.netlify.com](https://docs.netlify.com)
- Documentação Supabase: [supabase.com/docs](https://supabase.com/docs)

