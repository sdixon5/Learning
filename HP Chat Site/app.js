const responses = [
    {
        key: "Lines In Display",
        respone: [
            ""
        ]
    },
    {
        key: "Touchpad Issues",
        respone: [
            ""
        ]
    },
    {
        key: "Black Screen",
        respone: [
            ""
        ]
    },
    {
        key: "Keys Not Typing",
        respone: [
            ""
        ]
    },
    {
        key: "Won't Turn on",
        respone: [
            ""
        ]
    },
    {
        key: "Motherboard",
        response: [
            ""
        ]
    },
    {
        key: "Rubber Nipple Missing",
        respone: [
            ""
        ]
    },
    {
        key: "Broken Case",
        respone: [
            ""
        ]
    },
    {
        key: "Missing Key",
        respone: [
            ""
        ]
    },
    {
        key: "Randomly Shutting Down",
        respone: [
            ""
        ]
    },
    {
        key: "Shift Keys",
        respone: [
            ""
        ]
    },
];

const standardInfo = [
    {
        key: "Intro",
        //response: "I'm doing well, thank you for asking. How are you doing today?"
        response: [
            "I'm doing well, thank you for asking. How are you doing today?"
        ]
    },
    {
        key: "Conclusion",
        response: [
            "Thank you for your time and assistance. Have a nice rest of your day!",
            "No that will be all. Thank you for your time and assistance. Have a nice rest of your day!"
        ]
        //response: "Thank you for your time and assistance. Have a nice rest of your day!",
        //response2: "No that will be all. Thank you for your time and assistance. Have a nice rest of your day!"
    },
    {
        key: "Contact Info",
        response: [
            "hello&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hello",
            "this\
            is a multi\
            line\
            string",
            "here is a line <br /> next line? <br /> next line?"
        ]
    }
];

const createDropDown = (data) => {

    const form = document.createElement('div');
    form.classList.add('ui', 'form');

    const field = document.createElement('div');
    field.classList.add('field');

    const label = document.createElement('label');
    label.innerText = 'Issue';

    const selection = document.createElement('div');
    selection.classList.add('ui', 'selection', 'dropdown');

    const icon = document.createElement('i');
    icon.classList.add('dropdown', 'icon');

    const def = document.createElement('div');
    def.classList.add('default', 'text');
    def.innerText = 'Issue';

    const menu = document.createElement('div');
    menu.classList.add('menu');


    //let dropDown = document.createElement('select');

    //dropDown.appendChild(new Option('Select Issue'));

    for(let i of data){
        //let dropDownData = new Option(i.key);
        //dropDown.appendChild(dropDownData);
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerText = i.key;
        menu.appendChild(item);
    }

    form.appendChild(field);
    field.appendChild(label);
    field.appendChild(selection);

    selection.appendChild(icon);
    selection.appendChild(def);
    selection.appendChild(menu);

    return form;
}

const salutations = (data) => {
    //let divs = document.createElement('div');
    //divs.classList.add('ui', 'grid');
    //div.classList.add('ui segment');
    const divItems = document.createElement('div');
    divItems.classList.add('ui', 'divided', 'items');

    for(let i of data){
        let res = i.response;
        for(let j of res){
            let item = document.createElement('div');
            item.classList.add('item');
            let content = document.createElement('div');
            content.classList.add('content');
            let p = document.createElement('p');
            p.innerHTML = j;
            content.appendChild(p);
            //divs.appendChild(div);
            

            let extra = document.createElement('div');
            extra.classList.add('extra');

            let btn = document.createElement('button');
            btn.classList.add('tiny', 'ui', 'blue', 'right', 'floated', 'button');
            btn.innerText = 'Copy to Clipboard';

            extra.appendChild(btn);

            content.appendChild(extra);

            item.append(content);

            divItems.appendChild(item);
            //console.log(item);
        }
    }
    //console.log(divItems);
    return divItems;
}

const buildSections = () => {
    const segment = document.createElement('div');
    segment.classList.add('ui', 'clearing', 'segment');
    //console.log(segment);
    //const divItems = document.createElement('div');
    //divItems.classList.add('ui', 'divided', 'items');

    //call salutations
    const greetings = salutations(standardInfo);

    //call based on selected dropdown? this might be difficult to do

    //add everything together
    segment.append(greetings);
    //console.log(segment);
    //divItems.appendChild(greetings);

    return segment;
}

//const element = createDropDown(responses);

//document.body.append(element);

// const divs = salutations(standardInfo);

// document.body.append(divs);


//testing
// let txt = 'testing/rwhat up/nhope it works';
// const test = document.createElement('p');
// test.innerHTML = txt;
// document.body.append(test);


const div0 = document.createElement('div');
div0.classList.add('ui', 'container');

const div1 = document.createElement('div');
div1.classList.add('ui','grid');

const div2 = document.createElement('div');
div2.classList.add('ten', 'wide', 'column');

const div3 = document.createElement('div');
div3.classList.add('ui', 'clearing', 'segment');

const div4 = document.createElement('div');
div4.classList.add('ui', 'divided', 'items');

const div5 = document.createElement('div');
div5.classList.add('item');

const div6 = document.createElement('div');
div6.classList.add('content');

const p = document.createElement('p');
p.innerText = 'Testing';

const div7 = document.createElement('div');
div7.classList.add('six', 'wide', 'column');

div0.appendChild(div1);

div1.appendChild(div2);
div1.appendChild(div7);

div2.appendChild(div3);

div3.appendChild(div4);

div4.appendChild(div5);

div5.appendChild(div6);

div6.appendChild(p);

//document.body.appendChild(div0);

const title = () => {

    const header = document.createElement('h1');
    header.classList.add('left', 'aligned');

    header.innerText = 'HP Chat Responses';

    return header;
}

const buildPage = () => {
    const container = document.createElement('div');
    container.classList.add('ui', 'container');

    const grid = document.createElement('div');
    grid.classList.add('ui', 'grid');

    const leftColumn = document.createElement('div');
    leftColumn.classList.add('ten', 'wide', 'column');

    const rightColumn = document.createElement('div');
    rightColumn.classList.add('six', 'wide', 'column');

    
    const header = title();

    const dropDown = createDropDown(responses);


    container.appendChild(grid);

    grid.appendChild(leftColumn);
    grid.appendChild(rightColumn);

    leftColumn.appendChild(header);
    rightColumn.appendChild(dropDown);
    
    const sect = buildSections();
    leftColumn.append(sect);
    //console.log(sect);
    //console.log(leftColumn);

    document.body.append(container);



    return null;
}

buildPage();

//Handling Events
//-------------------------------------------------------------------------------
//allow for the dropdown to respond to clicks
$('.ui.selection.dropdown')
    .dropdown()
;