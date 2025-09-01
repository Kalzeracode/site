// Configuração do Supabase para imagens
// Substitua YOUR_SUPABASE_URL e YOUR_BUCKET_NAME pelos valores reais

const SUPABASE_URL = 'https://YOUR_SUPABASE_URL.supabase.co'
const SUPABASE_BUCKET = 'YOUR_BUCKET_NAME'

// URLs das imagens no Supabase Storage
export const supabaseImages = {
  // Logo do escritório
  logo: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/logo-darci.png`,
  
  // Foto do advogado Darci (principal)
  darciProfile: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/darci-profile.jpg`,
  
  // Foto do advogado Darci (secundária)
  darciPhoto: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/darci-photo.jpg`,
  
  // Imagem de fundo para o Hero (tema justiça)
  justiceBackground: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/justice-background.jpg`,
  
  // Imagens para artigos
  article1: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/article-1.jpg`,
  article2: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/article-2.jpg`,
  article3: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/article-3.jpg`,
  
  // Imagem de escritório/ambiente profissional
  officeImage: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/office-environment.jpg`,
}

// Função para obter URL da imagem com fallback
export const getImageUrl = (imageName, fallback = '') => {
  return supabaseImages[imageName] || fallback
}

// Instruções para configuração:
/*
1. Crie uma conta no Supabase (https://supabase.com)
2. Crie um novo projeto
3. Vá para Storage e crie um bucket público
4. Faça upload das seguintes imagens:
   - logo-darci.png (logo do escritório)
   - darci-profile.jpg (foto principal do Dr. Darci)
   - darci-photo.jpg (foto secundária do Dr. Darci)
   - justice-background.jpg (imagem de fundo tema justiça)
   - article-1.jpg, article-2.jpg, article-3.jpg (imagens para artigos)
   - office-environment.jpg (imagem do ambiente do escritório)
5. Substitua YOUR_SUPABASE_URL pela URL do seu projeto
6. Substitua YOUR_BUCKET_NAME pelo nome do seu bucket
*/

