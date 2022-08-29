 
let inputSearch = document.getElementById("input-search");
const btn = document.getElementById("btn");
const details = document.getElementById("details");
const err = document.getElementById("err");

btn.addEventListener("click", () =>{
    const search = inputSearch.value;
    const url = `https://restcountries.com/v3.1/name/${search}`;
     if(search === ''){
        err.innerHTML =`
        <h1>search field can't be empty</h1>
        `
        return;
    }

    inputSearch.value="";

        fetch(url)
        .then(res => res.json())
        .then(data => country(data))
        
        const country = (data) => {
            if(data.status === 404){
                err.innerHTML =`
                 <h1>No result found</h1>
                 `
                 return ;
            }else {
                err.innerText = "";
              }
            // console.log(data);
            data.forEach(item => {
                // console.log(item);
                const country = document.getElementById("country");
                const div = document.createElement("div");
                div.classList.add("country-card");
                div.innerHTML = `
                <!-- Image -->
                <div>
                    <img class="flag" src="${item.flags.png}" alt="country flag" />
                </div>
                <div>
                <h3>Country Name: ${item.name.common}</h3>
                    <div class="btn-div">
                        <button onclick="showDetails('${item.cca2}')" class="btn">Learn More...</button>
                    </div>
                </div>
                `;
             country.appendChild(div);
            })

            
        }
    
})

const showDetails =(alpha) =>{
    const url = `https://restcountries.com/v3.1/alpha/${alpha}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            // console.log(item)
            // console.log(item.currencies)
            
            details.innerHTML=`
            <h3>Country Name: ${item.name.common}</h3>
            
            <h5>Capital: ${item.capital}</h5>
            `

            for (const key in item.currencies) {


                const h3 = document.createElement("h3");
                h3.innerText= `Currency: ${key}`
                details.appendChild(h3);
            }
        })

    })
}


