export const List = ({langs}) => {
  // 渡されたlangsを利用するようにする
  return (
    <div>
      {
        langs.map((lang, index) => {
          return <div key={index}>{ lang }</div>
        })
      }
    </div>
  )
}