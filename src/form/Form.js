import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/form.css";
import image from "../form/src/first.jpg";
import { MdCloudDone } from "react-icons/md";

const Form = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState([]);
  const [person, setPerson] = useState({
    phone: "",
    fullName: "",
    email: "",
    address: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
    // console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.fullName && person.email && person.address && person.phone) {
      e.preventDefault();
      const newData = { ...person, id: new Date().getTime().toString() };
      setValue([...person, newData]);
      setError("Success");
      setPerson({ fullName: "", email: "", address: "", phone: "" });
    } else {
      setError("Some of the value are empty");
    }
  };
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
                      <div className="heading">
                        <div className="row">
                          <div className="col-md-6">
                            <h3>Select Service</h3>
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control-search"
                              placeholder="Search Product"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <img
                              src={image}
                              className="product_item_name"
                              alt="Title"
                              width="100%"
                            />
                            <p className="price">$20</p>
                            <p>Plumbing Service</p>
                          </div>
                          <div className="col-md-3">
                            <img
                              src={image}
                              alt="Title"
                              className="product_item_name"
                              width="100%"
                            />
                            <p className="price">$20</p>
                            <p>Plumbing Service</p>
                          </div>
                          <div className="col-md-3">
                            <img
                              src={image}
                              alt="Title"
                              className="product_item_name"
                              width="100%"
                            />
                            <p className="price">$20</p>
                            <p>Plumbing Service</p>
                          </div>
                          <div className="col-md-3">
                            <img
                              src={image}
                              alt="Title"
                              className="product_item_name"
                              width="100%"
                            />
                            <p className="price">$20</p>
                            <p>Plumbing Service</p>
                          </div>
                        </div>
                      </div>
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
                      <form onClick={handleSubmit}>
                        {error ? <p>{error}</p> : setError("")}
                        <div className="heading">
                          <h4>Contact</h4>
                          <div className="row">
                            <div className="col-md-6">
                              <label htmlFor="Name" className="name_id">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                name="fullName"
                                value={person.fullName}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="Email" className="name_id">
                                Email
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email Number"
                                name="email"
                                value={person.email}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="Phone" className="name_id">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                value={person.phone}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="Address" className="name_id">
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="address"
                                name="address"
                                value={person.address}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
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
                      <div className="heading">
                        <h4>Service Details</h4>
                        <div class="form-group">
                          <label for="comment" className="message_title">
                            Remarks:
                          </label>
                          <textarea
                            className="form-control-message"
                            rows="7"
                            id="comment"
                            placeholder="Service Remarks"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {count === 5 ? (
                  <div>
                    <ul id="progressbar">
                      <li id="account"></li>
                      <li id="personal"></li>
                      <li id="payment"></li>
                      <li className="active" id="confirm"></li>
                    </ul>
                    <hr />
                    <div className="success_container">
                      <div className="heading">
                        <MdCloudDone className="submit_success" />
                        <h1>Service Request Send </h1>
                        <p>Thankyou for being our valued customer</p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="next">
                {count === 5 ? (
                  <button
                    className="contact-btn"
                    onClick={() => {
                      setCount(1);
                    }}
                  >
                    Home
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
