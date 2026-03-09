import Link from 'next/link'
import { getAllCreators } from '@/lib/creators'

export default async function CriadorasPage() {
  const creators = await getAllCreators()

  return (
    <main>
      <h1>Criadoras</h1>
      <p>Conheça algumas mulheres referências na tecnologia brasileira.</p>
      <ul>
        {creators.map((creator) => (
          <li key={creator.slug}>
            <Link href={`/criadoras/${creator.slug}/`}>
              {creator.name} - {creator.headline}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
