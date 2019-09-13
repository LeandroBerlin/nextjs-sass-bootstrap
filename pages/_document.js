import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body className="d-flex flex-column">
                    <div id="page-content">
                        <Main />
                    </div>
                    <footer className="fixed-bottom py-2 text-center bg-dark text-white-50">
                        <small>Copyright &copy; Your Website</small>
                    </footer>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument