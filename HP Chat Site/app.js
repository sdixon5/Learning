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
        response: ""
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
            ""
        ]
    }
];

const createDropDown = (data) => {
    let dropDown = document.createElement('select');

    dropDown.appendChild(new Option('Select Issue'));

    for(let i of data){
        let dropDownData = new Option(i.key);
        dropDown.appendChild(dropDownData);
    }

    return dropDown;
}

const salutations = (data) => {
    let divs = document.createElement('div');
    //div.classList.add('ui segment');

    for(let i of data){
        let res = i.response;
        for(let j of res){
            let div = document.createElement('div');
            //div.classList.add('ui segment');
            let p = document.createElement('p');
            p.innerText = j;
            div.appendChild(p);
            divs.appendChild(div);
        }
    }
    return divs;
}

const element = createDropDown(responses);

document.body.append(element);

const divs = salutations(standardInfo);

document.body.append(divs);


//testing
// let txt = 'testing/rwhat up/nhope it works';
// const test = document.createElement('p');
// test.innerHTML = txt;
// document.body.append(test);