import React from 'react'
import styled from 'styled-components'

function CartItem() {
    return (
        <Container>
            <ContentLeft>
                <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="kettle"/>
            </ContentLeft>
            <ContentRight>
                <TitleText>Your Amazon Basket is empty</TitleText>
                <AltText>Shop today’s deals</AltText>
                <ButtonContainer>
                    <SignInButton>Sign in to your account</SignInButton>
                    <SignUpButton>Sign up now</SignUpButton>
                </ButtonContainer>
            </ContentRight>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 16px;
    flex: 0.7;
    margin-right: 18px;
    background-color: white;
    padding: 64px 20px 20px 20px;
    border: 1px solid #D5D9D9;
`

const ContentLeft = styled.div`
    display: flex;
    margin-right: 2%;

    img {
        width: 200px;
    }
`

const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 16px!important;
    margin-bottom: 16px!important;
`

const SignInButton = styled.button`
    background: #FFD814;
    border: 1px solid #FCD200;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(213,217,217,.5);
    font-size: 16px;
    height: 29px;
    line-height: 24px!important;
    padding: 0 10px 0 11px;
    text-align: center;
    color: #0F1111;
    cursor: pointer;
`

const SignUpButton = styled.button`
    color: #0F1111;
    cursor: pointer;
    margin-left: .385em;
    text-align: center;
    padding: 0 10px 0 11px;
    border-radius: 7px;
    height: 29px;
    border: 1px solid #D5D9D9;
    font-size: 16px;
    line-height: 24px!important;
    box-shadow: 0 2px 5px 0 rgba(213,217,217,.5);
    background: #FFF;
`

const TitleText = styled.text`
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
`

const AltText = styled.text`
text-decoration: none;
color: #007185;
cursor: pointer;
font-size: 14px;
`