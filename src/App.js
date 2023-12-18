import './App.css';
import './fonts.css';
import {useEffect, useState} from "react";
import data from "./Assets/Json/emojiList.json"
import EmojiCard from "./Components/Emoji/Emoji";
import Header from "./Components/Header/Header";


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loaded, setLoaded] = useState(false)
  const [emojiList, setEmojiList] = useState([])


  useEffect(() => {
      setEmojiList(data)
      setLoaded(true)
  }, []);


  return (
    <div className="App">
        <Header/>
        {/*# Search Bar*/}
        <div className="search-bar">
        <input
            style={{fontSize: "1.5rem"}}
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

        {/*# Home Content*/}
        <div className="home-content">
            {loaded ? emojiList.filter(item =>
                (JSON.stringify(item.title).toLowerCase().includes(searchTerm.toLowerCase()) || JSON.stringify(item.keywords).toLowerCase().includes(searchTerm.toLowerCase()) )
            ).map((item) => {
                console.log(item)
                return (
                    <EmojiCard emoji={item.symbol} title={item.title}></EmojiCard>
                )
            }) : null}
        </div>
    </div>
  );
}

export default App;
