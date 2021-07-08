import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { BackImg, CardContainer, Container, Img, MainModalContainer, ModalContainer, P } from './styled';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const Cards = () => {
    const rand = () => {
        return Math.round(Math.random() * 20) - 10;
    }

    const getModalStyle = () => {
        const top = 50 + rand();
        const left = 50 + rand();
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }));

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const {cards, frontUrl, backUrl ,flipCard, chosedCard, setChosedCard} = useContext(GlobalStateContext)

    const onClickCard = (card) => {
        setChosedCard(card)
        setOpen(true);
    }

    const cardImages = () => {
        if( flipCard === false) {
            return (
                cards.map((card) => {
                    return (
                        <Img key={card.name} src={`${frontUrl}${card.image}`} alt={card.name}/>
                    )
                })
            )
        } else if (flipCard === true)  {
            return (
                cards.map((card) => {
                    return (
                        <BackImg src={backUrl} key={card.name} onClick={() => onClickCard(card)} alt={card.name} />
                    )
                }).sort(() => {
                    return (
                        Math.random() - Math.random()
                    )
                })
            )
        }
    }

    const showCard = () => {
        if (chosedCard.image !== undefined) {
            const image = `${frontUrl}${chosedCard.image}`
            return (
                <img src={image} alt={chosedCard.name}/>
            )
        }
    }
    
    const body = (
        <MainModalContainer style={modalStyle} className={classes.paper}>
            <ModalContainer>
                <h2 id="simple-modal-title">{chosedCard.name}</h2>
                <p id="simple-modal-description">
                    {showCard()}
                </p>
            </ModalContainer>

          <P>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
          </P>
        </MainModalContainer>
      );
    return (
        <Container>
            <CardContainer>
                {cardImages()}
            </CardContainer>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </Container>
    )
}

export default Cards

