import React from "react"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

import Layout from "../components/Layout"

const Index = ({ info }) => {
    return (
        <Layout info={info}>
            <h2 className="text-center">Click on a link to edit that information: </h2>
            <Link href="./admin/editToppingsPrices">
                <h4 className="correct-cursor"><a className="text-success">Base Pizzas & Pizza Topping Prices</a></h4>
            </Link>
            <Link href="./admin/editBeveragePrices">
                <h4 className="correct-cursor"><a className="text-success">Beverage Prices</a></h4>
            </Link>
            <Link href="./admin/manageBlog">
                <h4 className="correct-cursor"><a className="text-success">Blog</a></h4>
            </Link>
            <Link href="./admin/editBuffetPrices">
                <h4 className="correct-cursor"><a className="text-success">Buffet Prices</a></h4>
            </Link>
            <Link href="./admin/editInfo">
                <h4 className="correct-cursor"><a className="text-success">General Restaurant Info & Events</a></h4>
            </Link>
            <Link href="./admin/editMenuPizzaPrices">
                <h4 className="correct-cursor"><a className="text-success">Menu Pizza Prices</a></h4>
            </Link>
            <Link href="./admin/editMerchandisePrices">
                <h4 className="correct-cursor"><a className="text-success">Merchandise Prices</a></h4>
            </Link>
            <Link href="./admin/editSidesPrices">
                <h4 className="correct-cursor"><a className="text-success">Side Order Prices</a></h4>
            </Link>
            <style jsx>{`
                .correct-cursor{
                    cursor: pointer;
                    text-align: center;
                    margin-bottom: 3%;
                }
            `}</style>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    const infoJson = await fetch(`${process.env.URL_ROOT}/api/info`).then(_ => _.json())

    return { info: infoJson }
}

export default Index
