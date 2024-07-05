import React from 'react'
import { Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap'

function Search({ location, setLocation, searchLocation }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchLocation()
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="d-flex mt-3" onSubmit={e => e.preventDefault()}>
            <FormControl
              type="text"
              placeholder="Enter Location"
              className="mr-2"
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button variant="success" onClick={searchLocation}>Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Search