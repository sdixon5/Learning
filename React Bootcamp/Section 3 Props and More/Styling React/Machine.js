class Machine extends React.Component {
    render(){
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3); //will return true/false
        const colors = { fontSize: '50px', backgroundColor: 'pink'};
        return (
            <div className="Machine">
                {/* <p style={{fontSize: '50px', backgroundColor: 'pink'}}> */}
                <p style={colors}>
                    {s1} {s2} {s3}
                </p>
                <p className={winner ? 'win': 'lose'}>
                    {winner ? 'Winner!' : 'Loser'}
                </p>
            </div>
        );
    }
}