import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ListPage from './pages/ListPage';
import History from './pages/history/History'
import Product from './pages/product/Product';
import Stats from './pages/stats/Stats';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
       
      
          <Sidebar />

          <Routes>

            <Route exact path='/'  element={<ListPage />} />
          {/* <ListPage /> */}


          <Route exact path='/history'  element={<History />} />

          

          <Route exact path='/history/product/:id'  element={<Product /> } />

          <Route exact path='/stats'  element={<Stats /> } />
          

          
          




          
        
          
          
          {/*  */}

          {/* <Stats /> */}
          </Routes>
        
      
    </div>
  );
}

export default App;
