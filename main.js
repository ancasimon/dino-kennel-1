const dinos = [
  {
    id: 'dino1',
    name: 'Rex',
    type: 'T Rex',
    age: 100,
    owner: 'Zoe',
    adventures: [],
    health: 92,
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
  },
  {
    id: 'dino4',
    name: 'Barry',
    type: 'Brontosaurus',
    age: 100,
    owner: 'Zoe',
    adventures: [],
    health: 100,
    imageUrl: 'https://lh3.googleusercontent.com/proxy/_rJSL88ErOEvgHl5SInWOEolOdikwIMcKWPv9iqZzt3IUkD33WdG6d9qd8TmNJFSiszTXm7JeGQPocmB_BZErKxt__25LOpW75dmnVuy0nuY0PatX2cIYA-C'
  },,
  {
    id: 'dino5',
    name: 'Steph',
    type: 'Spinosaurus',
    age: 100,
    owner: 'Zoe',
    adventures: [],
    health: 75,
    imageUrl: 'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2'
  },
  {
    id: 'dino6',
    name: 'Tim',
    type: 'Talarurus',
    age: 100,
    owner: 'Zoe',
    adventures: [],
    health: 55,
    imageUrl: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226'
  },
  {
    id: 'dino7',
    name: 'Tracy',
    type: 'Triceratops',
    age: 100,
    owner: 'Zoe',
    adventures: [],
    health: 0,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg'
  },
  {
    id: 'dino8',
    name: 'Percy',
    type: 'Pterodactyl',
    age: 10,
    owner: 'Mary',
    adventures: [],
    health: 10,
    imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg'
  },
  {
    id: 'dino9',
    name: 'Betty',
    type: 'brontosaurus',
    age: 22,
    owner: 'Zoe',
    adventures: [],
    health: 22,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD'
  }
];

const adventures = [
  {
    id: 'adventure1',
    title: 'BRAWL',
    healthHit: 50
  },
  {
    id: 'adventure2',
    title: 'Cave exploration',
    healthHit: 10
  },
  {
    id: 'adventure3',
    title: 'Ropes course',
    healthHit: 13
  },
  {
    id: 'adventure4',
    title: 'Playing in traffic',
    healthHit: 3
  },
  {
    id: 'adventure5',
    title: 'Baking',
    healthHit: 70
  },
  {
    id: 'adventure6',
    title: 'Welding',
    healthHit: 4
  },
  {
    id: 'adventure7',
    title: 'Underwater Basket Weaving',
    healthHit: 99
  },
  {
    id: 'adventure8',
    title: 'Surfing',
    healthHit: 39
  },
  {
    id: 'adventure9',
    title: 'Fishing',
    healthHit: 23
  },
  {
    id: 'adventure10',
    title: 'Shot from a cannon',
    healthHit: 60
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const closeSingleViewEvent = () => {
  printToDom('single-view', '');
  $("#singleDinoModal").modal('hide');
};

const adventureTableBuilder = (advArray) => {
  let domString = '';
  if(advArray.length > 0){
    domString += '<table class="table">';
    domString += '<thead class="thead-light">';
    domString += '<tr>';
    domString += '<th scope="col">#</th>';
    domString += '<th scope="col">Date</th>';
    domString += '<th scope="col">Type</th>';
    domString += '</tr>';
    domString += '</thead>';
    domString += '<tbody>';
    for(let i = 0; i < advArray.length; i++){
      domString += '<tr>';
      domString += `<th scope="row">${i+1}</th>`;
      domString += `<td>${moment(advArray[i].date).format('MMMM Do YYYY, h:mm:ss a')}</td>`;
      domString += `<td>${advArray[i].title}</td>`;
      domString += '</tr>';
    }
    domString += '</tbody>';
    domString += '</table>';
  }
  return domString;
}

const viewSingleDino = (e) => {
  const dinoId = e.target.closest('.card').id;
  const selectedDino = dinos.find((x) => dinoId === x.id);
  let domString = '';
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
  domString += printProgress(selectedDino, selectedDino.health < 1 ? 'graveyard' : 'single-view');
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="row">';
  domString += adventureTableBuilder(selectedDino.adventures);
  domString += '</div>';
  domString += '</div>';

  $("#singleDinoModal").modal('show');
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

const addAdventure = (e) => {
  const dinoId = e.target.closest('.card').id;
  const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
  const randomAdvIndex = Math.floor(Math.random()*adventures.length);
  const newAdventure = {
    title: adventures[randomAdvIndex].title,
    date: Date.now()
  };
  dinos[dinoPosition].adventures.push(newAdventure);
  dinos[dinoPosition].health -= adventures[randomAdvIndex].healthHit;
  buildAllDinos(dinos);
};

const advEvents = () => {
  const advButtons = document.getElementsByClassName('adv-button');
  for(let i = 0; i < advButtons.length; i++){
    advButtons[i].addEventListener('click', addAdventure);
  }
}

const printProgress = (dino, divId) => {
  let domString = '';
  if (divId !== 'graveyard') {
    domString += '<div class="progress">';
    domString += `<div class="progress-bar progress-bar-striped ${dino.health < 40 ? 'bg-danger' : 'bg-success'}" role="progressbar" style="width: ${dino.health}%" aria-valuenow="${dino.health}" aria-valuemin="0" aria-valuemax="100">${dino.health}%</div>`;
    domString += '</div>';
  } else {
    domString += '<div><i class="fas fa-skull-crossbones fa-3x"></i></div>';
  }

  return domString
}

const printButtons = (divId) => {
  let domString = '';
  domString += '<div class="row">';
  domString += `<div class="col-6"><button class="col-12 btn btn-outline-success feed-button ${divId === 'graveyard' ? 'disabled' : ''}"><i class="fas fa-drumstick-bite"></i></button></div>`;
  domString += `<div class="col-6"><button class="col-12 btn btn-outline-warning adv-button ${divId === 'graveyard' ? 'disabled' : ''}"><i class="fas fa-hiking"></i></button></div>`;
  domString += '</div>';
  domString += '<div class="row">';
  domString += `<div class="col-6"><button class="col-12 btn btn-outline-dark single-dino"><i class="far fa-eye"></i></button></div>`;
  domString += `<div class="col-6"><button class="col-12 btn btn-outline-danger delete-dino ${divId === 'graveyard' ? 'disabled' : ''}"><i class="far fa-trash-alt"></i></button></div>`;
  domString += '</div>';

  return domString;
}

const printDinos = (dinoArray, divId) => {
  let domString = `<h2>${divId.charAt(0).toUpperCase() + divId.slice(1)}</h2>`;
  domString += '<div class="d-flex flex-wrap">';
  for (let i =0; i < dinoArray.length; i++){
    domString += '<div class="col-3">';
    domString += `<div id="${dinoArray[i].id}" class="card">`;
    domString += `<img class="card-img-top ${divId !== 'graveyard' ? 'dino-photo' : ''}" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
    domString += '<div class="card-body text-center">';
    domString += `<h5 class="card-title">${dinoArray[i].name}</h5>`;
    domString += printProgress(dinoArray[i], divId);
    domString += printButtons(divId);
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  }
  domString += '</div>';
  printToDom(divId, domString);
};

const addEvents = () => {
  singleDinoAddEvents();
  petEvents();
  deleteEvents();
  feedEvents();
  advEvents();
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
  buildAllDinos();
};

const findHospitalDinos = (dinos) => {
  const hospitalDinos = dinos.filter((x) => x.health > 0 && x.health < 40);
  printDinos(hospitalDinos, 'hospital');
};

const findDeadDinos = (dinos) => {
  const deadDinos = dinos.filter((x) => x.health < 1);
  printDinos(deadDinos, 'graveyard');
};

const findLiveHealthyDinos = (dinos) => {
  const liveDinos = dinos.filter((x) => x.health > 39);
  printDinos(liveDinos, 'kennel');
}

const buildAllDinos = () => {
  findLiveHealthyDinos(dinos);
  findHospitalDinos(dinos);
  findDeadDinos(dinos);
  addEvents();
};

const init = () => {
  document.getElementById('submit-new-dino').addEventListener('click', newDino);
  buildAllDinos();
};

init();
