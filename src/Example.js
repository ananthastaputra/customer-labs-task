import React,{useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from "react-modal"
import "./Example.css"
import {FontAwesome} from "react-icons/fa"
import 'font-awesome/css/font-awesome.min.css'



Modal.setAppElement("#root")

function Example (props) {
  
  const [modalIsOpen,setModalIsOpen]=useState(false)
  const [inputList,setInputList] =useState([
    {firstName:"",LastName:"",Age:"",Gender:"",AccountName:""}
   


  ])
  const [isSent, setIsSent] = useState(false)

  const handleChange=(e,index)=>{
    const {name,value} = e.target
    const list = [...inputList]
    list[index][name]=value;

    setInputList({
      ...inputList,
      [name]:value
    })
  }

  const handleAddInput=()=>{
    setInputList([...inputList,{firstName:"",LastName:"",Age:"",Gender:"",AccountName:""}])
  }
  const submit = e => {
    e.preventDefault()
    fetch(`https://webhook.site/201161c7-ca31-4e36-a60f-95c30c8130f5`, {
      method: 'POST',
      body: JSON.stringify({firstName:"",LastName:"",Age:"",Gender:"",AccountName:""}),
    }).then(() => setIsSent(true))
  }

  return (
  <div>
    <button onClick={()=>{setModalIsOpen(true)}}>Save Segment</button>
    <Modal isOpen={modalIsOpen} className="Modal-right"
    style={{ overlay: { background: '#686868' } }}
    
    >
      <div className="Modal-content">
        <h2 className="Save">Save Segment</h2>

        

        <div className="container">
          <label for="Name segment">Enter the Name of Segment</label>
          <input type="text" id="segment" name="SegmentName" placeholder="Name of Segment" />
          <p>To save your segment,you need to add the schemas to build query </p>
          {inputList.map((item,i)=>{
            return (
            <div key={i}>
              <select className="custom-select" id="inputGroupSelect01" onchange={e=>handleChange(e,i)} >
                <option selected name="first_name"value={item.firstName}>First Name</option>
                <option name="last_name"value={item.LastName}>Last Name</option>
                <option name="Age"value={item.Age}>Age</option>
                <option name="gender"value={item.Gender}>Gender</option>
                <option name="account_name"value={item.AccountName}>Account Name</option>
    
              </select>
              

             
            </div>

    

            )


          })}
          <div>
            <input type="button" value="+ Add New Schema" onClick={handleAddInput} className="btn btn-primary" />
            
          </div>
       

        </div>


        
        
        <div className="footer">
          <button className="btn btn-light button" onClick={()=>{setModalIsOpen(false)}}>Cancel</button>
          <button className="btn btn-success button" onClick={submit}>Save Segment</button>
        </div>


       
      </div>

    </Modal>
  </div>

    
    
  );
}

 
 
 export default Example