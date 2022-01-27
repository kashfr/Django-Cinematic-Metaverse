import './Home.css'
import { Layout, ProductCards } from '../../components'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <ProductCards />
      </div>
    </Layout>
  )
}

export default Home
