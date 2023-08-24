import "./App.css"

export default function Search(){

    function searchInput(){
        let currentValue = document.querySelector('[name=searchInput]').value;
        // alert(currentValue);

        // Requisicao API

    }

    return(
        <div className="Search">
            <h2>Coloque as informações da localidade:</h2>
            <input placeholder="Latitude..." onKeyUp={searchInput} type="number" name="searchInput"/>
            <input placeholder="Longitude..." onKeyUp={searchInput} type="number" name="searchInput"/>
            <input placeholder="Horário" onKeyUp={searchInput} type="text" name="searchInput"/>
            <input placeholder="Dia" onKeyUp={searchInput} type="text" name="searchInput"/>
            <input  type="submit" name="searchInput"/>
        </div>
    )
        
}