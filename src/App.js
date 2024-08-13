import logo from './logo.svg';
import './App.css';
import UsersList from './UsersList';
import UsersListAzure from './UserListAzure';

const App = () => {
  return (
    <div className="App">
      {/* <UsersList /> */}
      <UsersListAzure />
    </div>
  );
};

export default App;