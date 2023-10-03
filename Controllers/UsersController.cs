
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pokedex.Models;


namespace Pokedex.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

     
    public class UsersController : ControllerBase
    {

        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public ActionResult Add([FromBody] User user)
        {
            _userService.Add(user);
            return Created("/login",user);
        }

        [HttpGet]
        public ActionResult ReadLogin([FromQuery(Name="email")] string email, [FromQuery(Name = "pwd")] string pwd)
        {
            var userlogin = new UserLogin()
            {
                email = email,
                pwd = pwd   
            };


            var check = _userService.ReadLogin(userlogin);
            if (check != null)
            {

                return Ok(true);
            }
            return NoContent();
        }

        [HttpGet]
        public ActionResult Get()
        {

            return Ok(_userService.GetList());
        }
    }
}
