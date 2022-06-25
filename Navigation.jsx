import React from "react";
import { Navbar } from "react-bootstrap";
import "../css/main.css";
function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <button
        class="navbar-toggler mb-2 bg-light"
        data-toggle="collapse"
        data-target="#mynav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="mynav">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
              <a
                href=""
                class="navbar-brand text-white d-block text-center mx-auto py-3 mb-4 bottom-border"
              >
                نئون
              </a>
              <div class="bottom-border pb-3">
                <img
                  src="./images/profile.jpg"
                  class="rounded-circle ml-3"
                  style={{ width: "50px" }}
                  alt=""
                />
                <a class="text-white" href="">
                  فرشید قلج خانی
                </a>
              </div>
              <ul class="nav-bar list-unstyled flex-column mt-4">
                <li class="nav-item current">
                  <a href="" class="nav-link text-white p-3 mb-2">
                    <i class="fas fa-home fa-lg ml-3"></i>داشبورد
                  </a>
                </li>
                <li class="nav-item sidebar-link">
                  <a href="" class="nav-link text-white p-3 mb-2">
                    <i class="fas fa-user fa-lg ml-3"></i>پروفایل
                  </a>
                </li>
                <li class="nav-item sidebar-link">
                  <a href="" class="nav-link text-white p-3 mb-2">
                    <i class="fas fa-envelope fa-lg ml-3"></i>پیام ها
                  </a>
                </li>
                <li class="nav-item sidebar-link">
                  <a href="" class="nav-link text-white p-3 mb-2">
                    <i class="fas fa-shopping-cart fa-lg ml-3"></i>فروش
                  </a>
                </li>
                <li class="nav-item sidebar-link">
                  <a href="" class="nav-link text-white p-3 mb-2">
                    <i class="fas fa-chart-line fa-lg ml-3"></i>تحلیل
                  </a>
                </li>
                <li class="nav-item sidebar-link">
                  <a href="" class="nav-link text-white p-3 mb-2">
                    <i class="fas fa-chart-bar fa-lg ml-3"></i>نمودار ها
                  </a>
                </li>
                <li class="nav-item sidebar-link">
                  <a href="" class="nav-link text-white p-3 mb-2">
                    <i class="fas fa-table fa-lg ml-3"></i> جدول ها
                  </a>
                </li>
                <li class="nav-item sidebar-link">
                  <a href="" class="nav-link text-white p-3 mb-2">
                    <i class="fas fa-wrench fa-lg ml-3"></i> تنظیمات
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xl-10 col-lg-9 col-md-8 bg-dark mr-auto fixed-top py-2 top-navbar">
              <div class="row">
                <div class="col-md-4">
                  <h4 class="text-light">داشبورد</h4>
                </div>
                <div class="col-md-5">
                  <form class="my-4 my-md-0" action="">
                    <div class="input-group">
                      <button class="btn btn-white search-button">
                        <i class="fas fa-search text-danger"></i>
                      </button>
                      <input
                        type="text"
                        placeholder="جستجو ..."
                        class="form-control search-input"
                      />
                    </div>
                  </form>
                </div>
                <div class="col-md-3">
                  <ul class="navbar-nav flex-row justify-content-between">
                    <li class="nav-item">
                      <a href="" class="nav-link">
                        <i class="fas fa-comments fa-lg text-muted"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">
                        <i class="fas fa-bell fa-lg text-muted"></i>
                      </a>
                    </li>
                    <li class="nav-item mr-md-auto">
                      <a
                        href="#logoutModal"
                        data-toggle="modal"
                        class="nav-link"
                      >
                        <i class="fas fa-sign-out-alt fa-lg text-danger"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
