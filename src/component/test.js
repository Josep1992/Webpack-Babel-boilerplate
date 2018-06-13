class Welcome {
  sayHi(greeting) {
    console.log(greeting);
  }

  AddToDOM = () => {
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = 'Hello I am a paragraph';

    div.appendChild(p);

    document.body.appendChild(div);
  };
}

export default Welcome;
