import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';

import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './home.css'

function Home() {
    const [query, setQuery] = useState("");
    const keys = ["first"];
  
    const Search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
      );
    };
  
    const BarStyle = {
    //   width: '32rem',
      // width: '100%',
      background: '#F0F0F0',
      border: '1px solid gray',
      borderRadius: '20px',
      padding: '10px',
      shadow: '0 10px 10px -5px',
      margin:'5px'
    } 


      const [data,setData] = useState([]);
      const navigate =useNavigate();
   
  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res=> setData(res.data))
    .catch(err=> console.log(err));

  },[])

  const handleDelete =(id)=>{
    const confirm= window.confirm("would you like to delete?");
    if(confirm){
        axios.delete("http://localhost:3000/users/"+id)
        .then(res => {
         navigate('/');
        }).catch(err => console.log(err));
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light '>

        <div className="firstContainer rounded bg-white border shadow p-3">
       

            <div className="d-flex justify-content-end"> 
            <Link to="/create" className='btn btn-success'>Add +</Link>
            </div>
            <input
          style={BarStyle}
          className="search__input"
          type="search"
          id="search"
          placeholder={'Search '}
         onChange={(e) => setQuery(e.target.value.toLowerCase())}

          // onChange={handleSearch}
        />      

                    {
                        data.map((d,i) =>(
                            <div key={i} className='p-2 secondContainer rounded' >
                              
                          <Accordion style={{ border:'1px solid gray'}} data={Search(data)} >
                         <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                >
                    <Typography
                        style={{
                            fontWeight: 700,
                            color:'#000',
                            
                        }}
                    >
                        <img src="../../public/images/business.jpg"  class=" logo p-1 rounded-circle" />

                          {d.first} {d.last}
                    </Typography>
                  
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                <div key={i} className=' accordian rounded '>
                       
                            {/* <div className=' mb-2'> */}
                 <label htmlFor='age'>Age</label>
                            <div className='text'> {d.age}</div>
                            {/* </div>
                            <div className=' mb-2'> */}
                <label htmlFor='gender'>Gender</label>
                            <div className='text'> {d.gender}</div>
                            {/* </div>
                            <div className=' mb-2'> */}
                <label htmlFor='country'>Country</label>
                           <div className='text'> {d.country}</div>

                            <div className='mb-2'>
                <label htmlFor='description'>Description</label>
                          <div className='text'>{d.description}</div>
                            </div>
                            </div>

                            <div className='d-flex justify-content-end'>
                        
                        <button onClick={e => handleDelete(d.id)} className='btn btn-act' data-toggle='modal'><DeleteForeverOutlinedIcon style={{color:'red'}}/></button>

                         <button className='btn btn-act'> <Link to={`/update/${d.id}`} className=' me-2' data-toggle='modal'><i className='material-icons' data-toggle='tooltip'><EditOutlinedIcon/></i></Link></button>

                                 </div>
                        </Typography>
                </AccordionDetails>
            </Accordion>
                            </div>
                        )) 
                       
                       
                    }
            {/* </section> */}
        </div>

    </div>
  )

 
}

export default Home