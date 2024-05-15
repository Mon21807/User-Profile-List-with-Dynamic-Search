// App.js
function App() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredUsers, setFilteredUsers] = React.useState([]);
  
    React.useEffect(() => {
      // Fetch user data from an API or use a predefined array of users
      const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
        // Add more user profiles as needed
      ];
  
      // Filter users based on search term
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, [searchTerm]);
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
        <h1>User Profiles</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        {filteredUsers.map(user => (
          <UserProfile key={user.id} user={user} />
        ))}
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  