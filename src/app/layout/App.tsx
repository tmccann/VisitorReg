import { Container } from 'semantic-ui-react'
import VisitorDashboard from '../../features/visitor/visitorDashboard/VisitorDashboard'
import NavBar from '../../nav/NavBar'


function App() {


  return (
    <>
      <NavBar />
      <Container className='main'>
      <VisitorDashboard />
      </Container>
  
    </>
  )
}

export default App
