
import React, { useRef, useState } from "react"
import { useAuth } from './AuthContext';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
    const email = useRef()
    const password = useRef()
    const login = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
            setError("")
            setLoading(true)
            await login(email.current.value, password.current.value)
            
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
        }

    return(
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={email} required />
                </Form.Group>
                <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={password} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                Log In
                </Button>
            </Form>
            <div className="w-100 text-center mt-3">
            <Button className="w-100" type="submit" useNavigate to ='/forgot-password'>
                forgot password?
                </Button>
            </div>
            <div className="w-100 text-center mt-2">
            <Button className="w-100" type="submit" useNavigate to ='/forgot-password'>Sign Up</Button>
            </div>
            </Card.Body>
        </Card>
    )
}
