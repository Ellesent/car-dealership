import { FilterSection } from '../components/filter-section'
import { Results } from '../components/results'

export default function Home() {
  return (
    <main className="is-flex is-align-items-flex-start m-6">
      <FilterSection />
      <Results />
    </main>
  )
}
