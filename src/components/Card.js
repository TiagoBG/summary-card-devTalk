import React from "react";
import characterImg from '../images/illustration-hero.svg';
import musicImg from '../images/icon-music.svg';
import '../styles/Card.css';

export default function Card() {
  return (
    <div className="card summary-card" style={{borderRadius: '25px'}}>
      <img src={characterImg} className="card-img-top" alt="..." style={{borderRadius: '25px 25px 0 0'}} />
      <div className="card-body">
        <h4 className="card-title" style={{fontWeight:'bold', marginTop:'15px'}}>Order Summary</h4>
        <p className="card-text">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className="card col-11" style={{display:'flex', flexFlow:'row', margin:'auto', borderRadius: '10px', border:'none', background: 'rgb(247,247,247', marginTop:'30px'}}>
          <img src={musicImg} alt="music-icon" style={{height: '20%', marginLeft:'5%', marginTop:'5%'}}/>
          <div className="plan-box" style={{marginLeft:'5%', marginTop:'5%', textAlign:'left'}}>
          <p style={{fontWeight: 'bold'}}>Annual Plan</p>          
          <p style={{marginTop: '-20%'}}>$59.99/year</p>
          </div>           
          <a href="#" style={{margin:'auto', fontWeight:'bold'}}>Change</a>
        </div>

      <div className="action-buttons" style={{display: 'block'}}>
      <a href="#" className="btn btn-primary col-11" style={{fontWeight: 'bold', marginTop: '8%'}}>
          Proceed to Payment
        </a>
        <a href="#" className="btn btn-light col-11" style={{fontWeight: 'bold', marginTop: '8%'}}>
          Cancel Order
        </a>
      </div>
        
      </div>
    </div>
  );
}
