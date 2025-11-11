import { useEffect, useState } from "react";

export default function Main() {

    const listaFilm = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ];

    function handleSearch(e) {
        e.preventDefault();
        console.log(filmFiltrati);
    }


    const [genereSelezionato, setGenereSelezionato] = useState("");
    const [filmFiltrati, setFilmFiltrati] = useState(listaFilm);
    const [cerca, setCerca] = useState("");

    useEffect(() => {
        const ricercaFiltrata = listaFilm.filter((film) => film.title.toLowerCase().includes(cerca.toLowerCase()))
        setFilmFiltrati(ricercaFiltrata)
    }, [cerca])


    useEffect(() => {
        if (genereSelezionato === "") {
            setFilmFiltrati(listaFilm)
            console.log(listaFilm);

        } else {
            const listaFiltrata = listaFilm.filter((film) => film.genre === genereSelezionato)
            setFilmFiltrati(listaFiltrata)
            console.log(listaFiltrata);
        }
    }, [genereSelezionato])

    return (
        <main>

            <div className="container">
                <div className="col-6 pt-5 mx-auto">
                    <h1 className="display-5"></h1>
                    <div className="card p-3 bg-primary">
                        <form onSubmit={handleSearch}>

                            <h3 className="pt-2 text-white">Ricerca per titolo</h3>
                            <div className="d-flex py-2">
                                <input value={cerca} onChange={(e) => setCerca(e.target.value)} className="form-control me-2" type="search" placeholder="Seleziona un film" />
                                <button className="btn btn-outline-light" type="submit">Cerca</button>
                            </div>

                            <h3 className="pb-2 text-white">Scegli un genere</h3>
                            <div className="input-group mb-1">
                                <select value={genereSelezionato} onChange={(e) => setGenereSelezionato(e.target.value)} className="form-select" aria-label="Default select example">
                                    <option value="">Seleziona un genere</option>
                                    <option value="Azione">Azione</option>
                                    <option value="Fantascienza">Fantascienza</option>
                                    <option value="Romantico">Romantico</option>
                                    <option value="Thriller">Thriller</option>
                                </select>
                            </div>

                        </form>

                        <ul className="list-group mt-3">
                            {
                                filmFiltrati.map((item, index) => (
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