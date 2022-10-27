import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10rem;
    background-color: #faefeeff;

    .story {
        width: 90%;
        margin: auto;
        padding: 1rem;
        display: flex;

        .image {
            flex-grow: 1;
            padding: 8rem;
            /* box-sizing: border-box; */
            /* background-color: antiquewhite; */

            img {
                width: 400px;
            }
        }

        .story-container {
            flex-grow: 1;
            /* background-color: azure; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 3rem;

            .story-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 3rem 0;

                .span-1 {
                    font-size: 3rem;
                    font-family: 'Josefin Sans', sans-serif;
                    font-weight: 500;
                    color: #636363;
                }

                .span-2 {
                    font-size: 2rem;
                }
            }

            .content {
                font-size: 1.7rem;
                font-weight: 700;
                padding: 3rem 0;
            }

            .name {
                padding: 3rem 0;
                .span-3 {
                    font-size: 3.5rem;
                    font-family: 'Josefin Sans', sans-serif;
                    font-weight: 600;
                }

                .span-4 {
                    margin-left: 2rem;
                    color: #636363;
                }
            }
            
        }
    }

    @media (max-width: 821px) {
        .story {
            flex-direction: column;

            .image {
                img {
                    width: 100%;
                }
            }
        }
    }

    @media (max-width: 500px) {
        .story {
            .image {
                padding: 5rem 0 0 0;
                img {
                    width: 100%;
                }
            }
        }
    }
`;