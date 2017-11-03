class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ronSays: [],
      url: '',
      summary: [],
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGetSummary = this.handleGetSummary.bind(this);
    this.handleRon = this.handleRon.bind(this);

  }
  handleInput(event) {
    this.setState({url: event.target.value});
  }
  handleGetSummary(summary){
    this.setState({summary: summary})
    console.log(this.state.summary);
  }
  handleRon(ronsWords) {
    this.setState({ronSays: ronsWords.data});
    console.log(this.state.ronSays);
  }
  handleSubmit() {
    let url = this.state.url;
    //clear the input text aftersubmission
    this.state.url = '';
    axios.post('/summary', {url: url})
    .then((response) =>  {
      this.handleGetSummary(response.data)
      return axios.get('/rons-words')
      .then(this.handleRon)
    })
    .catch((error) => console.log(error));
  }
  render() {
    let summary = this.state.summary;
    let ronSays = this.state.ronSays;
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
          {summary.length > 0 ? <h3>Summary:</h3> : null}
          {summary.map((sentence, idx) => <Sentence sentence={sentence} key={idx}/>)}
          {ronSays.length > 0 ? <h3>How does ron feel about it:</h3> : null}
          {ronSays.length > 0 ? <p className="ron">{ronSays}</p> : null}
        </div>
      </div>
    );
  }
}


