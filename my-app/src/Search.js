import './App.css'

function Search(props){

    function searchInput(e){

        e.preventDefault();
        let currentValue = document.querySelector('input[name=searchInput]')
        .value;

        /*
            Fazer requisição API depois.
        */

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
        fetch(url)  // Requisicao usando fetch para a URL. Poderia usar o axios
        .then(response=> response.json())   // Pera a resposta da requisisao
        // Data = os dados retornados
        .then(data=>{
            const {main, name, sys, weather} = data;
            if(sys != undefined)
                console.log(sys);   
            if(weather != undefined)
                console.log(weather[0]['description']); 
        })
    }



    return(
        <div className="search">
            <h2>Digite a cidade que você quer saber a previsão... ?🤔</h2>
            <form onSubmit={(e)=>searchInput(e)}>
                <input placeholder="Cidade..."  type="text" name="searchInput" />
                <input type="submit" value="Pesquisar"/>
            </form>
        </div>
    )
}

export default Search;
