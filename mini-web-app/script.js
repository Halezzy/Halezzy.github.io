document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
  
    // Fetch data from three different endpoints
    const fetchData = async () => {
      try {
        const response1 = await fetch('https://api.publicapis.org/entries');
        const data1 = await response1.json();
        
        const response2 = await fetch('https://api.publicapis.org/random');
        const data2 = await response2.json();
        
        const response3 = await fetch('https://api.publicapis.org/categories');
        const data3 = await response3.json();
  
        // ES6+ features used: template literals, arrow functions, and destructuring
        contentDiv.innerHTML = `
          <h2>Entries</h2>
          <ul>${data1.entries.slice(0, 5).map(({ API }) => `<li>${API}</li>`).join('')}</ul>
          
          <h2>Random API</h2>
          <p>${data2.entries[0].Description}</p>
          
          <h2>Categories</h2>
          <ul>${data3.categories.slice(0, 5).map(category => `<li>${category}</li>`).join('')}</ul>
        `;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  });
  