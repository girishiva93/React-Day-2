import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/form.css";
import image from "../form/src/first.jpg";

const Form = () => {
  const [valid, setValid] = useState();
  const [count, setCount] = useState(1);
  const NONE = { display: "none" };

  return (
    <>
      <Navbar />
      <main>
        <div className="bg_color">
          <div className="form_container">
            <div className="row">
              <div className="col">
                <form id="msform">
                  {count === 1 ? (
                    <div>
                      <ul id="progressbar">
                        <li className="active" id="account"></li>
                        <li id="personal"></li>
                        <li id="payment"></li>
                        <li id="confirm"></li>
                      </ul>
                      <hr />
                      <div className="heading">
                        <h3>Select Service Category</h3>
                        <div className="row">
                          <div className="col-6">
                            <div className="col-3">
                              <img
                                src={image}
                                alt="Title"
                                width="100%"
                                className="form_product_img"
                              />
                            </div>
                            <div className="col-4">
                              <h5>Housing Services</h5>
                              <p>5 Service Name</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="col-3">
                              <img
                                src={image}
                                alt="Title"
                                width="100%"
                                className="form_product_img"
                              />
                            </div>
                            <div className="col-4">
                              <h5>Housing Services</h5>
                              <p>5 Service Name</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {count === 2 ? (
                    <div>
                      <ul id="progressbar">
                        <li id="account"></li>
                        <li className="active" id="personal"></li>
                        <li id="payment"></li>
                        <li id="confirm"></li>
                      </ul>
                      <hr />
                      <div>
                        <h1>hello</h1>
                      </div>
                    </div>
                  ) : null}
                  {count === 3 ? (
                    <div>
                      <ul id="progressbar">
                        <li id="account"></li>
                        <li id="personal"></li>
                        <li className="active" id="payment"></li>
                        <li id="confirm"></li>
                      </ul>
                      <hr />
                      <div>
                        <h1>Entry Form</h1>
                      </div>
                    </div>
                  ) : null}
                  {count === 4 ? (
                    <div>
                      <ul id="progressbar">
                        <li id="account"></li>
                        <li id="personal"></li>
                        <li id="payment"></li>
                        <li className="active" id="confirm"></li>
                      </ul>
                      <hr />
                      <div>
                        <h1>Success</h1>
                      </div>
                    </div>
                  ) : null}
                </form>
              </div>
              <div className="next">
                {count === 4 ? (
                  <button
                    className="contact-btn"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    style={NONE}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="contact-btn"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Form;