document.addEventListener('DOMContentLoaded', () => {
  const imagesDiv = document.getElementById('images');
  const breedsDiv = document.getElementById('breeds');
  const randomCatDiv = document.getElementById('random-cat');

  const fetchData = async () => {
    try {
      // Endpoint 1: Imagens de gatos
      const response1 = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
      const data1 = await response1.json();

      // Endpoint 2: Raças de gatos
      const response2 = await fetch('https://api.thecatapi.com/v1/breeds');
      const data2 = await response2.json();

      // Endpoint 3: Imagem aleatória de gato
      const response3 = await fetch('https://api.thecatapi.com/v1/images/search');
      const data3 = await response3.json();

      // Utilizando features do ES6+: template literals, arrow functions, e destructuring
      imagesDiv.innerHTML = data1.map(({ url }) => `
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="${url}" alt="Cat Image">
              </figure>
            </div>
          </div>
        </div>
      `).join('');

      breedsDiv.innerHTML = data2.slice(0, 5).map(({ name, description }) => `
        <div class="column is-half">
          <div class="card">
            <div class="card-content">
              <p class="title">${name}</p>
              <p class="subtitle">${description}</p>
            </div>
          </div>
        </div>
      `).join('');

      randomCatDiv.innerHTML = `
        <div class="column is-full">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="${data3[0].url}" alt="Random Cat Image">
              </figure>
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  fetchData();
});
