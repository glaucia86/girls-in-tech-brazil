import { notFound } from 'next/navigation'
import { getCreatorBySlug, getCreatorSlugs } from '@/lib/creators'

export async function generateStaticParams() {
  const slugs = await getCreatorSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function CriadoraPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const creator = await getCreatorBySlug(slug)

  if (!creator) {
    notFound()
  }

  return (
    <main>
      <h1>{creator.name}</h1>
      <p>{creator.headline}</p>
      <p>{creator.bio}</p>
      <ul>
        {creator.categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul>
        {creator.contentTypes.map((contentType) => {
          const url = creator.links[contentType]

          if (!url) {
            return null
          }

          return (
            <li key={contentType}>
              <a href={url} target="_blank" rel="noreferrer">
                {contentType}
              </a>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
