import React,{useState} from 'react';
import Select from 'react-select';
import {Card,Button, Container, Col,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash,faCircle,faUser} from '@fortawesome/free-solid-svg-icons';
import logo from './icon.png';
import './Sear.css';

const userIcon=<FontAwesomeIcon className= "iconUser" icon={faUser}></FontAwesomeIcon>
const circ=<FontAwesomeIcon className= "iconsi" icon={faCircle}></FontAwesomeIcon>
const element=<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

const data=[
    {id:0,label:"Vanishri",value:"vani@spottabl.com",Designation:"Client Manager"},
    {id:1,label:"Vishal N",value:"vishal@spottabl.com",Designation:"Senior Manager - Recruitment Success"},
    {id:2,label:"Vidhya Nagesh",value:"vidhya@spottabl.com",Designation:"Recruitment Success"},
    {id:3,label:"Priyanka Singh",value:"priyanka@spottabl.com",Designation:"Senior Recruiter"},
    {id:4,label:"Ajith KP",value:"ajith@spottabl.com",Designation:"Associate Principal-Leadership Hiring"},
    {id:5,label:"Arbaaz Khatri",value:"arbaaz@spottabl.com",Designation:"Talent Acquisition Specialist"},
    {id:6,label:"Chilman Mehrotra",value:"chilman@spottabl.com",Designation:"Client Manager"},
    {id:7,label:"Saboor Sirwal",value:"saboor@spottabl.com",Designation:"Recruitment Success"},
    {id:8,label:"Smriti Wadhwa",value:"smriti@spottabl.com",Designation:"Recruitment Success"}
];


function Search2()
{   const[name,setnm]=useState([]);
    const [values]=useState(data);
    const [click,setClick]=useState(false);
    const [employee,setEmp]=useState([]);



    function selection(e) 
    {
       const val=[];
       e.forEach(name => {
           val.push(name);
       });
       setnm(val);
       setClick(false);

    }


    const taskClick=()=>
        {
            setnm((prev)=>
                {
                    const temp=prev;
                    temp.forEach((e)=>
                    {
                    employee.push(e);
                    });
                    return prev;
                })
            setClick(true);
        }


    function deleteEntry(userID) 
        {
        const newUser = employee.filter((employee) => employee.id !== userID);
        setEmp(newUser);
        }

        
   function customTheme(theme)
   {
       return{
        ...theme,
        colors:{
            ...theme.colors,
            primary25:'lightgrey',
            primary: '#000080',
            neutral10:'#d8d1ef'
        },
    };
    
   }
    return(
        <div className="App">
            
       <br></br>
       <div className='cont'>
       <Container>
            <Row>
                <Col  md="auto">
                 <img src={logo} height='52px' width='52px'></img>
                </Col>
                <Col>
                <Row className='toBold'>
                   YOUR SPOTTABL TEAM 
                </Row>
                <Row className='toSmall'>
                    Spottabl supports you all throughout
                </Row>
                </Col>
            </Row>
        </Container>
       </div>
                <div className='card'>
            <Card className="shadow p-2 w-75 bg-body rounded" >
            <div className='Head'>
                        Customer Success Managers
                    </div>
                <Card.Body className="d-flex flex-colum">
                   
                    <Select 
                    className="mb-2 w-100"
                    isMulti
                    closeMenuOnSelect={false}
                    backspaceRemovesValue
                     options={values}
                     onChange={(e)=>selection(e)} 
                     theme={customTheme}
                    autoFocus
                    hideSelectedOptions
                    escapeClearsValue 
                     placeholder="Add by Name or Email"
                     isClearable
                     isSearchable>
                    </Select>
                   <Button className=" font-weight-bold"  onClick={taskClick}>Add CSM</Button> 
                </Card.Body>
                <div className='displayContents'>
                    <Card.Body>
                       {
                           click===true?(
                               <ul>
                                   {
                                       employee.map((e)=>{
                                           return(
                                            <Container>
                                                <Row className='bord'>
                                                    <Col className='colWidth'>
                                                    <div className='printNames' key={e.id}>
                                               <h4 className='fontHead'>{e.label}</h4>
                                               <p className='fontdes'>{userIcon} {e.Designation} {circ} {e.value}</p>  
                                               </div>
                                                    </Col>
                                                    <Col className='printButton'>
                                                    <div  >
                                                        <br></br>
                                               <button 
                                               className="but" 
                                               title='Delete item' 
                                               onClick={() =>deleteEntry(e.id)}>{element}
                                                </button>
                                                </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                           )
                                       })
                                   }
                               </ul>
                            
                           ) 
                            
                       :(
                            <ul>
                            {
                                employee.map((e)=>{
                                    return(
                                        <Container>
                                                <Row className='bord'>
                                                    <Col className='colWidth'>
                                                    <div className='printNames' key={e.id}>
                                               <h4 className='fontHead'>{e.label}</h4>
                                               <p className='fontdes'>{userIcon} {e.Designation} {circ} {e.value}</p>  
                                               </div>
                                                    </Col>
                                                    <Col className='printButton'>
                                                    <div  >
                                                        <br></br>
                                               <button 
                                               className="but" 
                                               title='Delete item' 
                                               onClick={() =>deleteEntry(e.id)}>{element}
                                                </button>
                                                </div>
                                                    </Col>
                                                </Row>

                                            </Container>
                                    )
                                })
                            }
                        </ul>
                       )  
                    }
                    </Card.Body>
                    </div>
              
            </Card>
            </div>
        </div>
    )
}
export default Search2;
