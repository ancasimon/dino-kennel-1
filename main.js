const dinos = [
  {
    id: 'dino1',
    name: 'Rex',
    type: 'T Rex',
    age: 100,
    owner: 'Zoe',
    adventures: [],
    health: 99,
    imageUrl: 'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png'
  },
  {
    id: 'dino2',
    name: 'Steve',
    type: 'Velociraptor',
    age: 1,
    owner: 'Mary',
    adventures: [],
    health: 1,
    imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png'
  },
  {
    id: 'dino3',
    name: 'Susan',
    type: 'stegosaurus',
    age: 55,
    owner: 'Luke',
    adventures: [],
    health: 0,
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg'
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const closeSingleViewEvent = () => {
  printToDom('single-view', '');
  buildAllDinos(dinos);
};

// const find = (dinoId) => {
//   for(let i =0; i < dinos.length; i++){
//     if(dinoId === dinos[i].id){
//       return dinos[i];
//     }
//   }
// }

const viewSingleDino = (e) => {
  const dinoId = e.target.closest('.card').id;
  // const selectedDino = find(dinoId);
  const selectedDino = dinos.find((x) => dinoId === x.id);
  let domString = '';
  domString += '<button id="close-single-view" class="btn btn-outline-dark"><i class="far fa-times-circle"></i></button>';
  domString += '<div class="container">';
  domString += '<div class="row">';
  domString += '<div class="col-6">';
  domString += `<img class="img-fluid" src="${selectedDino.imageUrl}" alt=""/>`;
  domString += '</div>';
  domString += '<div class="col-6">';
  domString += `<h2>${selectedDino.name}</h2>`;
  domString += `<p>Type: ${selectedDino.type}</p>`;
  domString += `<p>Age: ${selectedDino.age}</p>`;
  domString += `<p>Owner: ${selectedDino.owner}</p>`;
  domString += '<div class="progress">';
  domString += `<div class="progress-bar bg-danger" role="progressbar" style="width: ${selectedDino.health}%" aria-valuenow="${selectedDino.health}" aria-valuemin="0" aria-valuemax="100"></div>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  clearAllDinos();
  printToDom('single-view', domString);
  document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
};

const singleDinoAddEvents = () => {
  const dinoViewButtons = document.getElementsByClassName('single-dino');
  for(let i = 0; i < dinoViewButtons.length; i++){
    dinoViewButtons[i].addEventListener('click', viewSingleDino);
  }
};

const dinoHealth = (e) => {
  const dinoId = e.target.closest('.card').id;
  const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
  if(dinos[dinoPosition].health < 100) {
    dinos[dinoPosition].health += 1;
    buildAllDinos(dinos);
  }
};

const petEvents = () => {
  const dinoPetButtons = document.getElementsByClassName('dino-photo');
  for(let i = 0; i < dinoPetButtons.length; i++){
    dinoPetButtons[i].addEventListener('mouseleave', dinoHealth);
  }
};

const deleteDinoEvent = (e) => {
  const dinoId = e.target.closest('.card').id;
  const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
  dinos.splice(dinoPosition, 1);
  buildAllDinos(dinos);
};

const deleteEvents = () => {
  const dinoDeleteButtons = document.getElementsByClassName('delete-dino');
  for(let i = 0; i < dinoDeleteButtons.length; i++){
    dinoDeleteButtons[i].addEventListener('click', deleteDinoEvent);
  }
};

const feedMe = (e) => {
  const dinoId = e.target.closest('.card').id;
  const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
  if(dinos[dinoPosition].health < 90) {
    dinos[dinoPosition].health += 10;
    buildAllDinos(dinos);
  } else if (dinos[dinoPosition].health > 89 && dinos[dinoPosition].health < 100) {
    dinos[dinoPosition].health = 100;
    buildAllDinos(dinos);
  }
}

const feedEvents = () => {
  const dinoFeedButtons = document.getElementsByClassName('feed-button');
  for(let i = 0; i < dinoFeedButtons.length; i++){
    dinoFeedButtons[i].addEventListener('click', feedMe);
  }
};

const printDinos = (dinoArray) => {
  let domString = '';
  for (let i =0; i < dinoArray.length; i++){
    domString += '<div class="col-4">';
    domString += `<div id="${dinoArray[i].id}" class="card">`;
    domString += `<img class="card-img-top dino-photo" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${dinoArray[i].name}</h5>`;
    domString += '<div class="progress">';
    domString += `<div class="progress-bar bg-danger" role="progressbar" style="width: ${dinoArray[i].health}%" aria-valuenow="${dinoArray[i].health}" aria-valuemin="0" aria-valuemax="100"></div>`;
    domString += '</div>';
    domString += '<button class="btn btn-outline-dark feed-button"><i class="fas fa-drumstick-bite"></i></button>';
    domString += '<button class="btn btn-outline-dark single-dino"><i class="far fa-eye"></i></button>';
    domString += '<button class="btn btn-outline-danger delete-dino"><i class="far fa-trash-alt"></i></button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  }
  printToDom('kennel', domString);
  singleDinoAddEvents();
  petEvents();
  deleteEvents();
  feedEvents();
};

const hospitalDomStringBuilder = (dinoArray) => {
  let domString = '';
  for (let i =0; i < dinoArray.length; i++){
    domString += '<div class="col-4">';
    domString += `<div id="${dinoArray[i].id}" class="card">`;
    domString += `<img class="card-img-top dino-photo" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${dinoArray[i].name}</h5>`;
    domString += '<div class="progress">';
    domString += `<div class="progress-bar bg-danger" role="progressbar" style="width: ${dinoArray[i].health}%" aria-valuenow="${dinoArray[i].health}" aria-valuemin="0" aria-valuemax="100"></div>`;
    domString += '</div>';
    domString += '<button class="btn btn-outline-dark feed-button"><i class="fas fa-drumstick-bite"></i></button>';
    domString += '<button class="btn btn-outline-dark single-dino"><i class="far fa-eye"></i></button>';
    domString += '<button class="btn btn-outline-danger delete-dino"><i class="far fa-trash-alt"></i></button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  }
  printToDom('hospital', domString);
  singleDinoAddEvents();
  petEvents();
  deleteEvents();
  feedEvents();
}

const deadDinoDomStringBuilder = (dinoArray) => {
  let domString = '';
  for (let i =0; i < dinoArray.length; i++){
    domString += '<div class="col-4">';
    domString += `<div id="${dinoArray[i].id}" class="card">`;
    domString += `<img class="card-img-top dino-photo" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${dinoArray[i].name}</h5>`;
    domString += '<div><i class="fas fa-skull-crossbones fa-3x"></i></div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  }
  printToDom('graveyard', domString);
  singleDinoAddEvents();
}

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
  buildAllDinos();
};

const findHospitalDinos = (dinos) => {
  const hospitalDinos = dinos.filter((x) => x.health > 0 && x.health < 40);
  hospitalDomStringBuilder(hospitalDinos);
};

const findDeadDinos = (dinos) => {
  const deadDinos = dinos.filter((x) => x.health < 1);
  deadDinoDomStringBuilder(deadDinos);
};

const clearAllDinos = () => {
  printToDom('kennel', '');
  printToDom('hospital', '');
  printToDom('graveyard', '');
};

const buildAllDinos = () => {
  printDinos(dinos);
  findHospitalDinos(dinos);
  findDeadDinos(dinos);
};

const init = () => {
  document.getElementById('submit-new-dino').addEventListener('click', newDino);
  buildAllDinos();
};

init();

