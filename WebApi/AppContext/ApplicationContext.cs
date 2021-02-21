using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;
using WebApi.Models;

namespace WebApi.AppContext
{
    public class ApplicationContext : DbContext
    {

        public DbSet<PersonEntity> Persons {get; set;}
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }        


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PersonEntity>().HasData(new PersonEntity
            {
                Id = 1,
                CreationDate = DateTime.UtcNow,
                IsRemoved = false,
                Name = "ThisPersonCreated in OnModelCreating",
                Surname = "He is alone"
            });


            base.OnModelCreating(modelBuilder);
        }
    }
}
