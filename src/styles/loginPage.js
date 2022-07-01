import css from 'styled-jsx/css'

export const body = css.global`
    body {
        font-family: 'Courier New', Courier, monospace;
        margin: 0;
        height: 100vh;
    }
`

export default css`
    div {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #202020;
    }
`