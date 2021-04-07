let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let twitterBtn = document.getElementById('twitter');
let newQuoteBtn = document.getElementById('new-quote');
let loader = document.getElementById('loader');

function loading(){
    loader.hidden = false;
    quoterContaine = true;
};

function complete(){
    if(!loader.hidden){
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

async function getQuote(){
    loading();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'api.forismatic.com/api/1.0/?method=getQuote&lang=ru&fromat=json';
    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data);
        if(data.quoteAuthor ===""){
            authorText.textContent = "Unknown"
        }else{
            authorText.textContent = data.quoteAuthor
        }
        if(data.quoteText.length > 50){
            quoteText.classList.add('long-quote')
        }else{
            quoteText.classList.remove('long-quote');
        }
        quoteText.textContent = data.quoteText;

        complete();
        
    }catch (err){
        console.log(err)
    } 
    
}

function twittQuote(params){
    const quote = quoteText.textContent;
    const author = authorText.textContent;
    console.log('author',author);
    console.log('quote',quote);

    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`;
    window.open(twitterUrl,'_blank')
}

twitterBtn.addEventListener('click',twittQuote,false);
newQuoteBtn.addEventListener('click',getQuote,false);
getQuote();

