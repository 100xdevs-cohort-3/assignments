import React from "react";
const style={width:200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}


export function PostComponent({name, subtitle,time, image, description}){
    return <div style={style}>
     <div style={{display: "flex"}}>
      <img src={image} style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }} />
      <div style={{fontSize: 10, marginLeft: 10}}>
        <b>
          {name}
        </b>
        <div>{subtitle}</div>
        {(time !==undefined) ? <div style={{display: "flex"}}>
          <div>{time}</div>
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5omqwStGIsN2vYlzhOcb04DUreWCDhdQIw&s"} style={{width: 12, height: 12}}/>
        </div> : null} 
      </div>
    </div>
    <div style={{fontSize: 12}}>
       {description}
    </div>
  
    </div>
}

  