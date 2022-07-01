import style from '../../styles/mainTitle'

function MainTitle(props) {
    return (
        <>
            <img src='/images/faraday_logo.png'></img>
            <h1>{props.title}</h1>
            <style jsx>{style}</style>
        </>
    )
}

export default MainTitle