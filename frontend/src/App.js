/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react'
import './styles/app.css'
import ItemCard from './components/ItemCard'
import Loading from './components/Loading'
import Inputs from './components/Inputs'
import AppContext from './context/Context'

function App () {
  const { products, isLoading, category, site } = useContext(AppContext)
  const items = () => (
    <div className="div__items">
      {!isLoading
        ? (
            products.map((item, id) => <ItemCard product={item} key={id}/>)
          )
        : (
        <Loading />
          )}
    </div>
  )
  const message = () => {
    if (!products.length) {
      return <h4>Selecione acima o que procura</h4>
    }
  }
  return (
    <div className="App">
      <Inputs />
      {site && category ? items() : message()}
    </div>
  )
}

export default App
