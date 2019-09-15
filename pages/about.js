import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../components/footer'
import "../styles/index.scss"

const About = () => (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <Nav />
        <main role="main" className="inner cover">
            <h1 className="cover-heading">About page</h1>
            <p className="lead">A page about us</p>
            <p className="lead">
                <img className="rounded" src="https://media.giphy.com/media/B6odR0DhsStfW/source.gif" alt="Meow" />
            </p>
            <p className="lead">
                <Link href='/'><button type="button" className="btn btn-danger">Back</button></Link>
            </p>
        </main>
        <Footer />
    </div >


);

export default About;