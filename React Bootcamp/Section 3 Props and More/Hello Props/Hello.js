class Hello extends React.Component {
    render(){
        console.log(this.props);
        const props = this.props; //by doing this can remove the this in the return
        return (
        <p>Hi {this.props.to} from {this.props.from}!</p>
        )
    }
}