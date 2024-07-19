document.addEventListener('DOMContentLoaded', () => {
  const imagesDiv = document.getElementById('images');
  const breedsDiv = document.getElementById('breeds');
  const randomCatDiv = document.getElementById('random-cat');

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const renderImages = (images) => {
    imagesDiv.innerHTML = images.map(({ url }) => `
      <div class="flex-item">
        <figure class="image">
          <img src="${url}" alt="Cat Image">
        </figure>
      </div>
    `).join('');
  };

  const renderBreeds = (breeds) => {
    breedsDiv.innerHTML = breeds.slice(0, 5).map(({ name, description }) => `
      <div class="flex-item">
        <div class="card">
          <div class="card-content">
            <p class="title">${name}</p>
            <p class="subtitle">${description}</p>
          </div>
        </div>
      </div>
    `).join('');
  };

  const renderRandomCat = ([randomCat]) => {
    randomCatDiv.innerHTML = `
      <div class="flex-item">
        <figure class="image">
          <img src="${randomCat.url}" alt="Random Cat Image">
        </figure>
      </div>
    `;
  };

  const init = async () => {
    const images = await fetchData('https://api.thecatapi.com/v1/images/search?limit=5');
    const breeds = await fetchData('https://api.thecatapi.com/v1/breeds');
    const randomCat = await fetchData('https://api.thecatapi.com/v1/images/search');

    renderImages(images);
    renderBreeds(breeds);
    renderRandomCat(randomCat);
  };

  init();
});
