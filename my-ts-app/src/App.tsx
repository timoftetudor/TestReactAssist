import { Button, ChakraProvider, useRadioGroup } from '@chakra-ui/react'
import './App.css';
import { ArticleService } from './services/articleService';
import { ArticleList } from './components/ArticleList';
import { Header } from './components/Header';
import { useState } from 'react';
import { ArticleSearch } from './components/ArticleSearch';

function App() {
  const options = ["asc", "desc"];
  const [ sortDirection, setSortDirection ] = useState("asc");
  const [searchValue, setSearchValue] = useState("");

  const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'sortDirection',
      defaultValue: 'asc',
      onChange: () => setSortDirection(sortDirection === "asc" ? "desc" : "asc" )
    })
    
  const group = getRootProps()

  return (
    <ChakraProvider>
        <Header onSortChange = { () => setSortDirection(sortDirection === "asc" ? "desc" : "asc" ) }
          groupProps = { group }
          radioProps = { getRadioProps }
          options = { options } />
        <ArticleSearch onInputSearch={ (e) => {setSearchValue(e)}} searchValue={searchValue}/>
        <ArticleList sortDirection = { sortDirection } searchValue = {searchValue} />
    </ChakraProvider>
  );
}

export default App;
