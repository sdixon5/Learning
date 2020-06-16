using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HealthTracker.Models
{
    public partial class DataContext : DbContext
    {
        public DataContext()
        {
        }

        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Responses> Responses { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS;Initial Catalog=Heath_Tracker;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Responses>(entity =>
            {
                entity.HasKey(e => e.ResId)
                    .HasName("PK__Response__11B934A5FE21FB93");

                entity.Property(e => e.ResId).ValueGeneratedNever();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Responses)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Responses__User___286302EC");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Users__206D917095F8BE64");

                entity.Property(e => e.UserId).ValueGeneratedNever();

                entity.Property(e => e.SAmacountName).IsUnicode(false);
            });

            modelBuilder.HasSequence("Res_Id");

            modelBuilder.HasSequence("User_Id");

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
