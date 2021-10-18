import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

function Cart() {
    return (
        <Container>
            <CartItem/>
            <CartTotal/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    // Trouble
    padding: 14px 18px 0 18px;
`