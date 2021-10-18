import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <Container>
            <Title>IPad Pro</Title>
            <Price>Rs. 2499.00</Price>
            <Rating>⭐ ⭐ ⭐ ⭐ ⭐</Rating>
            <Image src='https://images-eu.ssl-images-amazon.com/images/I/41sqo47iRLL._SY445_SX342_QL70_FMwebp_.jpg' alt='IPad'/>
            <Actionsection>
                <AddToCartButton>Add to Cart</AddToCartButton>
                <BuyNowButton>Buy Now</BuyNowButton>
            </Actionsection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
    
`

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`

const Rating = styled.div``

const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`

const Actionsection = styled.div`
    display: grid;
    place-items: center;
`


const AddToCartButton = styled.button`
    width: 200px;
    height: 30px;
    background-color: #FFD814;
    border: 2px solid #FCD200;
    border-radius: 19px;
    margin-bottom: 8px;
`

const BuyNowButton = styled.button`
    width: 200px;
    height: 30px;
    background-color: #FFA41C;
    border: 2px solid #FF8F00;
    border-radius: 19px;
`
