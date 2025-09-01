const SUPABASE_URL = 'https://sibdsejxpjgdlpdzcgej.supabase.co'
const SUPABASE_BUCKET = 'darci-site'

export const supabaseImages = {
  logo: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/logo/logo-darci.jpg`,
  darciProfile: `https://sibdsejxpjgdlpdzcgej.supabase.co/storage/v1/object/public/darci-site/darci-site/profile/darci-profile`,
  darciPhoto: `https://sibdsejxpjgdlpdzcgej.supabase.co/storage/v1/object/public/darci-site/darci-site/profile/darci-photo.png`,
  justiceBackground: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/backgrounds/background-justice.png`,
  article1: `https://sibdsejxpjgdlpdzcgej.supabase.co/storage/v1/object/public/darci-site/darci-site/articles/articles01.png`,
  article2: `https://sibdsejxpjgdlpdzcgej.supabase.co/storage/v1/object/public/darci-site/darci-site/articles/articles01.png`,
  article3: `https://sibdsejxpjgdlpdzcgej.supabase.co/storage/v1/object/public/darci-site/darci-site/articles/articles01.png`,
}

export const getImageUrl = (imageName, fallback = '') => {
  return supabaseImages[imageName] || fallback
}
