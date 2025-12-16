const React = require('react');

module.exports = {
  BrowserRouter: ({ children }) => React.createElement('div', null, children),
  Routes: ({ children }) => React.createElement('div', null, children),
  Route: () => null,
  Navigate: () => null,
  Link: ({ children, to }) => React.createElement('a', { href: to }, children),
  useLocation: () => ({ pathname: '/today' }),
  useNavigate: () => jest.fn(),
  useParams: () => ({}),
};
