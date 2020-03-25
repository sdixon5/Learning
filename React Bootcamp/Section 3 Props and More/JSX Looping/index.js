class App extends React.Component {
    render(){
        return(
            <div>
                <Friend
                    name = "Tony Stark"
                    hobbies = {['Building Things', 'Flying', 'Being Iron Man']}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));