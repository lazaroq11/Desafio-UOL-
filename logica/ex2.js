const api = 'https://jsonplaceholder.typicode.com/photos';
function getRandomPictures() {
  const response = fetch(api)
    .then(response => response.json())
    .then(data => {
      const id = [...new Set(data.map(albums => albums.albumId))];
      const randomIndxId = Math.floor(Math.random() * id.length);
      const randomElementId = id[randomIndxId];
      const filterPhotos = data.filter(albums => albums.albumId === randomElementId);
      console.log(filterPhotos);
    });
}

getRandomPictures();
