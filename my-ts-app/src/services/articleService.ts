import { Article } from "../interfaces/Article";

export const ArticleService = () => {
    const fetchArticles = () => {
        fetch('http://localhost:3000/blog.html')
        .then(function(response) {
            return response.text()
        })
        .then(function(html) {
            var parser = new DOMParser(),
                doc = parser.parseFromString(html, "text/html"),
                articleSection = doc.getElementById("block-system-main"),
                articlesArray = articleSection?.querySelectorAll(".views-row");

            parseArticleList(articlesArray);
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
    }

    const parseArticleList = (articles?: NodeListOf<Element>) => {
        const articlesArray:Article[] = [];
        if(articles !== undefined) {
            for( let i = 0; i < articles.length; i++) {
                const articleAttributes:Article = {
                    thumbnail: articles[i].querySelector(".img-responsive")?.getAttribute("data-src") || "",
                    author: articles[i].querySelector(".author a")?.innerHTML || "",
                    content: articles[i].querySelector(".container-body p")?.innerHTML || "",
                    title: articles[i].querySelector(".container-title > .title a")?.innerHTML || "",
                    href: "https://assist-software.net" + articles[i].querySelector(".container-title > .title a")?.getAttribute("href")
                }
                articlesArray.push(articleAttributes);
            }
            postArticles(articlesArray);
        }
    }

    const postArticles = (articlesArray:Article[]) => {
        fetch("http://localhost:3001/posts", {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(articlesArray)
        }).then(response => response.json())
    }

    const getArticles = async () => {
        return fetch("http://localhost:3001/posts", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            }
        });
    }

    return { fetchArticles, getArticles };
}
