import React from 'react'
import './MovieModel.css'
import StarRatingComponent from 'react-star-rating-component';

function MovieModel(props) {
    return ( 
        <>
            <div className="wrapper">
        <ul className="stage clearfix">
        <li class="scene">
           
           <div class="movie" onClick="return true">
               <div class="poster"><img height="400px" width="260px" src={props.image}/></div>
               <div class="info">

                   <header>
                   <iframe width="100%" height="100%" src={props.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                   </header>
                   
                   <StarRatingComponent className="star-rating-placement" value={props.rating}/>
                   
                   <p className="informations">
                   
                               {props.name}
                               <br/>
                               {props.description}
                            </p>
               </div>
           </div>
           </li>
            </ul>
        </div>
      

              </>      
                
    );
                }
export default MovieModel;