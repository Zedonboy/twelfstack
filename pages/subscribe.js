import React from 'react'
import Layout from '../components/Layout'

export default function Subscribe(){
    return (
        <Layout>
            <main className="flex p-64 bg-white flex-col justify-center items-center">
                <p className="text-xl">Pay with Flutter</p>
                <button className="px-6 py-3 rounded bg-navy-default text-white">Pay N450</button>
            </main>

        </Layout>
    )
}