"use strict";

var Results = function Results(_ref) {
  var title = _ref.title,
      ronSays = _ref.ronSays;

  return React.createElement(
    "li",
    null,
    React.createElement(
      "h4",
      null,
      "On: ",
      React.createElement(
        "span",
        { className: "title" },
        title
      )
    ),
    React.createElement(
      "p",
      null,
      "Ron Feels: ",
      ronSays.slice(1, ronSays.length - 2),
      " "
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9yZXN1bHRzLmpzIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJ0aXRsZSIsInJvblNheXMiLCJzbGljZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsT0FBc0I7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBYkMsT0FBYSxRQUFiQSxPQUFhOztBQUNwQyxTQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQVE7QUFBQTtBQUFBLFVBQU0sV0FBVSxPQUFoQjtBQUF5QkQ7QUFBekI7QUFBUixLQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBZUMsY0FBUUMsS0FBUixDQUFjLENBQWQsRUFBaUJELFFBQVFFLE1BQVIsR0FBaUIsQ0FBbEMsQ0FBZjtBQUFBO0FBQUE7QUFGQSxHQURGO0FBTUQsQ0FQRCIsImZpbGUiOiJyZXN1bHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmVzdWx0cyA9ICh7dGl0bGUsIHJvblNheXN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgIDxoND5PbjogPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9zcGFuPjwvaDQ+XG4gICAgPHA+Um9uIEZlZWxzOiB7cm9uU2F5cy5zbGljZSgxLCByb25TYXlzLmxlbmd0aCAtIDIpfSA8L3A+XG4gICAgPC9saT5cbiAgKTtcbn0iXX0=