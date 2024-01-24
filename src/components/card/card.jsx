import './card.scss'
import granger from './../../assets/img/pic1.png'

function Card() {
    return <div className="card">
        <div className="image">
            <img alt='granger' src={granger}></img>
        </div>

        <div className="info">
            <p className='name'>Hermione Granger</p>
            <p className='actor'>Actor: Emma Watson</p>
            <p className='gender'>Gender: female</p>
            <p className='house'>House: Gryffindor</p>
            <p className='wand'>Wand core: dragon heartstring</p>
            <p className='alive'>Alive: yes</p>
        </div>
    </div>;
}

export default Card;