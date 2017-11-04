'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      ronSays: [],
      url: '',
      article: { summary: [], title: '' },
      results: []
    };
    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleGetSummary = _this.handleGetSummary.bind(_this);
    _this.handleRon = _this.handleRon.bind(_this);
    _this.getResults = _this.getResults.bind(_this);
    _this.handleResults = _this.handleResults.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'handleInput',
    value: function handleInput(event) {
      this.setState({ url: event.target.value });
    }
  }, {
    key: 'handleGetSummary',
    value: function handleGetSummary(data) {
      this.setState({ article: data });
      // console.log(this.state.article);
    }
  }, {
    key: 'handleRon',
    value: function handleRon(ronsWords) {
      this.setState({ ronSays: ronsWords.data });
      // console.log(this.state.ronSays);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _this2 = this;

      var url = this.state.url;
      //clear the input text after submission
      this.state.url = '';
      axios.post('/summary', { url: url }).then(function (response) {
        _this2.handleGetSummary(response.data);
        return axios.get('/rons-words').then(_this2.handleRon);
      }).catch(function (error) {
        return console.log(error);
      });
    }
  }, {
    key: 'handleResults',
    value: function handleResults(results) {
      this.setState({ results: results.data });
      // console.log('STATE: ', this.state.results);
    }
  }, {
    key: 'getResults',
    value: function getResults() {
      axios.get('/results').then(this.handleResults);
    }

    //TODO render title

  }, {
    key: 'render',
    value: function render() {
      var _state$article = this.state.article,
          summary = _state$article.summary,
          title = _state$article.title;

      var ronSays = this.state.ronSays;
      var results = this.state.results;
      return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(
          'header',
          { className: 'App-header' },
          React.createElement(
            'h1',
            { className: 'App-title' },
            'What does ron think?'
          )
        ),
        React.createElement(
          'p',
          { className: 'App-intro' },
          'Enter url to get a summary of the text. Then see how ron swanson feels about it.'
        ),
        React.createElement(
          'div',
          { className: 'url' },
          React.createElement('input', { className: 'form-control', type: 'text', value: this.state.url, onChange: this.handleInput }),
          React.createElement(
            'button',
            { className: 'submit', onClick: this.handleSubmit },
            'Analyze Text'
          ),
          React.createElement(
            'button',
            { className: 'get-results', onClick: this.getResults },
            'View Ron\'s Thoughts On Other Topics'
          )
        ),
        React.createElement(
          'div',
          { className: 'article' },
          summary.length > 0 ? React.createElement(
            'h3',
            null,
            'Summary (article reduced by 80%):'
          ) : null,
          summary.map(function (sentence, idx) {
            return React.createElement(Sentence, { sentence: sentence, key: idx });
          }),
          ronSays.length > 0 ? React.createElement(
            'h3',
            null,
            'How does ron feel about it:'
          ) : null,
          ronSays.length > 0 ? React.createElement(
            'p',
            { className: 'ron' },
            ronSays
          ) : null,
          React.createElement(
            'ul',
            { className: 'results' },
            results.map(function (result, idx) {
              return React.createElement(Results, { title: result.title, ronSays: result.ronSays, key: idx });
            })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInJvblNheXMiLCJ1cmwiLCJhcnRpY2xlIiwic3VtbWFyeSIsInRpdGxlIiwicmVzdWx0cyIsImhhbmRsZUlucHV0IiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUdldFN1bW1hcnkiLCJoYW5kbGVSb24iLCJnZXRSZXN1bHRzIiwiaGFuZGxlUmVzdWx0cyIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJyb25zV29yZHMiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsInNlbnRlbmNlIiwiaWR4IiwicmVzdWx0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxFQURFO0FBRVhDLFdBQUssRUFGTTtBQUdYQyxlQUFTLEVBQUNDLFNBQVMsRUFBVixFQUFjQyxPQUFPLEVBQXJCLEVBSEU7QUFJWEMsZUFBUztBQUpFLEtBQWI7QUFNQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCRixJQUF0QixPQUF4QjtBQUNBLFVBQUtHLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlSCxJQUFmLE9BQWpCO0FBQ0EsVUFBS0ksVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCSixJQUFoQixPQUFsQjtBQUNBLFVBQUtLLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxD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ckIsR0FBd0QsSUFKM0Q7QUFLRTtBQUFBO0FBQUEsY0FBSSxXQUFVLFNBQWQ7QUFDQ0ssb0JBQVF3QixHQUFSLENBQVksVUFBQ0csTUFBRCxFQUFTRCxHQUFUO0FBQUEscUJBQWlCLG9CQUFDLE9BQUQsSUFBUyxPQUFPQyxPQUFPNUIsS0FBdkIsRUFBOEIsU0FBUzRCLE9BQU9oQyxPQUE5QyxFQUF1RCxLQUFLK0IsR0FBNUQsR0FBakI7QUFBQSxhQUFaO0FBREQ7QUFMRjtBQVpGLE9BREY7QUF3QkQ7Ozs7RUE3RWVFLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByb25TYXlzOiBbXSxcbiAgICAgIHVybDogJycsXG4gICAgICBhcnRpY2xlOiB7c3VtbWFyeTogW10sIHRpdGxlOiAnJ30sXG4gICAgICByZXN1bHRzOiBbXVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUdldFN1bW1hcnkgPSB0aGlzLmhhbmRsZUdldFN1bW1hcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVJvbiA9IHRoaXMuaGFuZGxlUm9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRSZXN1bHRzID0gdGhpcy5nZXRSZXN1bHRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVSZXN1bHRzID0gdGhpcy5oYW5kbGVSZXN1bHRzLmJpbmQodGhpcyk7XG5cbiAgfVxuICBoYW5kbGVJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3VybDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cbiAgaGFuZGxlR2V0U3VtbWFyeShkYXRhKXtcbiAgICB0aGlzLnNldFN0YXRlKHthcnRpY2xlOiBkYXRhfSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5hcnRpY2xlKTtcbiAgfVxuICBoYW5kbGVSb24ocm9uc1dvcmRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cm9uU2F5czogcm9uc1dvcmRzLmRhdGF9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnJvblNheXMpO1xuICB9XG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBsZXQgdXJsID0gdGhpcy5zdGF0ZS51cmw7XG4gICAgLy9jbGVhciB0aGUgaW5wdXQgdGV4dCBhZnRlciBzdWJtaXNzaW9uXG4gICAgdGhpcy5zdGF0ZS51cmwgPSAnJztcbiAgICBheGlvcy5wb3N0KCcvc3VtbWFyeScsIHt1cmw6IHVybH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAge1xuICAgICAgdGhpcy5oYW5kbGVHZXRTdW1tYXJ5KHJlc3BvbnNlLmRhdGEpXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KCcvcm9ucy13b3JkcycpXG4gICAgICAudGhlbih0aGlzLmhhbmRsZVJvbilcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH1cbiAgaGFuZGxlUmVzdWx0cyhyZXN1bHRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVzdWx0czogcmVzdWx0cy5kYXRhfSlcbiAgICAvLyBjb25zb2xlLmxvZygnU1RBVEU6ICcsIHRoaXMuc3RhdGUucmVzdWx0cyk7XG4gIH1cbiAgZ2V0UmVzdWx0cygpIHtcbiAgICBheGlvcy5nZXQoJy9yZXN1bHRzJykudGhlbih0aGlzLmhhbmRsZVJlc3VsdHMpO1xuICB9XG5cbiAgLy9UT0RPIHJlbmRlciB0aXRsZVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtzdW1tYXJ5LCB0aXRsZX0gPSB0aGlzLnN0YXRlLmFydGljbGU7XG4gICAgbGV0IHJvblNheXMgPSB0aGlzLnN0YXRlLnJvblNheXM7XG4gICAgbGV0IHJlc3VsdHMgPSB0aGlzLnN0YXRlLnJlc3VsdHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiQXBwLWhlYWRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJBcHAtdGl0bGVcIj5XaGF0IGRvZXMgcm9uIHRoaW5rPzwvaDE+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJBcHAtaW50cm9cIj5cbiAgICAgICAgIEVudGVyIHVybCB0byBnZXQgYSBzdW1tYXJ5IG9mIHRoZSB0ZXh0LiBUaGVuIHNlZSBob3cgcm9uIHN3YW5zb24gZmVlbHMgYWJvdXQgaXQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cmxcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cmx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fS8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+QW5hbHl6ZSBUZXh0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJnZXQtcmVzdWx0c1wiIG9uQ2xpY2s9e3RoaXMuZ2V0UmVzdWx0c30+VmlldyBSb24ncyBUaG91Z2h0cyBPbiBPdGhlciBUb3BpY3M8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxuICAgICAgICAgIHtzdW1tYXJ5Lmxlbmd0aCA+IDAgPyA8aDM+U3VtbWFyeSAoYXJ0aWNsZSByZWR1Y2VkIGJ5IDgwJSk6PC9oMz4gOiBudWxsfVxuICAgICAgICAgIHtzdW1tYXJ5Lm1hcCgoc2VudGVuY2UsIGlkeCkgPT4gPFNlbnRlbmNlIHNlbnRlbmNlPXtzZW50ZW5jZX0ga2V5PXtpZHh9Lz4pfVxuICAgICAgICAgIHtyb25TYXlzLmxlbmd0aCA+IDAgPyA8aDM+SG93IGRvZXMgcm9uIGZlZWwgYWJvdXQgaXQ6PC9oMz4gOiBudWxsfVxuICAgICAgICAgIHtyb25TYXlzLmxlbmd0aCA+IDAgPyA8cCBjbGFzc05hbWU9XCJyb25cIj57cm9uU2F5c308L3A+IDogbnVsbH1cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0LCBpZHgpID0+IDxSZXN1bHRzIHRpdGxlPXtyZXN1bHQudGl0bGV9IHJvblNheXM9e3Jlc3VsdC5yb25TYXlzfSBrZXk9e2lkeH0gLz4pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbiJdfQ==