import { useState } from 'react'; // 追加
import { List } from "./List";

function App() {
  const [description, setDescription] = useState('クリック前の表示');

  return (
    <div>
      {description}
      <List title="取扱言語一覧" />
      <button onClick={() => setDescription}>ボタン</button>
    </div>
  );
}

export default App;
