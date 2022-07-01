import css from 'styled-jsx/css'

export default css`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        font-size: 1.2em;
        height: 50px;
        width: 400px;
        border-radius: 10px;
        text-decoration: none;
        background-color: #6441a5;
        transition: 0.3s;
    }

    a:hover {
        background-color: #6451a5;
    }

    span {
        margin-left: 10px;
    }
`