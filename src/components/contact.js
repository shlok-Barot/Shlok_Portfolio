import React from "react";
import imageOverlay from "../img/earth.jpg";
import { TextField } from "@material-ui/core";
import emailjs from "emailjs-com";

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

class Contact extends React.Component {
  constructor(props) { 
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "", 
      message: "",
      nameError: false,
      emailError: false,
      subjectError: false,
      messageError: false,
    };
  }
  emailOnchange = (e) => {
    var value = e.target.value;
    if (validateEmail(value)) {
      this.setState({ emailError: false, email: value });
    } else {
      this.setState({ emailError: true, email: value });
    }
  };
  handleCheckValidation = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
    }

    if (this.state.subject === "") {
      this.setState({ subjectError: true });
    } else {
      this.setState({ subjectError: false });
    }

    if (this.state.message === "") {
      this.setState({ messageError: true });
    } else {
      this.setState({ messageError: false });
    }
    this.handleSubmitdata(e);
  };
  handleSubmitdata = (e) => {
    e.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      !this.state.emailError &&
      this.state.subject !== "" &&
      this.state.message !== ""
    ) {
      emailjs
        .sendForm(
          "service_bi1ocat",
          "template_p0cv6jf",
          e.target,
          "user_DH1Vk1JkNTDWChEzcU03B"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        <div id="sendmessage">
                          Your message has been sent. Thank you!
                        </div>
                        <form onSubmit={this.handleCheckValidation}>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <TextField
                                  label="Name"
                                  name="name"
                                  variant="outlined"
                                  className="form-control"
                                  value={this.state.name}
                                  onChange={(e) =>
                                    this.setState({
                                      name: e.target.value,
                                      nameError: false,
                                    })
                                  }
                                  error={this.state.nameError}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-group">
                                <TextField
                                  label="Email"
                                  variant="outlined"
                                  className="form-control"
                                  name="email"
                                  value={this.state.email}
                                  onChange={this.emailOnchange}
                                  error={this.state.emailError}
                                />
                              </div>
                            </div>

                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <TextField
                                  label="Subject"
                                  name="subject"
                                  variant="outlined"
                                  className="form-control"
                                  inputProps={{ maxLength: 50 }}
                                  value={this.state.subject}
                                  onChange={(e) =>
                                    this.setState({
                                      subject: e.target.value,
                                      subjectError: false,
                                    })
                                  }
                                  error={this.state.subjectError}
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <TextField
                                  id="outlined-multiline-static"
                                  label="Message"
                                  name="message"
                                  className="form-control"
                                  multiline
                                  rows={4}
                                  inputProps={{ maxLength: 180 }}
                                  variant="outlined"
                                  value={this.state.message}
                                  onChange={(e) =>
                                    this.setState({
                                      message: e.target.value,
                                      messageError: false,
                                    })
                                  }
                                  error={this.state.messageError}
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3 t-40 mt-3">
                              <button
                                type="submit"
                                // onClick={this.handleCheckValidation}
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply fill the from and send me an email.
                        </p>
                        <ul className="list-ico">
                          <li>
                            <span className="ion-ios-location"></span> Ahmedabad
                            (India)
                          </li>
                          <li>
                            <span className="ion-ios-telephone"></span> (+91)
                            960 100 1910
                          </li>
                          <li>
                            <span className="ion-email"></span>
                            shlokbarot003@gmail.com
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/shlok.barot.90"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-facebook"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/shlok-barot-063740102/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/shlok_barot/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/BarotShlok"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-twitter"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box"></div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
