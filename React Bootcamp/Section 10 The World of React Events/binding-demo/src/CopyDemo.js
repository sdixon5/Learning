import React, { Component } from 'react'

export default class CopyDemo extends Component {
    handleCopy(){
        alert('Stop Stealing from Me!');
    }
    
    render() {
        return (
            <div>
                <h3>Try to Copy some of this text: </h3>
                <section style={{ width: '300px', display: 'inline-block'}} onCopy={this.handleCopy}>
                The Witcher 3: Wild Hunt[a] is a 2015 action role-playing game developed and published by CD Projekt and based on The Witcher series of fantasy novels by Andrzej Sapkowski. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings, played in an open world with a third-person perspective. Players control protagonist Geralt of Rivia, a monster hunter (known as a Witcher) who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her and use her powers. Players battle the game's many dangers with weapons and magic, interact with non-player characters, and complete main-story and side quests to acquire experience points and gold, which are used to increase Geralt's abilities and purchase equipment. Its central story has several endings, determined by the player's choices at certain points in the game.

                Development began in 2011 and lasted for three and a half years. Voice recording took more than two and a half years. The writing was infused with realistic aspects such as moral ambiguity in an attempt to avoid simplification, impart authenticity, and reflect Sapkowski's novels. Central and Northern European cultures formed the basis of the game's world. REDengine 3 enabled the developer to create a complex story without compromising the game's open world. The music was composed by Marcin Przybyłowicz and performed by the Brandenburg State Orchestra.

                The Witcher 3: Wild Hunt was released for Microsoft Windows, PlayStation 4, and Xbox One in May 2015, with a Nintendo Switch version released in October 2019. The game received critical acclaim, with praise for its gameplay, narrative, world design, combat, and visuals, although it received minor criticism due to technical issues. It received numerous Game of the Year awards and has been cited as one of the greatest video games ever made. It was also a commercial success, shipping more than 20 million copies by June 2019. Two expansions were also released to critical acclaim: Hearts of Stone and Blood and Wine. A Game of the Year edition was released in August 2016, with the base game, expansions, and all downloadable content.
                </section>
            </div>
        )
    }
}
