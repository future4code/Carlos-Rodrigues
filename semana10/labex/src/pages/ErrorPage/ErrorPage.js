import react from 'react';
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import { MainContainer } from "./styled";

export default function ErrorPage() {

    return (
        <MainContainer>
            <h1>Infelizmente não encontramos sua página</h1>
            <iframe src="https://giphy.com/embed/lTrbUqQJCif7NfbXoo" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/looneytunesworldofmayhem-looney-tunes-toons-ltwom-lTrbUqQJCif7NfbXoo"></a></p>
            <ButtonHome/>
        </MainContainer>
    )
}