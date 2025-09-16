import Banner from "./components/Banner";
import Form from "./components/Form";
import Header from "./components/Header";
import Weare from "./components/Weare";


export default function Home() {
  const carouselData = [
    {id:0, image:'/image/Carrosel1.png',width:1440, height:751},
    {id:1, image:'/image//Carrosel2.png',width:1440, height:751},
    {id:2, image:'/image//Carrosel3.png',width:1440, height:751},
  
  ]

  return (
    <div>
      <Header />
      <Banner carouselData={carouselData} />
      <Weare />
       <Form />
  
    
    </div>
  );
}



