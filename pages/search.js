import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import { API_KEY, CONTEXT_KEY } from '../keys'
import response from '../response'

function Search({ results }) {

    const router = useRouter()

    console.log(results)
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* header */}
            <Header />

            {/* search result */}
            <SearchResults results={results} />
        </div>
    )
}

export default Search


// Treating this page as Server Side Rendering page
export async function getServerSideProps(context) {
    const useDummyData = false;

    // for pagination >> startIndex will contain context.query.start value or 0
    const startIndex = context.query.start || '0'

    // we are using context as our search term is present in URL so we are using context.query.term
    // useDummyData ? response : await fetch >> if we are using dummydata the return response.js; else return the await
    const data = useDummyData ? response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(res => res.json())



    // After the server has rendered... pass the results to the client
    return {
        props: {
            results: data
        }
    }
}