class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ronSays: null,
      url: '',
      summary: null,
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGetSummary = this.handleGetSummary.bind(this);

  }
  handleInput(event) {
    this.setState({url: event.target.value});
  }
  handleGetSummary(data){
    this.setState({summary: data})
    console.log(this.state.summary);
  }
  handleSubmit() {
    axios.post('/summary', {url: this.state.url})
    .then((response) => this.handleGetSummary(response.data))
    .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">What does ron think?</h1>
        </header>
        <p className="App-intro">
         Enter url to get a summary of the text. Then see how ron swanson feels about it.
        </p>
        <div className="url">
          <input className="form-control" type="text" value={this.state.url} onChange={this.handleInput}/>
          <button className="submit" onClick={this.handleSubmit}>Analyze Text</button>
        </div>
        <div className="article">
        {/*this.props.summary.map((sentence) => <Sentence sentence={sentence}/>*/}
        </div>
      </div>
    );
  }
}


