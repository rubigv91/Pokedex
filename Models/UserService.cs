namespace Pokedex.Models
{
    public class UserService
    {
       private readonly List<User> _users;

        int i = 0;
       public UserService(List<User> users) {
        _users = users;

        }
         
        public User Add(User user) {
            user.Id = ++i;
            _users.Add(user);
            return (user);
        
        }

        public List<User> GetList() {
        return _users;
        }
    }
}
