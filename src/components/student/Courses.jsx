import React from "react";
import ecommerce from "../../assets/ecommerce.jpg";
import Button from "../Ui/Button";
function Courses() {
  return (
    <div className="bg-gray-200">
      <h1 className="text-5xl font-bold p-4">Popular Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div>
          <img src={ecommerce} alt="html course" />
          <div className="bg-white p-4">
            <h1 className="lg:text-5xl md:text-3xl text-5xl font-bold">
              HTML5/CSS3 Essentials
            </h1>
            <p className="py-5">
              we will learn the basic of the html code,we will learn the basic
              of the html code
            </p>
            <Button />
          </div>
        </div>
        <div>
          <img src={ecommerce} alt="wordpress course" />
          <div className="bg-white p-4">
            <h1 className="lg:text-5xl md:text-3xl text-5xl font-bold">
              WordPress Basic Tutorial
            </h1>
            <p className="py-5">
              the basic tutorila or wordpress is here, the basic tutorila or
              wordpress is here
            </p>
            <Button />
          </div>
        </div>
        <div>
          <div>
            <img src={ecommerce} alt="ecommerce course" />
            <div className="bg-white p-4">
              <h1 className="lg:text-5xl md:text-3xl text-5xl font-bold">
                E-Commerce Course
              </h1>
              <p className="py-5">
                This is the most popular course, This is the most popular course
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
