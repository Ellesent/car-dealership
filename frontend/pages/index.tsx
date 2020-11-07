import { FilterSection } from '../components/filter-section'
import { Results } from '../components/results'

export default function Home() {
  return (
    <div className="is-flex is-align-items-flex-start">
      <FilterSection />
      <Results />
    </div>
  )
}
