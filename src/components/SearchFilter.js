import React, {useState, useEffect} from 'react';
import { Card, Result } from 'antd';

function SearchFilter(props) {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(()=>{
    setSearchResult(props.matches)
  }, [props.matches])
  return (
    <div className="list">
        {searchResult.length>0 ? searchResult.map((sentence)=>{
          return <Card key={sentence.id}><span className={sentence.highlight}>{sentence.data}</span></Card>
        }): <Result status="404" subTitle="No results found"/>}
    </div>
  );
}

export default SearchFilter;
