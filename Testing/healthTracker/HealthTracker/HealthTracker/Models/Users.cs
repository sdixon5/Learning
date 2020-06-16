using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HealthTracker.Models
{
    public partial class Users
    {
        public Users()
        {
            Responses = new HashSet<Responses>();
        }

        [Key]
        [Column("User_Id")]
        public int UserId { get; set; }
        [Column("sAMAcountName")]
        [StringLength(50)]
        public string SAmacountName { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<Responses> Responses { get; set; }
    }
}
