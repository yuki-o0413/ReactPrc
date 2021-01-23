import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import {LANGUAGES} from "./const/languages";

function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(LANGUAGES);

  const addLang = (lang) => {
    console.log(lang);
    setLangs([...langs, lang])
    setTab('list');//言語が追加されたら、タブが切り替わるようにしている
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      {
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
      }
    </div>
  );
}

export default App;
