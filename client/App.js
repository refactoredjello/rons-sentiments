class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ronSays: null,
      url: null,
      response: null,
    }
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
        <div className="">
          <input className="form-control" type="text" />
          <button className="submit">Analyze Text</button>
        </div>
      </div>
    );
  }
}

