import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./UserSearch.module.css";
import {
  useFetchAllUsersByNameQuery,
  useSortAllUsersByRepAscQuery,
  useSortAllUsersByRepDescQuery,
  usePaginatedLongQuery,
} from "../store/rtkQueryRequests";
//import Item from "../components/Item";

export const UserSearch = () => {
  const [userAsc, setUserAsc] = useState(false);
  const [userDesc, setUserDesc] = useState(false);
  const [userByDefault, setUserByDefault] = useState(false);
  const [userProfiles, setUserProfiles] = useState([]);
  const [paginated, setPaginated] = useState(true);
  const [linkForPagination, setLinkForPagination] = useState("");
  console.log(userProfiles);
  const [skip, setSkip] = useState(true);
  const [searchNameForInput, setSearchNameForInput] = useState("");
  const [searchNameForRequest, setSearchNameForRequest] = useState("");

  const paginationLink = useSelector(
    (state) => state.userSearchToolkit.paginateLinkLONG
  );
  const usersAsc = useSelector((state) => state.userSearchToolkit.usersAsc);
  const linkAsc = useSelector(
    (state) => state.userSearchToolkit.paginateLinkASC
  );
  console.log(typeof linkAsc);
  const usersDesc = useSelector((state) => state.userSearchToolkit.usersDesc);
  const linkDesc = useSelector(
    (state) => state.userSearchToolkit.paginateLinkDESC
  );
  const usersByDefault = useSelector(
    (state) => state.userSearchToolkit.usersByDefault
  );
  const linkByDefault = useSelector(
    (state) => state.userSearchToolkit.paginateLinkByDefault
  );
  console.log(usersAsc, usersDesc, usersByDefault);

  const { data: paginLong } = usePaginatedLongQuery(linkForPagination, {
    skip: paginated,
  });

  useEffect(() => {
    if (paginationLink.length > 0) {
      setLinkForPagination(paginationLink);
    }
  }, [paginated, paginationLink]);

  useEffect(() => {
    if (userAsc === true) {
      setLinkForPagination(linkAsc);
    } else if (userDesc === true) {
      setLinkForPagination(linkDesc);
    } else if (userByDefault === true) {
      setLinkForPagination(linkByDefault);
    }
  }, [paginated, userAsc, userDesc, userByDefault]);

  const { data: sortedByRepDesc, loading } = useSortAllUsersByRepDescQuery(
    searchNameForRequest,
    {
      skip: skip,
    }
  );

  const { data: sortedByRepAsc, onLoad } = useSortAllUsersByRepAscQuery(
    searchNameForRequest,
    {
      skip: skip,
    }
  );

  const { data: currentData, isLoading } = useFetchAllUsersByNameQuery(
    searchNameForRequest,
    {
      skip: skip,
    }
  );
  if (isLoading || loading || onLoad) return <div>Идет загрузка...</div>;
  return (
    <div className={styles.userSearch__wrapper}>
      <label className={styles.userSearch__label} htmlFor="input">
        Введите, пожалуйста, имя для поиска
      </label>
      <input
        id="input"
        value={searchNameForInput}
        onChange={(e) => setSearchNameForInput(e.target.value)}
        onBlur={(e) => {
          setSearchNameForRequest(e.target.value);
          setSkip(false);
        }}
        type="text"
        className={styles.userInput}
      />
      <button
        className={styles.userSearch__submit}
        onClick={() => {
          setUserProfiles([]);
        }}
      >
        Найти
      </button>
      <div className={styles.userSearch__sort}>
        Сортировать по количеству репозиториев
        <ul className={styles.userSearch__dropdown}>
          <li
            className={styles.userSearch__dropdownByDefault}
            onClick={() => {
              setUserProfiles(currentData);
              setUserByDefault(true);
              setUserDesc(false);
              setUserAsc(false);
            }}
          >
            По умолчанию
          </li>
          <li
            onClick={() => {
              setUserProfiles(sortedByRepAsc);
              setUserByDefault(false);
              setUserDesc(false);
              setUserAsc(true);
            }}
            className={styles.userSearch__dropdownAsc}
          >
            По возрастанию
          </li>
          <li
            onClick={() => {
              setUserProfiles(sortedByRepDesc);
              setUserByDefault(false);
              setUserDesc(true);
              setUserAsc(false);
            }}
            className={styles.userSearch__dropdownDesc}
          >
            По убыванию
          </li>
        </ul>
      </div>
      <div className={styles.userSearch__pagination}>
        <div
          className={styles.main__paginationForward}
          onClick={() => {
            setPaginated(false);
            setUserAsc(false);
            setUserDesc(false);
            setUserByDefault(false);
            if (paginLong !== undefined) {
              setUserProfiles(paginLong);
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
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
      <div className={styles.userSearch__profileWrapper}>
        {userProfiles.length > 0
          ? userProfiles.map((item) => (
              <div
                onClick={(e) => (e.target.style.height = "200px")}
                className={styles.userSearch__profile}
                key={item.id}
              >
                {item.login}
                <div className={styles.userSearch__profileDetails}>
                  <div className={styles.userSearch__profileAvatar}>
                    <img
                      src={`${item.avatar_url}`}
                      alt=""
                      className={styles.profileAvatar__pic}
                    />
                  </div>
                  <p className={styles.userSearch__profileAvatar}>
                    {item.html_url}
                  </p>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
