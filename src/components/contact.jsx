import { useState} from 'react'
import emailjs from 'emailjs-com'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "./contact.css"
import { Alert } from '@material-ui/lab';


const initialState = {
  name: '',
  email: '',
  message: '',
  contact: '',
}
export const Contact = (props) => {
  const [{ name, email, message, contact }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message, contact)
    emailjs
      .sendForm(
        'service_oqk0c5x', 'template_3p652ro', e.target, 'user_gy4xw7p23ZdOGWKKGWye4'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

    const [open, setOpen] = useState(false);
  
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const maxLengthCheck = (object) => {
      if (object.target.value.length > object.target.maxLength) {
       object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
      }
    const validInput = (object) => {
      if(object.target.value < object.target.maxLength) {
          // <alert>Must be 10 digits</alert>
          <Alert severity="warning">Must be 10 digits</Alert>

        }
      }

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='number'
                          id='contact'
                          name='contact'
                          className='form-control'
                          placeholder='Your Mobile number'
                          required
                          maxLength = "10" 
                          onInput={maxLengthCheck}
                          onChange={handleChange}
                          onInputCapture={validInput}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message containing your query and requirement'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button onClick={onOpenModal} type='submit' className='btn btn-custom btn-lg'>
                      Send Message
                </button> 
                <Modal open={open} onClose={onCloseModal} center>
                  <h2>Message Sent Succesfully</h2>
                </Modal>       
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              {/* <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p> */}
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          {/* <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 WebFuture.
            {/* Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  )
}
