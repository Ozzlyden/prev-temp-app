import './App.css'
import {useState} from 'react';


function Search(props){

    const [cidade,setCidade] = useState("");

    function searchInput(e){

        e.preventDefault();
        //setCidade("");
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
                //console.log(sys);   
            if(weather != undefined){
                const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
                
                // Info da cidade
                setCidade(`
                <div>
                    <p>Temperatura: ${main.temp}°F</p>
                    <p>País: ${sys.country}</p>
                    <p>Nome cidade: ${name}</p>
                    <p>Clima: ${weather[0]['description']}</p>
                    <img src="${icon}" />
                </div>
                `);
            }else{
                    setCidade("");
                }
        })
    }

    return(
        <div className='searchWraper'>
            <div className="search">
                <h2>Qual a previsão de tempo da sua cidade... ?🤔</h2>
                <form onSubmit={(e)=>searchInput(e)}>
                    <input placeholder="Cidade..."  type="text" name="searchInput" />
                    <input type="submit" value="Pesquisar"/>
                </form>
            </div>
            {

            (cidade!= "")?
            <div dangerouslySetInnerHTML={{__html: cidade}} />:
            <div>Pesquise por algo acima...</div>
            }
        </div>
    )
}

export default Search;
