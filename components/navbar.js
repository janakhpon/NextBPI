import Link from 'next/link'

const Navbar = () => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/">
                            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>

                    </li>
                </ul>
            </div>
        </nav>
        {/**
                <style jsx>{
            `
        ul{
            display: flex;
            align-content: center;
            justify-content: center;
            align-items: stretch;
            flex-flow: row wrap;
            list-style: none;
            background: steelblue;
        }
        ul li a{
            flex : o 1 auto;
            text-decoration: none;
            color: #fff;
            font-size: 80%;
            padding: .1rem .2rem .1rem .2rem;
            margin: 1rem 2rem 1rem 2rem;
        }
        `
        }</style>
        */}
    </>
)


export default Navbar;