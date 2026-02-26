import React from "react";
import Employee from "../../Assets/Employee database.png";
import NewsBlog from "../../Assets/News Blog.png";
import QuickBasket from "../../Assets/ProductsPage.png";
import TaskManager from "../../Assets/Task Manager.png";

const Portfolio = () => {
  return (
    <div className="projects-container">
      <h2 className="page-titles" style={{ textAlign: "center", textDecoration: "underline" }}>
        Portfolio Projects
      </h2>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="card border-secondary p-3" style={{ width: "35rem" }}>
          <img src={TaskManager} className="app-image card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title fs-3">Task Manager</h5>
            <a
              href="https://github.com/anayoifediora/Task_Manager"
              class="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://limitless-savannah-15649-a45e9921acb2.herokuapp.com/"
              class="card-link"
              target="_blank"
              rel="noreferrer"
            >
              App link
            </a>
          </div>
        </div>
        {/* <div className="card border-secondary p-3" style={{ width: "35rem" }}>
          <img
            src={Employee}
            className="app-image card-img-top"
            alt="..."
            style={{ height: "310px" }}
          />
          <div class="card-body border-secondary p-3">
            <h5 class="card-title fs-3">Employee Database, Node.js App</h5>
            <a
              href="https://github.com/anayoifediora/Employee-database-tracker"
              class="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://drive.google.com/file/d/1-tsCeRqngHLqYjwlLJfxiRkfAl07ncB7/view"
              class="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Video Demo
            </a>
          </div>
        </div> */}
      </div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="card border-secondary p-3" style={{ width: "35rem" }}>
          <img src={QuickBasket} className="app-image card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title fs-3">QuickBasket</h5>
            <a
              href="https://github.com/anayoifediora/Quick_Basket"
              class="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://calm-depths-26151-e1b19dd0ae9d.herokuapp.com/"
              class="card-link"
              target="_blank"
              rel="noreferrer"
            >
              App link
            </a>
          </div>
        </div>
        <div className="card border-secondary p-3" style={{ width: "35rem" }}>
          <img src={NewsBlog} className="app-image card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title fs-3">News Blog</h5>
            <a
              href="https://github.com/anayoifediora/News_blog"
              class="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://polar-retreat-55591-2059c19c0b3a.herokuapp.com/"
              class="card-link"
              target="_blank"
              rel="noreferrer"
            >
              App link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
