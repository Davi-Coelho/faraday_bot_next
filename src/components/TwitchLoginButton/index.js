import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../../styles/twitchButton'

function TwitchLoginButton(props) {
    return (
        <>
            <Link href={props.url}>
                <a>
                    <FontAwesomeIcon icon={['fab', 'twitch']}/>
                    <span>Entrar com a Twitch</span>
                </a>
            </Link>
            <style jsx>{style}</style>
        </>
    )
}

export default TwitchLoginButton