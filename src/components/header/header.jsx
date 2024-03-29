import './header.scss'

function Header({schools}) {
    return <header>
        <div className="container">
            <h1>Harry Potter</h1>
            <h3>View all characters from the Harry Potter universe</h3>
        </div>

        <div className="inputs">
            <form action=''>
                <div className="name">
                    <label htmlFor='name'>Имя</label>
                    <input type="text" placeholder='Гермиона' id='name'></input>
                </div>

                <div className="school">
                    <label htmlFor='school'>Школа</label>
                    <select name='' id='school'>
                        <option value="0">Выберите</option>
                        {
                            schools.map((school)=>{
                                return <option value="0">{school.name}</option>
                            })
                        }
                        
                    </select>
                </div>
            </form>
        </div>
    </header>;
}

export default Header;