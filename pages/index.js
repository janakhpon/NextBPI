import Fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import Prices from './prices'

const Index = (props) => (
    <Layout >
       
        <h1>Welcome Home!</h1>
        <p>Bitcoin</p>
        <Prices bpi={props.bpi} />
        {props.bpi.time.updated}
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json();

    return {
        bpi: data
    }
}

export default Index;