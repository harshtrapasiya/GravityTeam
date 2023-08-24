import React from 'react'
import { Formik, Form, Field } from 'formik';
import Backgroundfrom from './img/background-from.png'
import Logo from "./img/gravity_logo.png";
import { Link } from 'react-router-dom';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (value === '') {
    error = 'Required';
  }
  return error;
}

export default function Getintouch() {
  return (
    <div className='getin_bg'>
      <div className='main_Container'>
        <div className='container_About'>


          <div class="Aboutteam_Content"><h1>GET IN TOUCH</h1></div>
          <div className='Backgroundfrom'>
            <img src={Backgroundfrom} alt="" className='img-fluid' />
          </div>
          <div className="Formik_From">

            <Formik

              initialValues={{
                firstname: '',
                lastname: '',
                email: '',
              }}
              onSubmit={values => {
                console.log(values);
              }}
            >
              {({ errors, touched, isValidating }) => (
                <Form>

                  <div className='First_items'>
                    <Field name="firstname" validate={validateUsername} placeholder="First name*
" />
                    {errors.firstname && touched.firstname && <div className='error_txt'>{errors.firstname}</div>}
                  </div>

                  <div className='First_items'>
                    <Field name="lastname" validate={validateUsername} placeholder="Last Name*
" />
                    {errors.lastname && touched.lastname && <div className='error_txt'>{errors.lastname}</div>}
                  </div>
                  <div className='First_items'>
                    <Field name="email" validate={validateEmail} placeholder="Email" />
                    {errors.email && touched.email && <div className='error_txt'>{errors.email}</div>}
                  </div>

                  <div className='What_section'>
                    <p>What can we do for you?*</p>
                    <div class="form-check looking_check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        I am looking for a liquidity provider
                      </label>
                    </div>
                    <div class="form-check looking_check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                      <label class="form-check-label" for="flexCheckDefault2">
                        I would like to partner up with Gravity Team
                      </label>
                    </div>
                    <div class="form-check looking_check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                      <label class="form-check-label" for="flexCheckDefault3">
                        I am looking for an investment in my exchange
                      </label>
                    </div>
                    <div class="form-check looking_check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                      <label class="form-check-label" for="flexCheckDefault4">
                        Other
                      </label>
                    </div>
                  </div>

                  <div className='d-flex justify-content-center'>
                    <button className='get_btn submit_btn' type="submit">Submit</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <footer className='Footer_section'>

          <div className='Footer_logo_section'>
            <div>
              <h6 className='Gravity_txt'>Gravity Team</h6>
              <ul className='about_Ul mt-4'>
                <li><Link>About Us</Link></li>
                <li><Link>Work with Us</Link></li>
              </ul>
            </div>
            <div>
              <img src={Logo} alt="" />
            </div>
          </div>

          <div className='Privacy_Policy'>
            <Link>Terms of Use & Privacy Policy</Link>
            <Link>©2022 Gravity Team. All Rights Reserved</Link>
          </div>

        </footer>
      </div>
    </div>
  )
}
