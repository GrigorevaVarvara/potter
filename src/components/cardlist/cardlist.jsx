import Card from '../card/card';
import './cardlist.scss'

function Cardlist({cards}) {
    return <div className="card-list">
        <div className="container">
            {
                cards.map((card)=>{
                return <Card img={card.img}
                name={card.name}
                actor={card.actor}
                gender={card.gender}
                school={card.school.name}
                wand={card.wand}
                alive={card.alive}/>;
                })
            }
            
        </div>
    </div>;
}

export default Cardlist;