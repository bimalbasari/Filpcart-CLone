import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Layout from "../../Layout"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Input } from '../../ui/Ui';
import { SignUPUi } from '../../ui/Data';


const Signup = () => {
  return (
    <Layout>

      <Container className='m-3'>

        <Row className="justify-content-md-center" >

          <Col xs={4}>

            <Form>
              {
                SignUPUi.map((data) => (
                  <Input label={data.label} placeholder={data.placeholder} err={data.err} type={data.type} />
                ))
              }
               <Button variant="primary" type="submit">Submit</Button>
            </Form>

          </Col>

        </Row>

      </Container>

    </Layout>
  )
}

export default Signup
