import styled from "styled-components";

export const Container = styled.div`
    
    .nav-container {
        color : #303030;
        width : 90%;
        /* background-color: red; */
        margin: auto;
        padding: 1rem;
        display: flex;
        font-size: 1.5rem;
        align-items: center;

        .logo {
            flex-grow: 1;
            /* text-align: center; */

            span {
                font-family: 'Lobster', cursive;
                font-size: 2.3rem;
                cursor: pointer;
            }
        }

        .menu-one {
            flex-grow: 3;
            display: flex;
            align-items: center;
            
            li {
                margin-right: 2.5rem;
                cursor: pointer;
            }
        }

        .menu-two {
            justify-content: flex-end;

            li {
                margin-right: 0px;
                margin-left: 2.5rem;
            }

            .mobile-icon {
                display: none;
            }
        }

        .mobile-menu {
            display: none;
            font-size: 2rem;
            margin-right: 2rem;
        }
    }

    @media (max-width: 821px) {
        .nav-container {
            .mobile-menu {
                display: block;
            }

            .responsive {
                display: none;
            }
        }
    }

    @media (max-width: 500px) {
        .nav-container {
            .menu-two {
                .desktop-icon {
                    display: none;
                }

                .mobile-icon {
                    display: block;
                } 
            }
        }
    }
`

