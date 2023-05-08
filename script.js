const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings"
  },
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings"
  },
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings"
  },
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings"
  },
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures"
  },
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures"
  },
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures"
  },
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures"
  },
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures"
  }
];

function addItensOnCatalog(productsArray) {

  const listPainted = document.querySelector('.paintings')
  const listActions = document.querySelector('.actions')

  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i]

    const listItem = document.createElement('li');
    listItem.classList.add('card')

    const content = document.createElement('div');
    content.classList.add('card-content');

    const name = document.createElement('h2');
    name.innerHTML = product.name

    const price = document.createElement('p');
    price.textContent = product.price

    const image = document.createElement('img')
    image.src = product.image
    image.classList.add('images')

    content.appendChild(name)
    content.appendChild(price)
    listItem.appendChild(image)
    listItem.appendChild(content)

    if (product.type === "Paintings") {
      listPainted.appendChild(listItem)
    } else if (product.type === "Action Figures") {
      listActions.appendChild(listItem)
    }
  }
}

addItensOnCatalog(productsArray)





