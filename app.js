const teamContainer = document.querySelector('.team-container')
const addMemberButton = document.querySelector('#addMemberButton')
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

function createNewMember (){
  const newMember = {
    name : document.getElementById('name').value,
    role : document.getElementById('role').value,
    image : document.getElementById('image').value,
  }
  team.push(newMember);
  const name = team[team.length-1].name ;
  const role = team[team.length-1].role ;
  const image = team[team.length-1].image ;
  const newMemberCard = `
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${image}"
          alt="${name}"
        />
      </div>
      <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p>
      </div>
  </div>
  `
  teamContainer.innerHTML += newMemberCard
}

for (let i = 0; i < team.length; i++){
  const name = team[i].name ;
  const role = team[i].role ;
  const image = team[i].image ;
  
  const memberCard = `
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${image}"
          alt="${name}"
        />
      </div>
      <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p>
      </div>
  </div>
  `
  teamContainer.innerHTML += memberCard
}


addMemberButton.addEventListener('click', createNewMember)

console.log(team)