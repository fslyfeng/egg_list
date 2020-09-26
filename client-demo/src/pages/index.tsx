import React, { ChangeEvent, useEffect, useState } from 'react';
import { request } from 'umi';
import styles from './index.less';

interface Product {
  id: number;
  name: string;
  price: number;
  img_url: string;
}

export default () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProductList = async (keyword: string = '') => {
    const result = await request('/api/products', {
      params: { keyword },
    });
    setProducts(result);
  };
  useEffect(() => {
    fetchProductList();
  }, []);
  const [keyword, setKeyword] = useState<string>('');
  const searchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const txt = e.target.value;
    setKeyword(txt);
  };
  const searchButtonClickHandler = () => {
    fetchProductList(keyword);
  };
  return (
    <div className={styles.productPage}>
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          onChange={searchInputChangeHandler}
        />
        <button
          className={styles.searchButton}
          onClick={searchButtonClickHandler}
        >
          搜索
        </button>
      </div>
      <div className={styles.productList}>
        {products.map(product => {
          return (
            <div className={styles.productItem} key={product.id}>
              <img
                className={styles.productImage}
                src={product.img_url}
                alt=""
              />
              <div className={styles.productInfo}>
                <div className={styles.productTitle}>{product.name}</div>
                <div className={styles.productPrice}>{product.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
