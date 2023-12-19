import React, { useEffect, useState } from "react";
// import memesData from "../memesData";

export default function Meme() {
const [imgState, setImageState] = useState({})

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res=>res.json()
      .then(data=>setAllMeme(data.data.memes)))

},[])  //we don't have any dependencies to again reload


    function imgHandle(event){
      let imgUrl="";
      if(event.target.files.length !== 0) {
        imgUrl = URL.createObjectURL(event.target.files[0]);
        console.log(imgUrl);
      }

      if(imgUrl !== ""){
        setImageState(true);
        setMeme({
          ...meme,
          randomImage: imgUrl
        });
      }
    }


  function getMemeImg() {
    const randomNum = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="meme--container">
        <div className="form">
          <input
            className="form--input" 
            type="text"
            placeholder="Top text" 
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className="form--input"
            type="text"
            placeholder="Bottom text "
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button onClick={getMemeImg} className="form--button">
            Get a new meme image 🖼
          </button>
          <div>
          <p className="upload-meme">Upload your own meme</p>
          <input type="file" name="uploadImage" className="file" onChange={imgHandle}/>
          </div>
        </div>
        <div className="meme">
          <img className="meme--image" src={meme.randomImage} alt="Meme Img" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
