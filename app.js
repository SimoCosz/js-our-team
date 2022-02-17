const teamContainer = document.querySelector('.team-container')
const addMemberButton = document.querySelector('#addMemberButton')
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg',
  },
];

function createNewMember (){
  const newMember = {
    name : document.getElementById('name').value,
    role : document.getElementById('role').value,
    image : document.getElementById('image').value,
  }
  team.push(newMember);

}

for (let i = 0; i < team.length; i++){
  const name = team[i].name ;
  const role = team[i].role ;
  const image = team[i].image ;
  // console.log(name, role, image)
  
  const memberCard = `
    <div class="team-card">
      <div class="card-image">
        <img
          src="${image}"
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