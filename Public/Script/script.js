console.log("is it working")

let url = "https://uselessfacts.jsph.pl/random.json?language=en"

const options = {
    method: 'GET',
    headers: {},
}

let mageQuote = ""

function getQuote(){
    fetch(url, options).then((resp) => {
        resp.json().then((data) =>{
            mageQuote = data.text
            const display = document.getElementById('mage-quote')
            display.innerText = mageQuote
            })
        })
    }