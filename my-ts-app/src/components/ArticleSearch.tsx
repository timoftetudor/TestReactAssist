import { Input } from "@chakra-ui/react";
import { useState } from "react";

export const ArticleSearch = ({onInputSearch, searchValue} : {onInputSearch: (searchvalue: string) => void, searchValue:string}) => {
    return <Input value={searchValue} onChange={(e) => {onInputSearch(e.target.value)}}>
    </Input>
};