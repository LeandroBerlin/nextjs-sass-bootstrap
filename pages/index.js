import "../styles/index.scss"

const Index = () => (
    <>
        <div id="page-content">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <h1 className="font-weight-light mt-4 text-white">Check your privileges</h1>
                        <p className="lead text-white-50">Next.js SCSS Bootstrap</p>
                        <p><img height="300px" className="rounded" src="https://media.giphy.com/media/K6nPw4pe3r6Bq/source.gif" alt="Meow" /></p>
                        <button type="button" className="btn btn-primary">Primary Button</button>
                    </div>
                </div>
            </div>
        </div>
        <footer className="fixed-bottom py-2 text-center bg-dark text-white-50">
            <small>Copyright &copy; Your Website</small>
        </footer>
    </>
);

export default Index;