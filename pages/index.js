import Head from 'next/head' 
import BaseLayout from '../components/layouts/BaseLayout';
import Calculator from '../components/Calculator/Calculator';
const Home = (props) => (
  <BaseLayout  title="Home page"> 
       <Calculator /> 
  </BaseLayout>
)

export default Home
