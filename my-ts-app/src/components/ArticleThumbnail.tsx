import { Badge, Box, Flex, GridItem, Image, Tag, Text, VStack } from "@chakra-ui/react";
import { Article } from "../interfaces/Article";

export const ArticleThumbnail = ({ article }:{ article: Article }) => {
    // console.log(article);
    return <VStack alignItems={"stretch"} borderRadius={"md"} border={"1px solid"} borderColor={"gray"}>
        <Image src= { article.thumbnail }>
        </Image>
        <VStack padding={"10px"}>
            <Text fontWeight={"bold"} fontSize={"16px"} maxWidth={"70%"}>
                {article.title}
            </Text>
            <Badge colorScheme="blue">
                {article.author}
            </Badge>
            <Text>
                {article.content}
            </Text>
        </VStack>
    </VStack>
};