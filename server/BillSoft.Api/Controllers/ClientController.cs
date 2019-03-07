using BillSoft.Repository.Domain;
using BillSoft.Services.SClient;
using Microsoft.AspNetCore.Mvc;

namespace BillSoft.Api.Controllers
{
    [Route("api/client")]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;
        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }
        [HttpGet]
        [Route("{id}")]
        public IActionResult Get([FromRoute] int id)
        {
            var client = _clientService.GetById(id);
            if(client == null)
                return NotFound();
            return  Ok(client);
        }
        [HttpGet]
        [Route("")]
        public IActionResult GetAll()
        {
            var clients = _clientService.GetAll();
            return Ok(clients);
        }
        [HttpPost]
        [Route("")]
        public IActionResult Post([FromBody] Client model)
        {
            _clientService.Insert(model);
            return Ok();
        }
        [HttpPut]
        [Route("")]
        public IActionResult Put([FromBody] Client model)
        {
            _clientService.Update(model);
            return Ok();
        }
        [HttpDelete]
        [Route("")]
        public IActionResult Delete([FromBody] Client model)
        {
            _clientService.Delete(model);
            return Ok();
        }
    }
}