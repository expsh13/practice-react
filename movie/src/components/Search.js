import React, { useState } from "react";


const Search = (props) => {

  // setSearchValueはsearchValueを更新するための関数
  const [searchValue, setSearchValue] = useState("");

  // form内の値が変更された時に発火する関数
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }


  const resetInputField = () => {
    setSearchValue("")
  }

  // 検索ボタンを押されたときに実行
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;