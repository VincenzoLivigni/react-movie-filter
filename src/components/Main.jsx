export default function Main() {

    const listaFilm = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ];

    return (
        <main>

            <div className="container">
                <div className="col-6 pt-5 mx-auto">
                    <h1 className="display-5"></h1>
                    <div className="card p-3">
                        <form>
                            <h3 className="pb-2 text-center">Scegli un film</h3>
                            <div className="input-group mb-1">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Seleziona un genere</option>
                                    <option value="1">Azione</option>
                                    <option value="2">Fantascienza</option>
                                    <option value="3">Romantico</option>
                                    <option value="3">Thriller</option>
                                </select>
                            </div>
                        </form>
                        <ul className="list-group mt-3">
                            {
                                listaFilm.map((item, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{item.title}  ({item.genre})</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}