"use client"

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

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