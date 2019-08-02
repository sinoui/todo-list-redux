import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import TodoApp from './todo-app';
// import todoApp from './reducers';
import './primitive.css';

/**
 * redux例子
 */
import TodoApp from './todo/todo-app';
import todoApp from './todo/reducers';

const store = createStore(todoApp);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;

// import App from './todo-immer/TodoApp';

// import App from './todo-container/TodoApp';

// import App from './use-rest-table/TableList';
// import { ThemeProvider } from 'sinoui-components/styles';
// import defaultTheme from 'sinoui-components/styles/defaultTheme';
// import { Route, Link, Switch } from 'react-router-dom';
// import { Router } from 'react-router';
// import routes from './routes';
// import createHistory from 'history/createBrowserHistory';
// // import { ConnectedRouter } from 'react-router-redux';

// function AppNew() {
//   const history = createHistory();

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Router history={history}>
//         <Switch>
//           {routes.map((route) => (
//             <Route
//               key={route.path}
//               path={route.path}
//               component={route.component}
//               exact
//             />
//           ))}
//         </Switch>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default AppNew;
