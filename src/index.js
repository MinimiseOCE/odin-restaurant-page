import './style.css';

 function component() {
    const header = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    home.innerHTML = 'home'
    menu.innerHTML = 'menu'
    contact.innerHTML = 'contact'

    const main = document.createElement('div');
    const content = document.createElement('div');
    const title = document.createElement('h1');
    title.innerHTML = 'Welcome to my restarauntu'


    const footer = document.createElement('div');

    header.classList.add('header');
    main.classList.add('main');
    footer.classList.add('footer');

    document.body.appendChild(header);
    header.appendChild (home);
    header.appendChild (menu);
    header.appendChild (contact);

    document.body.appendChild(main);
    main.appendChild (content);
    main.classList.add('content');
    content.appendChild (title);
    title.classList.add('title');



    document.body.appendChild(footer);
 }


 component();