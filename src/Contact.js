import { FormControlLabel, Rating } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

import { data } from "./Data";
const Contact = () => {
  const [datas, setDatas] = useState([]);
  const [mydata] = useState(data);
  const [page, setPage] = useState(1);
  const [branddata, Setbranddata] = useState([]);
  const [rating, setRating] = useState("");
  const [filterprodata, setfiltrerdata] = useState([]);

  const location = useLocation();
  const navigation = useNavigate();

  //  console.log(location.state.search)

  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products?limit=20")
  //       .then((res) => res.json())
  //       .then((json) => setDatas(json));
  //   }, []);

  const selecthandler = (selectedpage) => {
    if (
      selectedpage >= 1 &&
      selectedpage <= datas.length / 3 &&
      selectedpage !== page
    )
      setPage(selectedpage);
  };
  let brandfilter = mydata.filter(
    (it) =>
      it.category.toLocaleLowerCase() ===
      location.state.search.toLocaleLowerCase()
  );
  let Bussiness = brandfilter.map(function (item) {
    return item.brand;
  });
  let _checkbox = [];
  let removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  };

  for (let i = 0; i < removeDuplicates(Bussiness).length; i++) {
    _checkbox.push({
      Title: removeDuplicates(Bussiness)[i],

      IsChecked: false,
    });
  }

  const [dup] = useState(_checkbox);

  const filterbrand = () => {
    let filtrerall = mydata.filter(
      (it) =>
        it.category.toLocaleLowerCase() ===
        location.state.search.toLocaleLowerCase()
    );

   

    let array = filtrerall.filter((item) => item.brand === "Redmi");
    setfiltrerdata(array);
    console.log(filterprodata);
  };

  const _onChange = (ev) => {
    let { name, checked } = ev.target;

    //console.log(name, checked)

    if (checked === true) {
      let databrand = brandfilter.filter((item) => item.brand === name);

      databrand.forEach((f) => (f.IsChecked = true));

      let fildata = databrand.reduce((r, c) => Object.assign(r, c), {});

      Setbranddata([...branddata, name]);

      filterbrand();
    } else {
      let databrand = branddata.filter((item) => item.brand !== name);

      //   console.log(databrand);

      Setbranddata(databrand);
      filterbrand();
    }
  };

  const onchangerating = (e, val) => {
    setRating(val);
    console.log(rating);
    filterbrand();
  };

  return (
    <>
      <Container className="text-center " fluid>
        <Row>
          <Col
            lg={2}
            xl={2}
            md={2}
            sm={2}
            xs={2}
            className="bg-body-tertiary mt-5"
          >
            <div className="fluid">
              <div className="d-flex flex-row ">
                <h4>Brand</h4>
              </div>

              <div>
                {dup.map((item) => {
                  return (
                    <div className="d-flex flex-column " key={item.Title}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={false}
                            name={`${item.Title}`}
                            onChange={_onChange}
                          />
                        }
                        label={`${item.Title}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="fluid mt-3">
              <div className="d-flex flex-row">
                <h5>Customer Review</h5>
              </div>
              <div className="d-flex flex-column mt-3">
                <Rating
                  name="read-only"
                  value={rating}
                  onChange={onchangerating}
                />
              </div>
            </div>
            <div className="mt-5">
              <button
                className="btn btn-primary"
                onClick={() => setfiltrerdata([])}
              >
                Clear
              </button>
            </div>
          </Col>
          <Col lg={10} sm={10} md={10} className="mt-5 ">
            <Row xs={1} md={2} className="g-4" lg={2}>
              {filterprodata.length === 0
                ? mydata
                    .filter(
                      (it) =>
                        it.category.toLocaleLowerCase() ===
                        location.state.search.toLocaleLowerCase()
                    )
                    .map((item) => {
                      return (
                        <>
                          <Col key={item.id}>
                            <Card key={item.id}>
                              <div className="d-flex justify-content-center">
                                <img
                                  src={item.image}
                                  alt=""
                                  width={200}
                                  height={200}
                                  onClick={() =>
                                    navigation("/Displaypro", {
                                      state: { id: item.id },
                                    })
                                  }
                                />
                              </div>

                              <Card.Body>
                                <Card.Title
                                  onClick={() =>
                                    navigation("/Displaypro", {
                                      state: { id: item.id },
                                    })
                                  }
                                >
                                  <a className="link-underline-light">
                                    {item.title.substring(0, 53)}
                                  </a>
                                </Card.Title>
                                <div className=" d-flex flex-row justify-content-center ">
                                  <div className="mx-2">
                                    <h5>{item.rating}</h5>
                                  </div>
                                  <div>
                                    <Rating
                                      name="read-only"
                                      value={item.rating}
                                      readOnly
                                      onClick={() =>
                                        navigation("/contact", {
                                          state: { id: item.id },
                                        })
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="d-flex flex-row justify-content-center">
                                  <h3
                                    onClick={() =>
                                      navigation("/Displaypro", {
                                        state: { id: item.id },
                                      })
                                    }
                                  >
                                    &#8377;{" "}
                                    {new Intl.NumberFormat("en-IN").format(
                                      item.price
                                    )}
                                  </h3>
                                </div>
                                <Card.Text className="d-none d-sm-block ">
                                  This is a longer card with supporting text
                                  below as a natural lead-in to additional
                                  content. This content is a little bit longer.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        </>
                      );
                    })
                : filterprodata.map((item) => {
                    return (
                      <div>
                        <div key={item.id}>
                          <Card key={item.id}>
                            <div className="d-flex justify-content-center">
                              <img
                                src={item.image}
                                alt=""
                                width={200}
                                height={200}
                                onClick={() =>
                                  navigation("/Displaypro", {
                                    state: { id: item.id },
                                  })
                                }
                              />
                            </div>

                            <Card.Body>
                              <Card.Title
                                onClick={() =>
                                  navigation("/Displaypro", {
                                    state: { id: item.id },
                                  })
                                }
                              >
                                <a className="link-underline-light">
                                  {item.title.substring(0, 53)}
                                </a>
                              </Card.Title>
                              <div className=" d-flex flex-row justify-content-center ">
                                <div className="mx-2">
                                  <h5>{item.rating}</h5>
                                </div>
                                <div>
                                  <Rating
                                    name="read-only"
                                    value={item.rating}
                                    readOnly
                                    onClick={() =>
                                      navigation("/contact", {
                                        state: { id: item.id },
                                      })
                                    }
                                  />
                                </div>
                              </div>

                              <div className="d-flex flex-row justify-content-center">
                                <h3
                                  onClick={() =>
                                    navigation("/Displaypro", {
                                      state: { id: item.id },
                                    })
                                  }
                                >
                                  &#8377;{" "}
                                  {new Intl.NumberFormat("en-IN").format(
                                    item.price
                                  )}
                                </h3>
                              </div>
                              <Card.Text className="d-none d-sm-block ">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </div>
                      </div>
                    );
                  })}
            </Row>
            {/* <Container className="d-flex  justify-content-center mt-5 ">
    <div className="pagination">
      <span onClick={()=>selecthandler(page- 1)} className={page > datas.length/5?"pagenone":""}>{'<'}</span>
      {
        [...Array(datas.length /3)].map((_,i)=>{
          return(
            <span key={i} onClick={()=>selecthandler(i+1)} className={page===i+1?"pageselected":""}>{i+1}</span>
          )
        })
      }
      
       
        <span onClick={()=>selecthandler(page +1)}>{'>'}</span>
                  </div>
        
   </Container> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Contact;
