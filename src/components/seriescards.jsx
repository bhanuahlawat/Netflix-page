import styles from "./netflix.module.css";
import styled from "styled-components";

export const SeriesCards=(props)=>{
  const {title, id, rating,image_url,description,genre,watch_url}= props.curElem

  // const btn_style={
    // padding:'10px 20px',
    // border:'none',
    // fontWeight:'bold',
    // fontSize:'bold',
    // backgroundColor:`${rating>=8.5?"rgb(81, 213, 81)":"rgb(218, 203, 33)"}`,
    // color:'black',
    // borderRadius: '10px',
    // boxShadow: '10px 5px 5px rgb(84, 37, 37)',
    // cursor: 'pointer',
  // }



  // const NewButton=styled.button({
  //   padding:'10px 20px',
  //   border:'none',
  //   fontWeight:'bold',
  //   fontSize:'bold',
  //   backgroundColor:`${rating>=8.5?"rgb(81, 213, 81)":"rgb(218, 203, 33)"}`,             //styled obejcts but in css-litrels we use pure css
  //   color:'black',
  //   borderRadius: '10px',
  //   boxShadow: '10px 5px 5px rgb(84, 37, 37)',
  //   cursor: 'pointer',
  // })


  const NewButton=styled.button`
    padding:10px 20px;
    border:none;
    font-weight:bold;
    fontSize:bold;
    background-color:${(props)=>
      props.rating>=8.5? "#51d551":"#dacb21"};          
    color:black;
    border-radius: 10px;
    box-shadow: 10px 5px 5px rgb(84, 37, 37);
    cursor:pointer;
  `;

  const Rating = styled.h3`
    font-size:15px;
    // background-color:green;
      text-transform: capitalize;
    `;

  const rating_class=rating>=8.5?styles['super-hit']:styles.average;
    return(

      // <div className="shadow-[10px_5px_5px_rgb(154,75,75)] rounded-[30px] bg-[antiquewhite] p-6" >

          <div className={styles.card} >
            <div>
              <img src={image_url} 
              alt="" width="10%" height="400px"/>
            </div>
            <div className={styles['card-content']}>
              <h1 style={{fontSize:"25px"}}>Name: {title}</h1>
              <Rating>
                Rating:<span className={`${styles.rating} ${rating_class}`}>{rating}</span> </Rating> 
              <p className="font-bold">Description: {description}</p>
              <p><b>Gener: </b>{genre}</p>             
              <a href={watch_url} target="_blank">
              {/* <button style={btn_style}>Download now</button>  */}
              <NewButton rating={rating}>Watch Now</NewButton> 
              </a> 
            </div>                     
          </div>

        
    )
} 