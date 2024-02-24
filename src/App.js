import './App.css';
import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';
import {data} from "./Data.js"

function App() {
  const mappedDate = data.map((item) => {
    return (
      <Cards item={item} key={item.id} />
    )
  })
  return (
    <div>
      <Header />
      {mappedDate}
      <Footer />
    </div>
    
  );
}

export default App;
