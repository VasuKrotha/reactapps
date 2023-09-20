import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavbarBrand, Row, Col, Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { data } from "./Data";

export function Home() {
  const navigation = useNavigate();
  const [alldata, setData] = useState(data);
  const [search, setSearch] = useState("");

  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products?limit=8")
  //       .then((res) => res.json())
  //       .then((json) => setData(json));
  //   }, []);

  const PassFun = (title) => {
    console.log(title);
  };
  console.log(data);
  console.log(search);

  console.log("infinite loop");
  return (
    <>
      <Navbar expand="lg" className="fluid bg-success-subtle">
        <Container>
          <NavbarBrand>
            <i className="bi bi-yelp"></i>
            Zooho
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                variant="outline-success"
                onClick={() => navigation("/contact", { state: { search } })}
              >
                Search
              </Button>
            </Form>

            <Nav className="mt-2">
              <Nav.Link as={Link} to="/" className="fw-bold">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"} className="fw-bold">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"} className="fw-bold">
                About
              </Nav.Link>
              <div className="fw-bold mt-1 d-flex flex-column justify-content-center">
                <div>
                  <ShoppingCartOutlinedIcon />
                </div>
                <div className="px-2">3</div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row className="justify-content-center align-items-center text-align-center">
          <Col>
            <Carousel>
              <Carousel.Item interval={1000} data-bs-theme="dark">
                <img
                  className="d-block w-100 img-fluid"
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg"
                  }
                  alt={"hello"}
                  height={500}
                  width={500}
                />
                <Carousel.Caption>
                  <h3 className="text-danger">Buy 1 Get one Free</h3>
                  <p className="d-none d-sm-block text-danger"></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 img-fluid"
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/MFD/Aug/MFD_GW_PC-7-3000._CB598506317_.jpg"
                  }
                  alt={"hello"}
                  height={500}
                  width={500}
                />
                <Carousel.Caption>
                  <h3 className="text-danger">50% Officer For All Clothes</h3>
                  <p className="d-none d-sm-block text-danger"></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100 img-fluid"
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Aug_23/MFD/Shoes/unrec/supersaver/v1/3000_unrec._CB598475882_.jpg"
                  }
                  alt={"hello"}
                  height={500}
                  width={500}
                />
                <Carousel.Caption>
                  <h3 className="text-danger">
                    Shoes Starting Price Only Under 599
                  </h3>
                  <p className="d-none d-sm-block text-danger"></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className=" d-block w-100 img-fluid"
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/Hero/Amazon-Kitchen---Rakhi-hero_3000._CB597969843_.jpg"
                  }
                  alt={"hello"}
                  height={500}
                  width={500}
                />
                <Carousel.Caption>
                  <h4 className="text-danger">Up To 50% For All Products </h4>
                  <p className="d-none d-sm-block text-danger"></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <div className="text-center">
          <h2 className="mt-3">Buy All Products For 50% Offer</h2>
        </div>
      </Container>

      <Container className="text-center m-5 text-danger ">
        <h3 className="mx-4">All Of Our Products</h3>
      </Container>

      <Container fluid={true} className="bg-secondary">
        <Row xs={1} md={2} className="g-4" lg={3}>
          {alldata.map((item) => (
            <Col key={item.id}>
              <Card>
                <div className="d-flex justify-content-center">
                  <img src={item.image} alt="" width={200} height={200} />
                </div>

                <Card.Body>
                  <Card.Title>
                    <a
                      onClick={() => PassFun(item.title)}
                      className="link-underline-light"
                    >
                      {item.title.substring(0, 53)}
                    </a>
                  </Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="m-5 bg-body-tertiary ">
        <div className="text-center d-flex  justify-content-center m-3">
          <h2>
            {" "}
            <i className="bi bi-search-heart"></i> Offer 70% Today
          </h2>
        </div>
        <Container fluid>
          <Row>
            <Col md={7}>
              <img
                src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e76cc9da-dfd9-431c-a7ae-6ae8e3e3c407.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                className="img-fluid"
              ></img>
            </Col>
            <Col md={5} className=" justify-content-center align-items-center">
              <h3 className="mt-5">boAt Flash Edition Smart Watch</h3>

              <p>
                1.3"(33mm) LCD display with a round dial that sports complete
                capacitive and responsive touch interface for effortless
                control.;The health monitoring feature in the watch helps you
                keep a track of heart rate & blood oxygen levels.
              </p>

              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary">
                  <i className="bi bi-bag-heart"></i> Buy
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="fotter text-center" fluid={true}>
        <Row>
          <Col lg sm md xl={4}>
            <div className="d-flex flex-column">
              <div className="d-flex flex-row my-3">
                <div className="mx-3">
                  <i className="bi bi-yelp h3"></i>
                </div>
                <div>
                  <h3>Zooho</h3>{" "}
                </div>
              </div>
              <div className="d-flex flex-row my-3">
                <div className="mx-3">
                  <i className="bi bi-facebook h4"></i>
                </div>
                <div className="mx-3">
                  <i className="bi bi-twitter h4"></i>
                </div>
                <div className="mx-3">
                  <i className="bi bi-instagram h4"></i>
                </div>
              </div>
            </div>
          </Col>
          <Col lg sm md xl={4}>
            <div>
              <h3 className="my-2">Zooho</h3>
              <div className="d-flex justify-content-center">
                <div className=" d-flex flex-column align-items-start  ">
                  <a href="#" className="text-decoration-none">
                    Resources
                  </a>
                  <a href="#" className="text-decoration-none">
                    About Us
                  </a>
                  <a href="#" className="text-decoration-none">
                    Contact
                  </a>
                  <a href="#" className="text-decoration-none">
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg sm md xl={4}>
            <div>
              <h3 className="my-2">Help</h3>

              <div className="d-flex justify-content-center">
                <div className=" d-flex flex-column align-items-start  ">
                  <a href="#" className="text-decoration-none">
                    Support
                  </a>
                  <a href="#" className="text-decoration-none">
                    Sign Up
                  </a>
                  <a href="#" className="text-decoration-none">
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
}
