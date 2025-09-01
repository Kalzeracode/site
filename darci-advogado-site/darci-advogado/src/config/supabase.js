const SUPABASE_URL = 'https://sibdsejxpjgdlpdzcgej.supabase.co'
const SUPABASE_BUCKET = 'darci-site'

export const supabaseImages = {
  logo: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/logo/logo-darci.jpg`,
  darciProfile: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/profile/darci-profile.png`,
  darciPhoto: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/profile/darci-photo.png`,
  justiceBackground: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/backgrounds/background-justice.png`,
  article1: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/articles/articles01.png`,
  article2: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/articles/articles02.png`,
  article3: `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/articles/articles03.png`,
}

export const getImageUrl = (imageName, fallback = '') => {
  return supabaseImages[imageName] || fallback
}
