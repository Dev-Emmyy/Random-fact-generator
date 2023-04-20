import {useEffect, useState} from "react";
import axios from "axios";
import bg from "./bg-img.webp";
import logo from "./logo.webp";
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";

function App() {
  const[facts,setFacts] = useState([])


  const fetchFacts = async () => {
    try {
      const data = await axios.get("https://api.api-ninjas.com/v1/facts?limit=1", {
        headers: {
          "X-Api-Key": "LiT9A5EeOFtQE8nngasRng==ttOQHAPvnFHokXnv",
          "Content-Type": "application/json",
        },
      });
      setFacts(data.data);
      console.log(data.data)
    } catch (error) {
      console.error("Error:", error.data.data);
    }
  }

  useEffect(() => {
    fetchFacts();
  },[])

  function getFacts() {
    if (facts.length === 0) {
      return null;
    }
      return(
        <div key={facts[0].id}>
        <p>{facts[0].fact}.</p>
        </div>
      )
    }


  return (
    <div style={{
      backgroundImage: `url(${bg})`, backgroundSize: "cover",backgroundRepeat: 'no-repeat',backgroundPosition: 'center',height:"700px"}} className="bg">
        <div className="container">
          <div className="img_container">
            <img src={logo} width="200px" />
            <h1>Random Fact Generator</h1>
          </div>
        <div className="facts">
          {getFacts()}
        </div>
        <div className="facts_button">
          <button onClick={() => fetchFacts()}>Next Random Fact</button>
        </div>
        </div>
        <div className="profile_link">
          <div className="profile">
            <a href="https://www.linkedin.com/in/ugochukwu-emmanuel-ba798a25a/">
              <AiFillLinkedin color="#0072b1" fontSize={30} cursor="pointer" fontWeight="bolder" />
            </a>
            <a href="https://twitter.com/9Gunna9">
              <AiOutlineTwitter color="	#1DA1F2" fontSize={30} fontWeight="bolder" />
            </a>
            <a href="https://github.com/Gunna9999">
              <AiFillGithub color="black" fontSize={30} cursor="pointer" fontWeight="bolder" />
            </a>
          </div>
        <span>Got beef with these random facts? Send an <a href="#" >email </a >and let us know!</span>
        </div>
    </div>

  );
}

export default App;
