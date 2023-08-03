const Api_Key = "8fd1699bc4244327961a1d5d58ee9a59"
const url =" https://newsapi.org/v2/everything?q="

window.addEventListener("load",()=> fetchNews("india"))

async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKey=${Api_Key}`)
    const data = await res.json()
    bindData(data.articles)

}

function bindData(articles){
    const cardContainer = document.getElementById("card-container")
    const newsTemplate = document.getElementById("news-card-temp")

    cardContainer.innerHTML =""
    articles.forEach(article => {
        if (!article.urlToImage) return;
        const cardClone = newsTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article)
        cardContainer.appendChild(cardClone)
    });

    function fillDataInCard(cardClone,article){
        const cardImg =cardClone.querySelector("#news-img")
        const cardTitle =cardClone.querySelector("#news-title")
        const cardSource =cardClone.querySelector("#news-source")
        const cardDes =cardClone.querySelector("#news-des")

        cardImg.src = article.urlToImage
        cardTitle.innerHTML = article.title;
        cardDes.innerHTML = article.description
        const date =new Date(article.publishedAt).toLocaleString("en-US",{
            timeZone: "Asia/jakarta"
        })
        cardSource.innerHTML = `${article.source.name} .${date}`
        cardClone.firstElementChild.addEventListener("click",()=>{
            window.open(article.url,"blank")
        })
    }
}