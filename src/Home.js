import React from 'react'
import styled from 'styled-components'
import Product from './Product'
//import { db } from './firebase'

function Home() {
    // const [products, setProducts] = useState([])

    // const getProducts = () => {
    //     db.collection('products').onSnapshot((snapshot) => {
    //         let tempProducts = []
    //         tempProducts = snapshot.docs.map((doc) => (
    //             {
    //                 id: doc.id,
    //                 products: doc.data()
    //             }
    //         ));
    //         setProducts(tempProducts)
    //     })
    // }

    // useEffect(() => {
    //     getProducts()
    // }, [])


    return (
        <Container>
            <Banner>
            </Banner>
            <Content>
                <Product/>
                <Product/>
                <Product/>
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://m.media-amazon.com/images/I/71-yif8IfmL._SX3000_.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    z-index: 1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0,0,0,0));
`

const Content = styled.div`
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -360px;
`
