import './card.scss'

function Card({img, name,actor,gender,school,wand,alive}) {
    return <div className="card">
        <div className="image">
            <img alt='granger' src={'http://localhost:3001/img/'+ img}></img>
        </div>

        <div className="info">
            <p className='name'>{name}</p>
            <p className='actor'>Актер: {actor}</p>
            <p className='gender'>Пол: {gender}</p>
            <p className='house'>Школа: {school}</p>
            <p className='wand'>Wand core: {wand}</p>
            <p className='alive'>Жив: {alive ? 'да' : 'нет'}</p>
        </div>
    </div>;
}

export default Card;