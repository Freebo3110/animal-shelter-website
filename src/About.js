import './App.css';
import { data2 } from './data2';
import { useState} from 'react';

function About (){
    
  const [about,setAbout]=useState(0);
  const {description, image}=data2[about];
  const nextAbout =()=>{
    setAbout((about=>{
      about++;
      if(about>data2.length-1){
        about=0;
      }
      return about;
    }))
  }
  const prevAbout=()=>{
    setAbout((about=>{
      about--;
      if(about<0){
        return data2.length-1;
      }
      return about;
    }))
  }
  return (
    <div>
     <div className='cont'>
        <h1 className='back'>All about us</h1>
      </div>   
      <div className="container" >
        <img src={image} width="600px"  alt="us"/>
      </div>
      <div className="container">
        <h2>{description}</h2>
      </div>
      <div className=" btn container">
      <button onClick={prevAbout}>Previous</button>
      <button onClick={nextAbout}>Next</button>
      </div>
      <div className="container text">
      <hr></hr>
        <p>Our animal shelter was founded 10 years ago with one goal - to help homeless animals find homes and care. In the first years of operation, the shelter was a truly family project: it all started with a small group of people who were not indifferent to the fate of animals, and was supported exclusively by our family.</p>
        <hr></hr>
        <p>Gradually, like-minded people joined us, and now our team is a close-knit group of people who share a common mission and love for animals. The shelter operates on the basis of donations and funds provided by our family. We make every effort to provide animals with everything they need - from food and medical care to warmth and love.</p>
        <hr></hr>
        <p>Here, it is important for each pet not only to provide comfort, but also to help find a new family where it will be loved and cared for.
          All funds we receive are used to support our pets and develop the shelter. We are glad that over the years we have been able to save the lives of hundreds of animals and hope to continue our mission, inspiring people to do good deeds and care for our little brothers.</p>
          <hr></hr>
      </div>
    </div>
  );
}


export default About;