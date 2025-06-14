import { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBLock';
import { Skeleton } from '../components/PizzaBLock/Skeleton';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);

  useEffect(() => {
    setLoading(true);

    const url =
      categoryId === 0
        ? 'https://6849a77c45f4c0f5ee726345.mockapi.io/api/v1/items'
        : `https://6849a77c45f4c0f5ee726345.mockapi.io/api/v1/items?category=${categoryId}`;

    axios
      .get(url)
      .then((response) => {
        setPizzas(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
        setLoading(false);
      });
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={setCategoryId} />
        <Sort value={sortType} onChangeSortType={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}

export default Home;
