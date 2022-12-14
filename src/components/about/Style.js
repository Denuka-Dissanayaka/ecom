import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10rem;

    h1 {
        text-align: center;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 7rem;
    }

    p {
        width: 50%;
        margin: auto;
        font-size: 1.8rem;
        margin-top: 3rem;
        text-align: center;
    }

    div {
        display: flex;
        justify-content: center;
        margin-top: 4rem;
    }

    @media (max-width: 821px) {
        p {
            width: 80%;
        }
    }

    @media (max-width: 500px) {
        p {
            width: 90%;
        }

        h1 {
            font-size: 5rem;
        }
    }
`;