import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
export default function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Submit = (data) => {
    console.log("DDD", data);
    emailjs
    .send('service_lr85o03', 'template_xygg8dr', data, 's7j46r2THZBrVcu43')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      // Clear the form
      // setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
    });
  };
  let screenWidth = window.innerWidth;
  console.log("screenWidth");

  const sendMessage = () => {
    const phoneNumber = "7397377732"; // Recipient's WhatsApp number
    const message = "Hello, I'm Sam"; // Your pre-filled message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Navigate to WhatsApp link
    window.open(whatsappLink, '_blank');
  };
  return (
    <div style={{position:"relative"}}>
      <section className={`${screenWidth < 991 ? "" : "herosection"}`}>
        <div className="container ">
          <div
            className={`$row ${
              screenWidth < 991 ? "" : "vh-100"
            } align-items-start`}
          >
            <div className="col-lg-5 bg_heropages pt-5 mt-5 mb-3">
              <h2 style={{ color: "#000", fontSize: 40, fontWeight: "700" }}>
                HUBROAM JOB
              </h2>
              <p className="whyhubroam">
                Choosing Hubroam Technology means opting for a unique and
                results-driven approach to job placement. Our distinctive 10-day
                interview preparation training, complemented by 2 days of
                intensive mock interviews, equips candidates with the skills and
                confidence needed to excel. Our extensive network includes over
                30 top companies
              </p>
              <NavLink
                to={"/about"}
                style={{
                  fontSize: 24,
                  fontWeight: "400",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                READMORE...
              </NavLink>
            </div>
            <div className="col-lg-6 pb-5">
              {screenWidth < 991 ? (
                <img src="/heroImg.png" alt="heroImg" style={{width:"100%"}} />
              ) : (
                <></>
              )}{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="hubroam_bg pt-3 pb-5">
        <div className="container">
          <div className="row align-items-center hubroam_bg">
            <div className="col-lg-6">
              <h2 style={{ color: "#fff", fontWeight: 100 }}>
                Hire Faster and Easier with
              </h2>
              <h3 style={{ color: "#fff", fontWeight: 100 }}>
                HUBROAM TECHNOLOGY
              </h3>
              <p style={{ color: "#fff", fontWeight: 100 }}>
                All your recruitment needs met on one platform – no fuss!
              </p>
              <div
                style={{
                  padding: "20px",
                  borderLeft: "1px solid #fff",
                  width: `calc(100% - 80px)`,
                  textAlign: "justify",
                  color: "#fff",
                }}
              >
                <p>
                  An AI-driven ecosystem built to support the entire talent
                  acquisition process, from workforce planning to post-hire
                  insights and analytics.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="widget-type-form">
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  Get to Know hubroam
                </h3>
                <form onClick={handleSubmit(Submit)}>
                  <div
                    style={{
                      display: "flex",
                      padding: "3px",
                      flexWrap: "wrap",
                      gap: 20,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}
                    >
                      <label
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          width: "90px",
                          overflow: "hidden",
                        }}
                      >
                        First Name &nbsp;
                      </label>
                      <input
                      {...register('from_name', { required: true })}
                        placeholder=""
                        style={{
                          outline: "none",
                          border: "none",
                          background: "transparent",
                          borderBottom: "1px solid #fff",
                          color: "#fff",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}
                    >
                      <label
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          width: "90px",
                          overflow: "hidden",
                        }}
                      >
                        Last Name &nbsp;
                      </label>
                      <input
                       {...register('lastName')}
                        placeholder=""
                        style={{
                          outline: "none",
                          border: "none",
                          background: "transparent",
                          borderBottom: "1px solid #fff",
                          color: "#fff",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}
                    >
                      <label
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          width: "90px",
                          overflow: "hidden",
                        }}
                      >
                        Phone No &nbsp;
                      </label>
                      <div   style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}>
                      <input
                       {...register('phoneno', { 
      required: true, 
      pattern: /^[0-9]{10}$/ 
    })}
                        placeholder=""
                        type="number"
                        style={{
                          outline: "none",
                          border: "none",
                          background: "transparent",
                          borderBottom: "1px solid #fff",
                          color: "#fff",
                        }}
                      />
                        {errors.phoneNumber && <p style={{fontSize:"8px",color:"red"}}>Phone number must be a 10-digit number.</p>}
 
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}
                    >
                      <label
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          width: "90px",
                          overflow: "hidden",
                        }}
                      >
                        Email Id &nbsp;
                      </label>
                      <div div   style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}>
                         
                      <input
                       {...register('email', { 
      required: true, 
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    })}
                        placeholder=""
                        type="email"
                        style={{
                          outline: "none",
                          border: "none",
                          background: "transparent",
                          borderBottom: "1px solid #fff",
                          color: "#fff",
                        }}
                      />
                      {errors.email && <p style={{fontSize:"8px",color:"red"}}>Invalid Email.</p>}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}
                    >
                      <label
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          width: "90px",
                          overflow: "hidden",
                        }}
                      >
                        Age &nbsp;
                      </label>
                      <div   style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}>

                      <input
                       {...register('age',{ pattern: /\d+/ })}
                        placeholder=""
                        type="number"
                        style={{
                          outline: "none",
                          border: "none",
                          background: "transparent",
                          borderBottom: "1px solid #fff",
                          color: "#fff",
                        }}
                      />
                      {errors.age && <p style={{fontSize:"8px",color:"red"}}>Please enter number for age.</p>}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}
                    >
                      <label
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          width: "90px",
                          overflow: "hidden",
                        }}
                      >
                        Looking For &nbsp;
                      </label>
                      <input
                       {...register('lookingfor')}
                        placeholder=""
                        style={{
                          outline: "none",
                          border: "none",
                          background: "transparent",
                          borderBottom: "1px solid #fff",
                          color: "#fff",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}
                    >
                      <label
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          width: "90px",
                          overflow: "hidden",
                        }}
                      >
                        Qualification &nbsp;
                      </label>
                      <input
                       {...register('qualification')}
                        placeholder=""
                        style={{
                          outline: "none",
                          border: "none",
                          background: "transparent",
                          borderBottom: "1px solid #fff",
                          color: "#fff",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "5px 0px",
                      }}
                    >
                      <label
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          width: "90px",
                          overflow: "hidden",
                        }}
                      >
                        Passout Year &nbsp;
                      </label>
                      <input
                       {...register('passoutyear')}
                        placeholder=""
                        style={{
                          outline: "none",
                          border: "none",
                          background: "transparent",
                          borderBottom: "1px solid #fff",
                          color: "#fff",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10px 0px",
                    }}
                  >
                    <button
                      style={{
                        background: "#24487c",
                        color: "#fff",
                        border: "none",
                        outline: "none",
                        padding: "10px 30px",
                        borderRadius: "9px",
                      }}
                    >
                      Send Email
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5 pt-5 mb-5 pb-3">
          <div className="row justify-content-center">
            <div className="col-lg-12 align-self-center">
              <h2
                style={{
                  color: "#24487c",
                  fontWeight: 400,
                  fontSize: 28,
                  textAlign: "center",
                }}
              >
                Partner with us and be a part of our client success story
              </h2>
              <p
                style={{
                  color: "#000",
                  fontWeight: 400,
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Over 45 enterprises are enhancing efficiency and productivity
                with HUBROAM TECHNOLOGY
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel Start */}
      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <Carousel
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={3000}
                  showStatus={false}
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        className="custom-arrow left-arrow"
                        aria-label={label}
                      >
                        ❮
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        className="custom-arrow right-arrow"
                        aria-label={label}
                      >
                        ❯
                      </button>
                    )
                  }
                >
                  <div className="carousel-slide">
                    <div className="carousel-content">
                      <div className="text">
                        <h3>Slide 1 Title</h3>
                        <p>
                          This is the description for Slide 1. The text is on
                          the left.
                        </p>
                      </div>
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/600x400"
                          alt="Slide 1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-slide">
                    <div className="carousel-content">
                      <div className="text">
                        <h3>Slide 2 Title</h3>
                        <p>
                          This is the description for Slide 2. The text is on
                          the left.
                        </p>
                      </div>
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/600x400"
                          alt="Slide 2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-slide">
                    <div className="carousel-content">
                      <div className="text">
                        <h3>Slide 3 Title</h3>
                        <p>
                          This is the description for Slide 3. The text is on
                          the left.
                        </p>
                      </div>
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/600x400"
                          alt="Slide 3"
                        />
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carousel End */}
      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-12 align-items-center ">
              <h2
                style={{
                  color: "#24487c",
                  fontWeight: 400,
                  fontSize: 28,
                  textAlign: "center",
                }}
              >
                Empower Your Workflow with Technology
              </h2>
              <p
                style={{
                  color: "#000",
                  fontWeight: 400,
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Allowing You to Maximize Efficiency
              </p>
              {/* Four Topic Add Start */}
              <div>
                <div>

                </div>
              </div>
              {/* Four Topic Add End */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  style={{
                    background: "#24487c",
                    color: "#fff",
                    border: "none",
                    outline: "none",
                    padding: "10px 30px",
                    borderRadius: "9px",
                  }}
                  onClick={() => window.onscroll(0)}
                >
                  Schedule A Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{position:"sticky",bottom:"50%",display:"flex",justifyContent:"end",paddingRight:"0px"}}>
      <div style={{display:"flex",flexDirection:"column",gap:'29',background:"#24487c",padding:"15px 20px",borderRadius:"10px"}}>

      <div style={{width:'30px',height:"30px",marginBottom:"20px"}} onClick={sendMessage}>

        <img src="./whatsapp.png" alt="whatsappIcon" style={{width:'100%',height:"100%"}}/>
      </div>
      <div style={{width:'30px',height:"30px",marginBottom:"20px"}} onClick={sendMessage}>

        <img src="./linkedin.jpeg" alt="whatsappIcon" style={{width:'100%',height:"100%"}}/>
      </div>
      <div style={{width:'30px',height:"30px"}} onClick={sendMessage}>

        <img src="./gmail.jpeg" alt="whatsappIcon" style={{width:'100%',height:"100%"}}/>
      </div>
      </div>
      </div>
    </div>
  );
}
