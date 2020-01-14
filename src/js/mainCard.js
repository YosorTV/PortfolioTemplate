export default class Card{
  constructor({img1, img2, name, title, date, classType, link}){
    this.img1 = img1;
    this.img2 = img2;
    this.date = date;
    this.title = title;
    this.name = name;
    this.classType = classType;
    this.link = link;
  }

  render(selector){
    const container = document.querySelector(selector);
    if(!container) return;
    const section = document.createElement('section');
    const content = `
    <div class="page ${this.classType}">
        <figcaption class="details">
          <h1>${this.name}</h1>
          <h2>${this.title}</h2>
          <p>${this.date}</p>
        </figcaption>

        <figure class="hero">
        <a href="${this.link}">
          <img class="model-left" src="${this.img1}" alt="model">
          <img class="model-right" src="${this.img2}" alt="model">
        </a>
        </figure>
    `
    section.innerHTML = content;
    container.appendChild(section);
  }
}