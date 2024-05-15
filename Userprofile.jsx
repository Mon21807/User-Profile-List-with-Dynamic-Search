function UserProfile({ user }) {
    return (
      <div className="user-profile">
        <img src={user.avatar} alt={user.name} />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    );
  }
  