
const rootElement = document.querySelector('#root');
function renderElement(createElem, rootElem){
    const newElement = document.createElement(createElem.type);
    newElement.innerHTML = createElem.text ;
    for(var attr in createElem.attribute){
        // console.log(attr , ' : ', createElem.attribute[attr] );
        newElement.setAttribute(attr , createElem.attribute[attr]);
    }
    newElement.addEventListener('click',(event)=>{
        console.log(newElement);
    })
    rootElem.appendChild(newElement);
}

const element = {
    type : 'h3',
    text : 'radhikaNarayana sainger',
    attribute : {
        id : 'heading',
        class : 'text-success border border-1 rounded rounded-3 py-2 text-center',
    }
}

const ancherTag = {
    type : 'a',
    text : 'radhikaNarayana',
    attribute : {
        id : 'link',
        target : '_blank',
        class : 'link text-primary font-bold',
    }
}

renderElement(ancherTag , rootElement);
renderElement(element , rootElement);
