import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    display: flex;

    .text-container {
        background-color: #e0edf4ff;
        flex: 1;
        display: flex;
        justify-content: flex-end;

        .text {
            width: 89%;
            height: 100%;
            /* background-color: aquamarine; */

            div {
                width: 85%;
                margin: auto;
                margin-top: 6rem;

                .primary-text {
                    font-size: 2.5rem;
                    color: #303030;
                }

                .main-text {
                    font-size: 10rem;
                    font-family: 'Josefin Sans', sans-serif;
                    font-weight: 500;
                    margin-top: 7rem;
                    margin-bottom: 6.5rem;
                }
            }
            
        }
    }

    .image-container {
        background-color: #f2f7f9ff;
        flex: 1;

        .image {
            width: 100%;

            img {
                width: 85%;
                height: 100%;
            }
        }
    }

    @media (max-width: 821px) {
        height: 50vh;

        .text-container {
            .text {
                div {
                    margin-top: 5rem;

                    .primary-text {
                        font-size: 2rem;
                    }

                    .main-text {
                        font-size: 6.5rem;
                        margin-top: 7rem;
                        margin-bottom: 6.5rem;
                    }
                }
            }
        }

        .image-container {
            padding-top: 4rem;
            .image {
                /* margin-top: 2rem; */

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    @media (max-width: 500px) {
        height: 100%;
        flex-direction: column-reverse;

        .text-container {
            padding-bottom: 4rem;
            .text {
                width: 100%;
                div {
                    margin-top: 3rem;
                }
            }
        }

        .image-container {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }
    }
`

