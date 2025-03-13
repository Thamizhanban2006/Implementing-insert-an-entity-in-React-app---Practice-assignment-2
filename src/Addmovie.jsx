import React from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';
const Addmovie = () => {
 const navigate = useNavigate();
    const handleNav = () =>{
navigate('/');
    }
    return (
        <div>
            <form>
                <input type='text' placeholder='Title'/>
                <input type='text' placeholder='Director'/>
                
                <select>
                    <option>Comedy</option>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Horror</option>
                
                </select>
                <input type='number' placeholder='year'/>
                <input type='textbox' placeholder='synopsis'/>
                <input type='url' placeholder='image url'/>
                <div className='buttons'>
                    <button onClick={handleNav}>Cancel</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Addmovie;
