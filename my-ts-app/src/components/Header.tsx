import { Box, Button, Flex } from "@chakra-ui/react";
import { ArticleService } from "../services/articleService";
import { ArticleSort } from "./ArticleSort";

export const Header = ({ onSortChange, groupProps, radioProps, options } : {onSortChange : () => void, groupProps:any, radioProps:any, options: string[]}) => {
    const articleService = ArticleService();

    return <Flex 
                flexDirection={"column"} 
                justifyContent={"space-between"} 
                padding={"20px"} 
                border={"1px solid"} 
                borderColor={"grey"} 
                borderBottomRadius={"md"} 
                marginBottom={"10px"}>
        <Button mb={"10px"} onClick={() => { articleService.fetchArticles() }}>Parse HTML file and save articles in DB</Button>
        <ArticleSort onChange={onSortChange} groupProps = { groupProps } radioProps = { radioProps } options = { options }/>
    </Flex>
};