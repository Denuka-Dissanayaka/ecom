import styled from "styled-components";

export const ContainerMobile = styled.div`
    width: 60vw;
    height: 100vh;
    background-color: beige;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    z-index: 1000;
    margin-left: -1000px;
    transition: 0.5s;

    .close-btn {
        width: 90%;
        /* background-color: aliceblue; */
        margin: auto;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            font-family: 'Lobster', cursive;
            font-size: 2.8rem;
        }

        .btn {
            font-size: 2.5rem;
            cursor: pointer;
        }
    }

    .menu {
        width: 90%;
        /* background-color: bisque; */
        margin: auto;
        flex-grow: 12;
        display: flex;
        justify-content: center;
        align-items: center;

        .menu-ul {
            height: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            li {
                font-size: 2.5rem;
                cursor: pointer;
                text-align: center;

                
            }

            li.menu-name {
                span {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    justify-content: center;
                }
            }
            
        }
    }

    @media (max-width: 500px) {
        width: 80vw;
    }
`