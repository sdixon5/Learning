class App extends React.Component {
    render(){
        return(
            <div>
                <Hello to="Tony" from="Pepper"/>
                <Hello to="Peter" from="Aunt May"/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));