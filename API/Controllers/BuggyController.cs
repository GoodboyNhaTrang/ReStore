using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BasicApiController
    {
        [HttpGet("bad-request")]

  public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails{Title="This is bad request"});
        }

        [HttpGet("unauthorised")]
  public ActionResult GetUnauthorised()
        {
            return Unauthorized();
        }

           [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1","This is the first error") ;
            ModelState.AddModelError("Problem2","This is the secondary error") ;
            return ValidationProblem();

        }
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

            [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
           throw new Exception("this is server error");
        }
    }
}