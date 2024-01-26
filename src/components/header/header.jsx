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
                                <option value="0">{school.name}</option>
                            })
                        }
                        <option value="1">Гриффиндор</option>
                        <option value="2">Слизерин</option>
                        <option value="3">Когтевран</option>
                        <option value="4">Пуффендуй</option>
                    </select>
                </div>
            </form>
        </div>
    </header>;
}

export default Header;