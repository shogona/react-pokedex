export const getAllPokemon = (url) => {
  //Promiseは成功か失敗を必ず返してくれる(resとして)それをres.jsonでjson形式にし、
  //そのjsonをdataとして最終的に返すようにしている(成功時)
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
        // console.log(data);
      });
  });
};
