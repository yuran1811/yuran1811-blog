const postFields = `
  _id,
  name,
  title,
  desc,
  content,
  date,
  coverImage,
  label,
  tags,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const indexQuery = `
*[_type == "post"] | order(date desc) {
  ${postFields}
} [0..6]
`;

export const allPostsQuery = `
*[_type == "post"] | order(date desc) {
  ${postFields}
}`

export const recentPostsQuery = `
*[_type == "post"] | order(date desc) {
  ${postFields}
} [0..4]
`;

export const categoriesQuery = (labels: string[] = ['dev']) => `
{
  ${labels
    .map((label) => `"${label}": *[_type == "post" && label == "${label}"] | order(date desc) [0..3] {${postFields}}`)
    .join(',')}
}
`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(date desc) [0] {
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc) [0..3] {
    ${postFields}
  }
}
`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postsByQuery = (type: string = 'slug') => `
*[_type == "post" && ${type} == $${type}] | order(date desc) {
  ${postFields}
}
`;
