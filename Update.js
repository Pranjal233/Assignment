import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import './update.css'

function Update() {
    const {id}= useParams();
    const [values,setvalues] = useState({
        name:'',
        gender:'',
        age:'',
        description:'',
        country:''
    })

  
    const navigate= useNavigate();


    useEffect(()=>{
      axios.get('http://localhost:3000/users'+id)
      .then(res=> setvalues(res.data))
      .catch(err=> console.log(err));
  
    },[])

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/users/'+id,values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
    <div className="w-50 rounded bg-white border shadow px-5 pt-5 pb-5">
        <div className="property ">
        <form onSubmit={handleUpdate}>
            <div className='mb-2'>
                <label htmlFor='name'>Name</label>
                <input type="text" name='name' className='form-control' placeholder='Enter Name'
                value={values.name}
                onChange={e=>setvalues({...values,name:e.target.value})}

                />
            </div>
            <div className='mb-2'>
                <label htmlFor='age'>Age</label>
                <input type="number" name='age' className='form-control' placeholder='Enter Age'
                value={values.age}
                onChange={e=>setvalues({...values,age:e.target.value})}


                />
            </div>
             <div className='mb-2'>
                <label htmlFor='gender'>Gender</label>
                <br/>
               
            <select
                value={values.gender} 
                 onChange={e => setvalues({...values,gender:e.target.value})}
                className='form-control' 
             >
      <option value="apple">Male</option>
      <option value="banana">Female</option>
      <option value="orange">Transgender</option>
      <option value="orange">Rather not say</option>

    </select>
            </div>
            <div className='mb-2'>
                <label htmlFor='Country'>Country</label>
                <input type="text" name='country' className='form-control' placeholder='Enter Country'
                value={values.country}
                onChange={e=>setvalues({...values,country:e.target.value})}

                />
            </div>
            <div className='mb-2'>
                <label htmlFor='description'>Description</label>
                 <textarea type="text" name='description' className='form-control' placeholder=' description'
                value={values.description}
                onChange={e=>setvalues({...values,description:e.target.value})}

                />
            </div>
            <div className="d-flex justify-content-end pt-3">
            <button className="btn"><Link to="/" ><HighlightOffOutlinedIcon style={{color:'red'}}/> </Link></button>

            <button className="btn"><CheckCircleOutlineOutlinedIcon style={{color:'green'}}/></button>
           
                </div>

        </form>
        </div>
        </div>
</div>
    )
}

export default Update