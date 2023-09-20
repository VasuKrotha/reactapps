import { useLocation } from "react-router-dom";
import { useState } from "react";
import { data } from "./Data";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Checkbox, FormControlLabel, Rating } from "@mui/material";
const Displaypro = () => {
  const location = useLocation();
  console.log(location.state.id);

  const [alldata] = useState(data);
  const filterfdata = alldata.filter((it) => it.id === location.state.id);
  console.log(alldata);
  console.log(filterfdata);

  const formatIndianCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  };
  let amount = 10500;
  let formattedAmount = formatIndianCurrency(amount);
  console.log(formattedAmount);
  return (
    <div>
      <Container className="text-center m-5 ">
        <Row>
          <Col lg={3} sm={3} md={3} className="mt-5 ">
            <Container fluid>
              {filterfdata.map((item) => (
                <Carousel key={item.id}>
                  <Carousel.Item interval={1000}>
                    <img
                      src={item.image}
                      alt=""
                      width={300}
                      height={300}
                      className="d-block w-100 img-fluid"
                    />
                  </Carousel.Item>
                </Carousel>
              ))}
            </Container>
          </Col>
          <Col lg={6} sm={6} md={6} className="mt-4 ">
            <Container fluid>
              {filterfdata.map((item) => {
                return (
                  <div key={item.id}>
                    <div>
                      <h4>{item.title}</h4>
                    </div>
                    <div>
                      <div>
                        <a href="#" style={{ textDecoration: "none" }}>
                          Visit the {item.brand} store
                        </a>
                      </div>
                      <div className="d-flex flex-row justify-content-center mt-2">
                        <div>
                          <h6>{item.rating}</h6>
                        </div>
                        <div>
                          <Rating
                            name="read-only"
                            value={item.rating}
                            readOnly
                          />
                        </div>
                      </div>

                      <div>
                        <h4>
                          {" "}
                          &#8377;{" "}
                          {new Intl.NumberFormat("en-IN").format(item.price)}
                        </h4>
                      </div>
                      <hr />
                      <div className="mx-5">
                        <div className="d-flex flex-row align-items-start">
                          <div>
                            <div className="h5 mx-5">Brand</div>
                          </div>
                          <div className="mx-5 ">{item.brand}</div>
                        </div>
                        <div className="d-flex flex-row align-items-start">
                          <div>
                            <div className="h5 mx-5" style={{ width: "20px" }}>
                              Model Name
                            </div>
                          </div>
                          <div className="mx-5">{item.modelName}</div>
                        </div>
                        <div className="d-flex flex-row align-items-start">
                          <div>
                            <div className="h5 mx-5" style={{ width: "20px" }}>
                              Operating System
                            </div>
                          </div>
                          <div className="mx-5">{item.operatingSystem}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Container>
          </Col>
          <Col lg={3} sm={3} md={3} className="mt-5 border rounded">
            <Container fluid className="">
              <div className="h5">Add a Protection Plan:</div>

              <div>
                <div>
                  {filterfdata.map((item) => {
                    return (
                      <>
                        <div className="d-flex flex-column justify-content-between">
                          <div>
                            <FormControlLabel
                              control={<Checkbox defaultChecked name="hello" />}
                              label={`${item.brand} Brand Authorised Plan ₹749.00`}
                            />
                          </div>

                          <div>
                            <FormControlLabel
                              control={<Checkbox defaultChecked name="hello" />}
                              label={`Damage protection ₹749.00`}
                            />
                          </div>

                          <div>
                            <FormControlLabel
                              control={<Checkbox defaultChecked name="hello" />}
                              label={`1 Year protection ₹749.00`}
                            />
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="mt-2">
                <button type="button" className=" btn  btn-warning ">
                  Add to Cart
                </button>
              </div>
              <div className="mt-2 ">
                <button type="button" className=" btn  btn-info ">
                  Buy
                </button>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Displaypro;
