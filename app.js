// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
try{
for(let i = 1; i < 1009 ; i++){    
    const outer = document.createElement('div');
    const inner = document.createElement('div');
    const detail = document.createElement('span');
    const div1 = document.querySelector('#container').appendChild(outer);
    div1.classList.add('card');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    div1.style.backgroundColor = "#" + randomColor;
    const div2 = outer.appendChild(inner);
    div2.classList.add('pokemon');
    const c = document.createElement('img');
    c.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
    div2.appendChild(c);
    outer.appendChild(detail);
    detail.innerText = `#${i}`;
}
}
catch{
    console.log('error occurred');
}
finally{
    const d = document.createElement('h2');
    d.innerText = 'END OF CARDS';
    document.querySelector('body').appendChild(d);
}