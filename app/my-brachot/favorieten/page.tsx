const getData = async () => {
  return new Promise(resolve => setTimeout(resolve, 3000));
};

const MyBrachotFavorietenPage = async () => {
  const name = await getData();

  return <div>Favorieten</div>;
};

export default MyBrachotFavorietenPage;
