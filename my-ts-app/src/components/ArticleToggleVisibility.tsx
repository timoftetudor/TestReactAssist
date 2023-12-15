import { Button } from "@chakra-ui/react";

interface ArticleToggleVisibilityProps {
    isVisible: boolean,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const ArticleToggleVisibility = ({isVisible, setIsVisible} : ArticleToggleVisibilityProps) => {
    return <Button variant={"outline"} onClick = {() => setIsVisible(!isVisible)}> { isVisible ? "Hide Articles" : "Show Articles" } </Button> 

};