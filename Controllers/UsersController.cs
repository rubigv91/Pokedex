using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pokedex.Models;

namespace Pokedex.Controllers
{
    [Route("api/[controller]")]
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
        public ActionResult Get()
        {

            return Ok(_userService.GetList());
        }
    }
}
