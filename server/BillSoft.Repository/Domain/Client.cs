using System;
namespace BillSoft.Repository.Domain
{
    public class Client
    {
        public int Id { get; set; }
        public string Person { get; set; }
        public string Company { get; set; }
        public string Email { get; set; }
        public string Mobile_Number { get; set; }
        public string Work_Phone { get; set; }
        public string Currency { get; set; }
        public string Billing_Address { get; set; }
        public string Shipping_Address { get; set; }
        public DateTime Created { get; set; }
    }
}