using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HealthTracker.Models
{
    public partial class Responses
    {
        [Key]
        [Column("Res_Id")]
        public int ResId { get; set; }
        public bool? Cough { get; set; }
        public bool? MuscleAches { get; set; }
        public bool? Migrane { get; set; }
        [Column("User_Id")]
        public int? UserId { get; set; }

        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(Users.Responses))]
        public virtual Users User { get; set; }
    }
}
