const dinos = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const printDinos = (dinoArray) => {
  let domString = '';
  for (let i =0; i < dinoArray.length; i++){
    domString += '<div class="col-4">';
    domString += '<div class="card">';
    domString += `<img class="card-img-top" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${dinoArray[i].name}</h5>`;
    domString += `<p class="card-text">Health: ${dinoArray[i].health}</p>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  }
  printToDom('kennel', domString);
};

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
  document.getElementById('new-dino-form').reset();
  document.getElementById('collapseOne').classList.remove('show');
  printDinos(dinos);
};

const init = () => {
  document.getElementById('submit-new-dino').addEventListener('click', newDino);
};

init();

