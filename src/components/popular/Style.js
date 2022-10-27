import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10rem;

    .title {
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 7rem;
    }

    .collection {
        width: 90%;
        margin: auto;
        margin-top: 10rem;
        display: grid;
        grid-template-columns: auto auto auto auto;
        row-gap: 2.5rem;
        justify-content: center;
        column-gap: 2rem;
    }


    @media (max-width: 821px) {
       
        .collection {
            grid-template-columns: auto auto;
            
        }
    }

    @media (max-width: 500px) {
        .title {
            font-size: 5rem;
        }

        .collection {
            grid-template-columns: auto;
            width: 100%;
            padding: 0 1rem;
            column-gap: 0px;
        }
    }
`
// ---------------------------------------------------------------

export const CardContainer = styled.div`
    width: 32.5rem;
    cursor: pointer;
    position: relative;
    transition-duration: 0.5s;

    &:hover {
        top: -8px;
    }

    .image {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .text {
        margin-top: 1rem;

        .item-name {
            text-align: center;
            font-size: 2rem;
            font-weight: 600;
        }
        .item-price {
            text-align: center;
            font-size: 1.8rem;
            
        }
    }

    

    @media (max-width: 500px) {
        width: 30rem;
    }
`
    
