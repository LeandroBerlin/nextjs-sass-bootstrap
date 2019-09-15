import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <title>Check your privileges</title>
                </Head>
                <Component {...pageProps} />
            </Container>)
    }
}

export default MyApp