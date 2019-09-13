import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Check Your Priviledges</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport"
                    />
                </Head>
                <body className="d-flex flex-column">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument