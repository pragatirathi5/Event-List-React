import React,{useState, useEffect} from 'react'
import { View } from './View';
import NavigMain from './NavigMain';
import Footer from "./Footer";
import "./Home.css"; 

const getDatafromLS=()=>{
  const data = localStorage.getItem('events');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const Home = () => {

  const [events, setevents]=useState(getDatafromLS());

  const [title, setTitle]=useState('');
  const [organizer, setOrganizer]=useState('');
  const [isbn, setIsbn]=useState('');

  const handleAddEventSubmit=(e)=>{
    e.preventDefault();
  
    let event={
      title,
      organizer,
      isbn
    }
    setevents([...events,event]);
    setTitle('');
    setOrganizer('');
    setIsbn('');
  }

  const deleteEvent=(isbn)=>{
    const filteredBooks=events.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setevents(filteredBooks);
  }

  useEffect(()=>{
    localStorage.setItem('events',JSON.stringify(events));
  },[events])

  return (
    <>
    <NavigMain />
    <div className='wrapper'>
    <br />
      <p>Add and view your Events</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddEventSubmit}>
            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Organizer</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setOrganizer(e.target.value)} value={organizer}></input>
            <br></br>
            <label>Description</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {events.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Title</th>
                    <th>Organizer</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View events={events} deleteEvent={deleteEvent}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setevents([])}>Remove All</button>
          </>}
          {events.length < 1 && <div className='sidebar'>No Event has been added yet</div>}
        </div>

      </div>
      <br />
      <br />
      <Footer />
    </div>
    </>
  )
}

export default Home;