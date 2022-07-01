import MainTitle from "../../MainTitle"
import TwitchLoginButton from "../../TwitchLoginButton"
import style, { body } from '../../../styles/loginPage'
import Head from "next/head"

function LoginPage() {
    return (
        <div>
            <Head><title>Faraday Bot</title></Head>
            <MainTitle title="Faraday Bot"></MainTitle>
            <TwitchLoginButton url="/auth/twitch"></TwitchLoginButton>
            <style jsx global>{ body }</style>
            <style jsx>{ style }</style>
        </div>
    )
}

export default LoginPage