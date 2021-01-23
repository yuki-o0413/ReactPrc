import { useState, useEffect  } from 'react';//useEffectのインポートを追加
import styled from 'styled-components';
import { List } from "./List";
import { Form } from "./Form";
import {getLanguages} from "./const/languages";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none' };
`

function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState([]);

  //1秒後にリストが表示されるようにする
  useEffect(() => {
    console.log('App.js:useEffect');
    fetchLanguages();
  }, [tab]);

  const fetchLanguages = async () =>{
    const languages = await getLanguages();
    setLangs(languages);
  };

  const addLang = (lang) => {
    console.log(lang);
    setLangs([...langs, lang])
    setTab('list');
  }

  return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi onClick={() => setTab('list')}>リスト</HeaderLi>
          <HeaderLi onClick={() => setTab('form')}>フォーム</HeaderLi>
        </HeaderUl>
      </Header>
      <hr />
      {
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

export default App;
