import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title="Чизбургер-пицца" price={395} />
              <PizzaBlock title="Мексиканская" price={420} />
              <PizzaBlock title="Сырная" price={330} />
              <PizzaBlock title="Пепперони" price={510} />
              <PizzaBlock title="Маргарита" price={355} />
              <PizzaBlock title="Четыре сыра" price={415} />
              <PizzaBlock title="Сырная" price={330} />
              <PizzaBlock title="Пепперони" price={510} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
