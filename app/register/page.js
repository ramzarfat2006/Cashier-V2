"use client"

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Link from 'next/link';

export default function Register(){
    const [ formUser, setFormUser ] = useState({
        username: "",
        password: "",
        role: ""
    })

    const [ pesan, setPesan ] = useState("")

    const [ tampil, setTampil ] = useState("")

    const [ warna, setWarna ] = useState("")

    const handleRegister = async(e) => {
        e.preventDefault()
        
        // Masukkan data ke server
        const registerAPI = await fetch("/api/signup", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(formUser)
        })

        const result = await registerAPI.json()

        if(result.status == 'success'){
            setWarna('success')
        } else if(result.status == 'fail') {
            setWarna('danger')
        }

        setPesan(result.message)
        setTampil(result.message)

        console.log(result)
    }

    return (
    <>
    <body>
    <div className="container-xxl position-relative bg-white d-flex p-0">
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Sign Up Start */}
  <div className="container-fluid">
    <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
      <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
        <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <Link href="#" className>
              <h3 className="text-primary"><i className="fa fa-hashtag me-2" />DASHMIN</h3>
            </Link>
            <h3>Sign Up</h3>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingText" placeholder="jhondoe" />
            <label htmlFor="floatingText">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-4">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <Link href="">Forgot Password</Link>
          </div>
          <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
          <p className="text-center mb-0">Already have an Account? <Link href="/login">Sign In</Link></p>
        </div>
      </div>
    </div>
  </div>
  {/* Sign Up End */} 
</div>


    {/* <!-- JavaScript Libraries --> */}
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/chart/chart.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

    {/* <!-- Template Javascript --> */}
    <script src="js/main.js"></script>
</body>
<Container>
    { tampil && 
        <Alert variant={warna}>
            {pesan}
        </Alert>
    }
    <Form>
        <fieldset>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Username</Form.Label>
                <Form.Control type="text" value={formUser.username} onChange={(e) => setFormUser({...formUser, username: e.target.value})} id="disabledTextInput" placeholder="Masukkan Username Anda" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Password</Form.Label>
                <Form.Control type="password" value={formUser.password} onChange={(e) => setFormUser({...formUser, password: e.target.value})} id="disabledTextInput" placeholder="Masukkan Password Anda" />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect"></Form.Label>
            <Form.Select id="disabledSelect" onChange={(e) => setFormUser({...formUser, role: e.target.value})}>
                <option>Login sebagai</option>
                <option value="admin">Admin</option>
                <option value="petugas">Petugas</option>
            </Form.Select>
            </Form.Group>
            <Button type="submit" onClick={handleRegister}>
                Submit
            </Button>
        </fieldset>
    </Form>
</Container> 
    </>
    )
}