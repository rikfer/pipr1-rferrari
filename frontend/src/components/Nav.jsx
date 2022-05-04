/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Select from "./Select";

function Nav() {
  const dropdownButtons = [
    "Guardar y salir",
    "Salir sin guardar",
    "Guardar y continuar",
  ];

  return (
    <div>
      <nav
        className="
            relative
            w-full
            flex flex-wrap
            items-center
            justify-between
            py-4
            bg-stone-800
            text-gray-200
            shadow-lg
            navbar navbar-expand-lg navbar-light
            "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="flex space-x-3 ml-48">
            <div className="container-fluid">
              <a
                className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
                href="#"
              >
                <img
                  src="./pipr1-logo.png"
                  style={{ height: "20px" }}
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <span>editar medidas</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div>
              <span>nuevo proyecto</span>
            </div>
            <div>
              <Select selectOptions={dropdownButtons} />
            </div>
            <div className="px-8"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
