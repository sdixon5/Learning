const responses = [
    {
        key: "Lines In Display",
        response: [
            "Device was accidentally dropped by a student during passing period. The device has lines in the display but no physical damage. Can I please get a box to send the device in for repair."
        ]
    },
    {
        key: "Touchpad Issues",
        response: [
            "The device's touchpad is not working. There is no cursor movement and the left clicking does not work either. There is no physical damage to the device and an external mouse works just fine. Can I please get a box to send this device in for repair."
        ]
    },
    {
        key: "Black Screen",
        response: [
            "The device has a black screen when turned on. You can see the light is turned on but there is no picture. There is no physical damage to the device. Plugging into a second monitor works. Can I please get a box to send this device in for repair."
        ]
    },
    {
        key: "Keys Not Typing",
        response: [
            "The device has multiple keys that are not typing. An external keyboard works just fine. There is no physical damage to the device. Can I please get a box to send this device in for repair."
        ]
    },
    {
        key: "Won't Turn on",
        response: [
            "The device is not turning on. Multiple chargers have been used and we are not getting a charging light. Either the battery or the motherboard is dead. There is no physical damage to the device. Can I please get a box to send this device in for repair."
        ]
    },
    {
        key: "Motherboard",
        response: [
            "The device has a bad motherboard. The device will not turn on (no LED power light). There is a charging light when it is plugged in, but once again it will not turn on. Can I please get a box to send the device in for repair."
        ]
    },
    {
        key: "Rubber Nipple Missing",
        response: [
            "The device has a key with the rubber nipple missing. Due to this the key is not functioning. An external keyboard works just fine. Can I please get a box to send the device in for repair."
        ]
    },
    {
        key: "Broken Case",
        response: [
            "The device was accidentally dropped by a student during passing period. The device now has a broken case corner. The only damage is to the case itself. There is no functionality issues, everything works fine. Can I please get a box to send the device in for repair."
        ]
    },
    {
        key: "Missing Key",
        response: [
            "The device has a missing key, due to a broken latch. There is no physical damage to the device. An external keyboard works just fine. Can I please get a box to send the device in for repair."
        ]
    },
    {
        key: "Randomly Shutting Down",
        response: [
            "The device is randomly shutting down. The device is also overheating which may be leading to the shut downs. I am unable to determine if the shut down is due to the battery or motherboard. Can I please get a box to send the device in for repair."
        ]
    },
    {
        key: "Shift Keys",
        response: [
            "The device shift keys that are not typing. An external keyboard works just fine. There is no physical damage to the device. Can I please get a box to send this device in for repair."
        ]
    },
];

const standardInfo = [
    {
        key: "Contact Info",
        response: [
            "Company name (if any): Weld County School District 6<br/><br/>Full Name: Shawn Dixon<br/>Complete address with zip/postal code (US/Canada): 2204 5th Ave Greeley, CO 80631 USA<br/>Contact Phone: (970) 348-6546<br/>Alternate phone (if any):  (970) 348-6500<br/>Email address: sdixon3@greeleyschools.org<br/>Time Zone: Mountain Time<br/>Country: United States<br/>Best time to reach me is between 8am and 3pm Monday-Friday"
        ]
    },
    {
        key: "Intro",
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
    },
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

    for(let i of data){
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

const buildItemDiv = (value) => {
    let item = document.createElement('div');
    item.classList.add('item');
    let content = document.createElement('div');
    content.classList.add('content');
    let p = document.createElement('p');
    p.innerHTML = value;
    content.appendChild(p);
    
    let extra = document.createElement('div');
    extra.classList.add('extra');

    let btn = document.createElement('button');
    btn.classList.add('tiny', 'ui', 'blue', 'right', 'floated', 'button');
    btn.innerText = 'Copy to Clipboard';

    extra.appendChild(btn);

    content.appendChild(extra);

    item.append(content);

    return item;
}

const salutations = (data) => {
    const divItems = document.createElement('div');
    divItems.classList.add('ui', 'divided', 'items');

    for(let i of data){
        let res = i.response;
        for(let j of res){
            divItems.appendChild(buildItemDiv(j));
        }
    }
    return divItems;
}



const buildSections = () => {
    const segment = document.createElement('div');
    segment.classList.add('ui', 'clearing', 'segment');

    //call salutations
    const greetings = salutations(standardInfo);

    //add everything together
    segment.append(greetings);


    return segment;
}


// const div0 = document.createElement('div');
// div0.classList.add('ui', 'container');

// const div1 = document.createElement('div');
// div1.classList.add('ui','grid');

// const div2 = document.createElement('div');
// div2.classList.add('ten', 'wide', 'column');

// const div3 = document.createElement('div');
// div3.classList.add('ui', 'clearing', 'segment');

// const div4 = document.createElement('div');
// div4.classList.add('ui', 'divided', 'items');

// const div5 = document.createElement('div');
// div5.classList.add('item');

// const div6 = document.createElement('div');
// div6.classList.add('content');

// const p = document.createElement('p');
// p.innerText = 'Testing';

// const div7 = document.createElement('div');
// div7.classList.add('six', 'wide', 'column');

// div0.appendChild(div1);

// div1.appendChild(div2);
// div1.appendChild(div7);

// div2.appendChild(div3);

// div3.appendChild(div4);

// div4.appendChild(div5);

// div5.appendChild(div6);

// div6.appendChild(p);

//document.body.appendChild(div0);

const title = () => {

    const header = document.createElement('h1');
    header.classList.add('left', 'aligned');

    header.innerText = 'HP Chat Responses';

    return header;
}

const applyButtonEvents = () => {
    let buttons = document.getElementsByTagName('button');

    for(btn of buttons){
        btn.addEventListener('click', function(){
            const extra = this.parentElement;
            const item = extra.parentElement;
            const text = item.childNodes[0].innerText;
    
            //create text area to copy text from, ie to use the select() method
            let elem = document.createElement('textarea');
            document.body.appendChild(elem);
            elem.value = text;
            elem.select();
            document.execCommand('copy');
            document.body.removeChild(elem);
        });
    }
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

    document.body.append(container);

    applyButtonEvents();

    return null;
}

buildPage();

//Handling Events
//-------------------------------------------------------------------------------
//allow for the dropdown to respond to clicks
$('.ui.selection.dropdown')
    .dropdown({
        onChange: function($selectedItem){
            const elem = document.getElementsByClassName('ui divided items');
            const div = elem[0];

            const divChildren = div.children;
            if(divChildren.length > 4){
                divChildren[4].remove();
            }

            for(res of responses){
                if(res.key.toLowerCase() === $selectedItem){

                    div.appendChild(buildItemDiv(res.response));

                    applyButtonEvents();
                }
            }
        }
    });
;








