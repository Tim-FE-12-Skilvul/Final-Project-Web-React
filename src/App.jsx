import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form.jsx"

const App = () => {
  return(
    <div className='App'>
     <head>
    <title>Stunting Checker</title>
    <script src="stunting.js"></script>
    <link rel="stylesheet" href="style.css" />
    <script src="https://kit.fontawesome.com/ceb7f3ff07.js" crossorigin="anonymous"></script>
     </head>

    <Navbar />
    <Form />
    
    </div>
  )
  
  }
  export default App;
  