const dinos = [];

// const clearNewDinoForm = () => {
//   document.getElementById('dino-name').value = '';
//   document.getElementById('dino-type').value = '';
//   document.getElementById('dino-age').value = '';
//   document.getElementById('dino-owner').value = '';
//   document.getElementById('dino-image').value = '';
// };

const newDino = (e) => {
  e.preventDefault();
  const brandNewDino =   {
    id: `dino${dinos.length + 1}`,
    name: document.getElementById('dino-name').value,
    type: document.getElementById('dino-type').value,
    age: document.getElementById('dino-age').value,
    owner: document.getElementById('dino-owner').value,
    adventures: [],
    health: 100,
    imageUrl: document.getElementById('dino-image').value
  };
  dinos.push(brandNewDino);
  // clearNewDinoForm();
  document.getElementById('new-dino-form').reset();
  console.log('hi from newDino', dinos);
};

const init = () => {
  document.getElementById('submit-new-dino').addEventListener('click', newDino);
};

init();

