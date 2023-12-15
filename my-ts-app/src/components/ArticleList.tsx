import { Button, SimpleGrid } from "@chakra-ui/react";
import { ArticleService } from "../services/articleService";
import { useEffect, useState } from "react";
import { Article } from "../interfaces/Article";
import { ArticleThumbnail } from "./ArticleThumbnail";
import { ArticleToggleVisibility } from "./ArticleToggleVisibility";
import { ArticleSort } from "./ArticleSort";

export const ArticleList = ({ sortDirection, searchValue } : { sortDirection: string, searchValue: string }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [articles, setArticles] = useState([
        {
          "id": 0,
          "thumbnail": "https://assist-software.net/sites/default/files/styles/promoted_larger/public/promoted_images/blog/How_to_Integrate_an_Identity_Server_with_Keycloak_in_NET_Web_APIs_Sebastian_Fulga_ASSIST_Software_fHD.png?itok=HLhmWUIQ",
          "author": "Sebastian Fulga",
          "content": "This article is meant for developers or solution architects who want to integrate an Identity Server in their application. Keycloak is an open-source Identity Server and Access...",
          "title": "How to Integrate an Identity Server with Keycloak in .NET Web APIs",
          "href": "https://assist-software.net/blog/how-integrate-identity-server-keycloak-net-web-apis"
        },
        {
          "id": 1,
          "thumbnail": "https://assist-software.net/sites/default/files/styles/promoted_larger/public/promoted_images/blog/Easy%20Gateway%20Payment%20Integration%20with%20Stripe%20%281%29.png?itok=osxi4rCt",
          "author": "Razvan  Prundel",
          "content": "Buying and selling goods on the internet most often involves an intermediary called a payment gateway. PayPal is a payment gateway example, but it’s not the one some of the...",
          "title": "Easy Gateway Payment Integration with Stripe",
          "href": "https://assist-software.net/blog/easy-gateway-payment-integration-stripe"
        },
        {
          "id": 2,
          "thumbnail": "https://assist-software.net/sites/default/files/styles/promoted_larger/public/promoted_images/blog/The%20Seven%20Teams%20of%20Software%20Innovation%20%281%29.png?itok=MKqbKmxx",
          "author": "Crina Voloseniuc",
          "content": "When software development needs a boost of innovation, ASSIST Software comes forth with the perfect challenge.",
          "title": "The Seven Teams of Software Innovation at Best Innovative Minds 2022",
          "href": "https://assist-software.net/blog/seven-teams-software-innovation-best-innovative-minds-2022"
        },
        {
          "id": 3,
          "thumbnail": "https://assist-software.net/sites/default/files/styles/promoted_larger/public/promoted_images/blog/How%20to%20create%20an%20AWS%20Cognito%20custom%20UI%20authentication%20with%20React%20using%20Amplify.png?itok=z_CkjcZv",
          "author": "Ruben Ilciuc",
          "content": "Cognito is an Amazon Cognito is an Amazon Web Services product that makes it simple to add user sign-up and authentication to your mobile and web apps. User-end data is saved...",
          "title": "How to create an AWS Cognito custom UI authentication with React using Amplify",
          "href": "https://assist-software.net/blog/how-create-aws-cognito-custom-ui-authentication-react-using-amplify"
        },
        {
          "id": 4,
          "thumbnail": "https://assist-software.net/sites/default/files/styles/promoted_larger/public/promoted_images/blog/ASSIST%20Software%20Weather%20Plugin%20Real-time%20%281%29.png?itok=Nw_s1GEW",
          "author": "Cătălin Zambalic",
          "content": "Looking for the best weather plugin for Unity? The Real-Time Weather PRO Plugin is an efficient tool to obtain real-time weather/maritime data in...",
          "title": "Real-time Weather PRO: The weather plugin that enhances your Unity project",
          "href": "https://assist-software.net/blog/real-time-weather-pro-weather-plugin-enhances-your-unity-project"
        },
        {
          "id": 5,
          "thumbnail": "https://assist-software.net/sites/default/files/styles/promoted_larger/public/promoted_images/blog/Weather%20Asset%20Unity%20Plugin%20ASSIST%20Software.png?itok=R6zEcuNB",
          "author": "Cătălin Zambalic",
          "content": "The <strong>Real-Time Weather Plugin for Unity</strong> is an efficient tool to obtain real-time weather data in Unity and process the data to simulate a full environment...",
          "title": "Real-Time Weather Plugin for Unity",
          "href": "https://assist-software.net/blog/real-time-weather-plugin-unity"
        }
    ]);

    const sortedArray = (sortDirection: string) => {
        return articles.sort(sortDirection === "asc" ? (a, b) => a.author.toLowerCase() < b.author.toLowerCase() ? -1 : 1 : (a, b) => a.author.toLowerCase() > b.author.toLowerCase() ? -1 : 1)
    }

    return <>
        <ArticleToggleVisibility isVisible = { isVisible } setIsVisible = { setIsVisible }/>
        {
            isVisible && <SimpleGrid templateColumns='repeat(2, 1fr)' gap={6} padding={"10px"}>
                {
                    sortedArray(sortDirection).filter((elem) => searchValue.length ? elem.author.toLowerCase().includes(searchValue) : true).map((elem: Article, index) => {
                        return <ArticleThumbnail key = { index } article = { elem }></ArticleThumbnail>
                    }
                )}
            </SimpleGrid>
        }
    </>
};