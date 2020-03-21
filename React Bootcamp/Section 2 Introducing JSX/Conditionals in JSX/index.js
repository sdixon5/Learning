function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();

        let msg;
        if(num === 7){
            msg = 
            <div>
                <h4>Congrats you Win!</h4>
                <iframe src="https://giphy.com/embed/nXxOjZrbnbRxS" width="356" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
        }
        else{
            msg = 
            <div>
                <p>Sorry, better luck next time</p>
            </div>
        }

        return (
            <div>
                <h1>Your number is {num}</h1>
                {/* <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
                {num === 7 &&
                    <iframe src="https://giphy.com/embed/nXxOjZrbnbRxS" width="356" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                } */}
                {msg}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker/>, document.getElementById('root'));