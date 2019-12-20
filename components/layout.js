import Head from 'next/head'
import Navbar from './navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>TRY ME NEXT.JS</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.min.css" />
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;