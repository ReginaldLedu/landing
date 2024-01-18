import React from "react";
import styles from "./SearchPage.module.css";

export const SearchPage = () => {
  return (
    <body>
      <div className={styles.accent__top}></div>
      {/*<div className={styles.accent__center}></div>*/}
      <div className={styles.accent__bottom}></div>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.header__searchBox}>
            <div className={styles.header__logo}></div>
            <input className={styles.header__search} />
          </div>
          <div className={styles.header__filters}>
            <p className={styles.header__filtersTitle}>Фильтры</p>
            <div className={styles.header__filtersArr}>
              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 10L12.1292 0.25H0.870835L6.5 10Z"
                  fill="#FDD446"
                />
              </svg>
            </div>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.main__items}>
            <div className={styles.item}>
              <div className={styles.item__wrapper}>
                <div className={styles.item__photo}></div>
                <div className={styles.item__text}>Без слов</div>
                <div className={styles.item__profile}>
                  <div className={styles.item__profilePhoto}></div>
                  <div className={styles.item__profileText}>
                    <p className={styles.item__profileName}>
                      Настя Ивлеева Вячеславовна
                    </p>
                    <div className={styles.item__profileCheckWrapper}>
                      <p className={styles.item__profileCheck}>проверено</p>
                      <img
                        src="./img/check.png"
                        className={styles.item__profileCheckSign}
                      ></img>
                    </div>
                  </div>
                </div>
                <div className={styles.item__uniqueBox}>
                  <p className={styles.item__uniqueTitle}>Редкость</p>
                  <p className={styles.item__uniqueText}>уникальная</p>
                </div>
                <div className={styles.item__priceBox}>
                  <p className={styles.item__priceTitle}>Цена</p>
                  <p className={styles.item__price}>от 500 ₽</p>
                </div>
                <button className={styles.item__purchase}>Купить</button>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__wrapper}>
                <div className={styles.item__photo}></div>
                <div className={styles.item__text}>Без слов</div>
                <div className={styles.item__profile}>
                  <div className={styles.item__profilePhoto}></div>
                  <div className={styles.item__profileText}>
                    <p className={styles.item__profileName}>
                      Настя Ивлеева Вячеславовна
                    </p>
                    <div className={styles.item__profileCheckWrapper}>
                      <p className={styles.item__profileCheck}>проверено</p>
                      <img
                        src="./img/check.png"
                        className={styles.item__profileCheckSign}
                      ></img>
                    </div>
                  </div>
                </div>
                <div className={styles.item__uniqueBox}>
                  <p className={styles.item__uniqueTitle}>Редкость</p>
                  <p className={styles.item__uniqueText}>уникальная</p>
                </div>
                <div className={styles.item__priceBox}>
                  <p className={styles.item__priceTitle}>Цена</p>
                  <p className={styles.item__price}>от 500 ₽</p>
                </div>
                <button className={styles.item__purchase}>Купить</button>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__wrapper}>
                <div className={styles.item__photo}></div>
                <div className={styles.item__text}>Без слов</div>
                <div className={styles.item__profile}>
                  <div className={styles.item__profilePhoto}></div>
                  <div className={styles.item__profileText}>
                    <p className={styles.item__profileName}>
                      Настя Ивлеева Вячеславовна
                    </p>
                    <div className={styles.item__profileCheckWrapper}>
                      <p className={styles.item__profileCheck}>проверено</p>
                      <img
                        src="./img/check.png"
                        className={styles.item__profileCheckSign}
                      ></img>
                    </div>
                  </div>
                </div>
                <div className={styles.item__uniqueBox}>
                  <p className={styles.item__uniqueTitle}>Редкость</p>
                  <p className={styles.item__uniqueText}>уникальная</p>
                </div>
                <div className={styles.item__priceBox}>
                  <p className={styles.item__priceTitle}>Цена</p>
                  <p className={styles.item__price}>от 500 ₽</p>
                </div>
                <button className={styles.item__purchase}>Купить</button>
              </div>
            </div>
          </div>
          <div className={styles.main__pagination}>
            <div className={styles.main__paginationBack}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.484375 5.13672C0.282552 4.88281 0.282552 4.62891 0.484375 4.375L3.49219 0.605469C3.67448 0.377604 3.86979 0.345052 4.07812 0.507812L4.9375 1.19141C5.11328 1.33464 5.10026 1.52995 4.89844 1.77734L2.48633 4.75586L4.89844 7.73438C5.10026 7.98177 5.11328 8.17708 4.9375 8.32031L4.07812 9.00391C3.86979 9.16667 3.67448 9.13411 3.49219 8.90625L0.484375 5.13672ZM4.41016 5.13672C4.20833 4.88281 4.20833 4.62891 4.41016 4.375L7.41797 0.605469C7.60026 0.377604 7.79557 0.345052 8.00391 0.507812L8.86328 1.19141C9.03906 1.33464 9.02604 1.52995 8.82422 1.77734L6.41211 4.75586L8.82422 7.73438C9.02604 7.98177 9.03906 8.17708 8.86328 8.32031L8.00391 9.00391C7.79557 9.16667 7.60026 9.13411 7.41797 8.90625L4.41016 5.13672Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.main__paginationPageNumber}>1</div>
            <div className={styles.main__paginationPageNumber}>2</div>
            <div className={styles.main__paginationPageNumber}>3</div>
            <div className={styles.main__paginationPageNumber}>4</div>
            <div className={styles.main__paginationPageNumber}>5</div>
            <div className={styles.main__paginationForward}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.523438 8.26172C0.347656 8.11849 0.360677 7.92318 0.5625 7.67578L2.97461 4.69727L0.5625 1.71875C0.360677 1.47135 0.347656 1.27604 0.523438 1.13281L1.38281 0.449219C1.59115 0.286458 1.78646 0.31901 1.96875 0.546875L4.97656 4.31641C5.17839 4.57031 5.17839 4.82422 4.97656 5.07812L1.96875 8.84766C1.78646 9.07552 1.59115 9.10807 1.38281 8.94531L0.523438 8.26172ZM4.44922 8.26172C4.27344 8.11849 4.28646 7.92318 4.48828 7.67578L6.90039 4.69727L4.48828 1.71875C4.28646 1.47135 4.27344 1.27604 4.44922 1.13281L5.30859 0.449219C5.51693 0.286458 5.71224 0.31901 5.89453 0.546875L8.90234 4.31641C9.10417 4.57031 9.10417 4.82422 8.90234 5.07812L5.89453 8.84766C5.71224 9.07552 5.51693 9.10807 5.30859 8.94531L4.44922 8.26172Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </main>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__productDescription}>
            <div className={styles.productDescription__title}>NFT</div>
            <div className={styles.productDescription__line}>Что такое NFT</div>
            <div className={styles.productDescription__line}>
              Создайте NFT с нами
            </div>
            <div className={styles.footer__icons}>
              <div className={styles.footer__iconTwitter}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="20" height="20" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_5701_5195"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_5701_5195"
                      width="512"
                      height="512"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div className={styles.footer__iconVK}></div>
            </div>
          </div>
          <div className={styles.footer__companyDescription}>
            <div className={styles.companyDescription__title}>Компания</div>
            <div className={styles.companyDescription__line}>О нас</div>
            <div className={styles.companyDescription__line}>
              Отправить запрос
            </div>
          </div>
          <div className={styles.footer__other}>
            <div className={styles.other__title}>Другое</div>
            <div className={styles.other__line}>Условия использования</div>
            <div className={styles.other__line}>
              Политика конфиденциальности
            </div>
          </div>
        </div>
        <div className={styles.footer__line}></div>
        <img
          src="./img/star.png"
          alt="StarImg"
          className={styles.footer__star}
        />
        <div className={styles.footer__inc}>@ tnft.ru Company, Inc</div>
      </footer>
    </body>
  );
};
