import { Dispatch, useState, SetStateAction} from 'react'
import { FilterSection } from '../components/filter-section'
import { Results } from '../components/results'
import {Car} from '../components/filter-section'

export default function Home() {
  const [carList, setCarList] = useState<Car[]>([]);

  return (
    <main className="is-flex is-align-items-flex-start m-6">
      <FilterSection setCarList={setCarList}/>
      <Results carList={carList} />
    </main>
  )
}
