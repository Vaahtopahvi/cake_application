import { useState } from "react"

const Toive = () => {
    const [nimi, setNimi] = useState('');
    const [resepti, setResepti] = useState('');
    const [ltiedot, setLtiedot] = useState('');
    const [odota, setOdota] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const toivomus = { nimi, resepti, ltiedot}

        setOdota(true)

        fetch('http://localhost:8000/toiveet', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(toivomus)
        }).then(() => {
            console.log('uusi toivomus lisätty')
            setOdota(false)
        })
    }

    return(
        <div className="toive">
            <h2>Toivo reseptiä</h2>     
            <form onSubmit={handleSubmit}>
                <label>Oma nimi:</label>
                <input type="text" 
                required
                value={nimi}
                onChange= { (e) => setNimi(e.target.value)}
                />
                <label>Reseptin nimi:</label>
                <input type="text" 
                required
                value={resepti}
                onChange = {(e) => setResepti(e.target.value)}
                />
                <label>Vegaani:</label>
                <input type="checkbox"/>
                <label>Lisätietoja:</label>
                <textarea
                value={ltiedot}
                onChange = {(e) => setLtiedot(e.target.value)}>
                </textarea>
                {!odota && <button>Toivo!</button>}
                { odota && <button>Toivotaan...</button>}
            </form>
        </div>
    )
}

export default Toive