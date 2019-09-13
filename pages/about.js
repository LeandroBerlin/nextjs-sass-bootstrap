import Link from 'next/link'
import "../styles/index.scss"

const Index = () => (
    <div className="container text-center">
        <div className="row justify-content-center">
            <div className="col-md-7">
                <h1 className="font-weight-light mt-4 text-white">About page</h1>
                <p className="lead text-white-50">A page about us</p>
                <p><img height="300px" className="rounded" src="https://media.giphy.com/media/B6odR0DhsStfW/source.gif" alt="Meow" /></p>
                <Link href='/'><button type="button" className="btn btn-danger">Back</button></Link>
            </div>
        </div>
    </div >
);

export default Index;