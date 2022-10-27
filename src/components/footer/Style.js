import styled from "styled-components";

export const Container = styled.div`

    margin-top: 10rem;
    background-color: #000;
    padding: 7rem 1rem;
    .footer {
        width: 90%;
        margin: auto;
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        justify-content: space-around;
        color: #fff;

        .logo {
            h3 {
                font-family: 'Lobster', cursive;
                font-size: 2.3rem;
                cursor: pointer;
            }
        }

        .menu-1 {
            ul {
                li {
                    font-size: 1.5rem;
                    font-weight: 500;
                    cursor: pointer;
                    margin-bottom: 1rem;
                }
            }
        }

        .menu-2 {
            ul {
                li {
                    font-size: 1.5rem;
                    font-weight: 500;
                    cursor: pointer;
                    margin-bottom: 1rem;
                }
            }
        }

        .newsletter {
            p {
                font-size: 1.5rem;
                font-weight: 500;
                margin-bottom: 1rem;
            }

            form {
                input {
                    border: none;
                    border-bottom: 0.2rem solid #fff;
                    width: 100%;
                    background-color: #000;
                    color: #fff;
                }
            }
        }
        .social-media {
            p {
                font-size: 1.5rem;
                font-weight: 500;
                margin-bottom: 1rem;
            }

            span {
                font-size: 2rem;
                margin-right: 1rem;
                cursor: pointer;
            }
        }
    }

    .line {
        width:90%;
        height: 0.1rem;
        margin: auto;
        background-color: rgba(255,255,255,0.3);
        margin-top: 6rem;
    }

    .owner {
        width: 90%;
        margin: auto;
        margin-top: 6rem;
        

        p {
            text-align: center;
            font-size: 1.5rem;
            color: rgba(255,255,255,0.5);
        }
    }

    @media (max-width: 821px) {
        .footer {
            grid-template-columns: auto auto;
            grid-template-rows: auto auto auto;
            row-gap: 3rem;

            .logo{
                grid-column: 1/3;
            }
        }
    }

    @media (max-width: 500px) {
        .footer {
            grid-template-columns: auto;
            grid-template-rows: repeat(5, auto);

            .logo {
                grid-column: auto;

                h3 {
                    text-align: center;
                }
            }

            .menu-1 {
                ul {
                    li {
                        text-align: center;
                    }
                }
            }

            .menu-2 {
                ul {
                    li {
                        text-align: center;
                    }
                }
            }

            .social-media {
                p {
                    text-align: center;
                }

                span {
                    text-align: center;
                    display: inline-block;
                    margin-right: 0;
                    width: 32%;
                    margin-top: 1rem;
                }
            }

            .newsletter {
                p {
                    text-align: center;
                }
            }
        }
    }
`