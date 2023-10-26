import styled from "styled-components";
import { devices } from "../../../../styles/common/StyleConstants";


export const BodyContent = styled.div``;
export const BodyUpperContent = styled.div`
  .left {
    //background:pink;
    //margin-bottom: 80px;
    /* padding-left:1px; */ 
    justify-content: center;
    align-items: center;
    > div:nth-child(1){
      p:nth-child(2){
        font-weight:600;
      }
      .btn {
      margin-top: 20px;
      font-size:1.3175rem;
      background-color: #ffffff !important;

      &:hover {
        background-color: var(--primary) !important;
        color: white !important;
      }

      /* Change to your desired color */
    }
    .btn-primary {
      border: 2px solid white !important;
      color: var(--primary) !important;
      padding: 12px 40px !important;
      font-weight: 600 !important;
      font-family: var(--font-sans);
      align-self: flex-start;
    }
    }
    
  }

  .right {
    display: flex;
    justify-content:start;
    //background:yellow;
    //max-height:300px;

    img {
      width: 650px;
      height: 600px;
    }
  }
  @media ${devices.xl}{
    .left {
    //background:pink;
    //margin-bottom: 80px;
    //padding-left:60px; 
    justify-content: center;
    align-items: center;
    > div:nth-child(1){
      p:nth-child(1){
        font-size: 40px;
      }
      p:nth-child(2){
        //background-color: blue;
        font-size:21px;
        
      }
      .btn {
      margin-top: 20px;
      font-size:1.3175rem;
      background-color: #ffffff !important;

      &:hover {
        background-color: var(--primary) !important;
        color: white !important;
      }

      /* Change to your desired color */
    }
    .btn-primary {
      border: 2px solid white !important;
      color: var(--primary) !important;
      padding: 8px 20px !important;
      font-weight: 600 !important;
      font-family: var(--font-sans);
      align-self: flex-start;
    }
    }
    
  }

  .right {
    display: flex;
    justify-content:start;
    //background:yellow;
    //max-height:300px;

    img {
      max-width: 550px;
      max-height: 550px;
    }
  }
  }
  @media ${devices.lg} {

    .left {
    //background:pink;
    //margin-bottom: 80px;
    padding-left:60px; 
    justify-content: center;
    align-items: center;
    > div:nth-child(1){
      p:nth-child(1){
        font-size: 36px;
      }
      p:nth-child(2){
        //background-color: blue;
        font-size:18px;
        
      }
      .btn {
      margin-top: 15px;
      font-size:1.2rem;
      background-color: #ffffff !important;

      &:hover {
        background-color: var(--primary) !important;
        color: white !important;
      }

      /* Change to your desired color */
    }
    .btn-primary {
      border: 2px solid white !important;
      color: var(--primary) !important;
      padding: 8px 20px !important;
      font-weight: 600 !important;
      font-family: var(--font-sans);
      align-self: flex-start;
    }
    }
    
  }

  .right {
    display: flex;
    justify-content:start;
    //background:yellow;
    //max-height:300px;

    img {
      width: 350px;
      height: 350px;
    }
  }
  }
  @media ${devices.md} {
    .left {
    //background:pink;
    //margin-bottom: 80px;
    //padding-left:60px; 
    justify-content: start;
    align-items: center;
    > div:nth-child(1){
      p:nth-child(1){
        font-size: 30px;
        margin:5px 0;
      }
      p:nth-child(2){
        //background-color: blue;
        font-size:16px;
        
        
      }
      .btn {
      margin-top: 10px;
      font-size:1rem;
      background-color: #ffffff !important;

      &:hover {
        background-color: var(--primary) !important;
        color: white !important;
      }

      /* Change to your desired color */
    }
    .btn-primary {
      border: 2px solid white !important;
      color: var(--primary) !important;
      padding: 8px 20px !important;
      font-weight: 600 !important;
      font-family: var(--font-sans);
      align-self: flex-start;
    }
    }
    
  }

  .right {
    display: flex;
    justify-content:start;
    //background:yellow;
    //max-height:300px;

    img {
      width: 250px;
      height: 250px;
    }
  }
  }
  @media ${devices.sm} {
    .left {
    //background:pink;
    //margin-bottom: 80px;
    //padding-left:60px; 
    width:100%;
    padding-left:0;
    justify-content: center;
    text-align: center;
    margin:50px 0;
    > div:nth-child(1){
      p:nth-child(1){
        font-size: 32px;
        margin:5px 0;
      }
      p:nth-child(2){
        //background-color: blue;
        font-size:18px;
        
        
      }
      .btn {
      margin-top: 10px;
      font-size:1.1rem;
      background-color: #ffffff !important;

      &:hover {
        background-color: var(--primary) !important;
        color: white !important;
      }

      /* Change to your desired color */
    }
    .btn-primary {
      border: 2px solid white !important;
      color: var(--primary) !important;
      padding: 8px 20px !important;
      font-weight: 600 !important;
      font-family: var(--font-sans);
      align-self: flex-start;
    }
    }
    
  }

  .right {
    display: none !important;
  }
  }
`;

export const BodyLowerContent = styled.div`
    
    .container {
    width: 1315px;
    height: 280px;
    margin:80px auto;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.625rem;
    border: 1px solid var(--greyscale-75, #bfbfbf);
    

  .makepay-explore {
    padding:40px 80px;
    width: 650px;
    //background-color: pink;
    > div:first-child {
      //makepay-explore div
      
      //background-color: yellow;
      
      //justify-content: center;
      p:nth-child(1) {
        //background-color: blue;
        margin-bottom:20px;
          //font-size:1.7rem;
        }
        .xx {
        line-height: 28px;
        font-size:1.3175rem;
        margin-bottom:12px;
      }
      .link {
        margin-top: 8px;
        font-size:1.3175rem;
        width:130px;
        .btn-link {
          margin:0 0 !important;
        }
        
      }
    }
  }
  .makepay-img {
      //background-color: red;
      margin:0 auto;      
      width:455px;
      //margin:auto 0;
      justify-content: center;
      align-items: end;
      object-fit: cover;
      img {
        
        width: 300px;
        height: 250px;
      }
    }
}

   @media ${devices.xl}{
    .container {
    width: 1100px;
    height: 240px;
    margin: 80px auto;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.625rem;
    border: 1px solid var(--greyscale-75, #bfbfbf);
    

  .makepay-explore {
    padding:40px 70px;
    
    //background-color: pink;
    > div:first-child {
      //makepay-explore div
      
      //background-color: yellow;
      
      //justify-content: center;
      p:nth-child(1) {
       // background-color: blue;
        margin: 0 0 10px 0;
          //font-size:1.7rem;
        }
        .xx {
        line-height: 28px;
        font-size:1.3175rem;
        margin-bottom:6px;
      }
      .link {
        margin-top: 4px;
        font-size:1.3175rem;
        
      }
    }
  }
  .makepay-img {
      //background-color: red;
      margin:0 auto;      
      
      //margin:auto 0;
      justify-content: center;
      align-items: end;
      object-fit: cover;
      img {
        
        width: 250px;
        height: 200px;
      }
    }
}
   }
   @media ${devices.lg} {
    .container {
    width: 750px;
    height: 220px;
    margin: 80px auto;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.625rem;
    border: 1px solid var(--greyscale-75, #bfbfbf);
    

  .makepay-explore {
    padding:20px 30px;
    //max-width: 650px;
    //background-color: pink;
    > div:first-child {
      //makepay-explore div
      
      //background-color: yellow;
      
      //justify-content: center;
      p:nth-child(1) {
       // background-color: blue;
        margin: 0 0 10px 0;
          //font-size:1.7rem;
        }
        .xx {
        line-height: 28px;
        font-size:1.3175rem;
        margin-bottom:6px;
      }
      .link {
        margin-top: 4px;
        font-size:1.3175rem;
        
      }
    }
  }
  .makepay-img {
      //background-color: red;
      margin:0 auto;      
      
      //margin:auto 0;
      justify-content: center;
      align-items: end;
      object-fit: cover;
      img {
        
        width: 200px;
        height: 180px;
      }
    }
}
  }

  @media ${devices.md} {
    .container {
    width: 650px;
    height: 220px;
    margin: 80px auto;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.625rem;
    border: 1px solid var(--greyscale-75, #bfbfbf);
    

  .makepay-explore {
    padding:20px 30px;
    //max-width: 650px;
    //background-color: pink;
    > div:first-child {
      //makepay-explore div
      
      //background-color: yellow;
      
      //justify-content: center;
      p:nth-child(1) {
       //background-color: blue;
        margin: 0 0 10px 0;
          font-size:1.5rem;
        }
        .xx {
        line-height: 28px;
        font-size:1.15rem;
        margin-bottom:6px;
      }
      .link {
        margin-top: 4px;
        font-size:1.15rem;
        .btn-link{
          margin: 0 0;
        }
                
      }
    }
  }
  .makepay-img {
      //background-color: red;
      margin:0 auto;      
      
      //margin:auto 0;
      justify-content: center;
      align-items: end;
      object-fit: cover;
      img {
        
        width: 200px;
        height: 180px;
      }
    }
}
  }

  @media ${devices.sm} {
    .container {
    width: 500px;
    height: 220px;
    margin: 80px auto;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.625rem;
    border: 1px solid var(--greyscale-75, #bfbfbf);
    

  .makepay-explore {
    padding:10px 30px;
    //max-width: 650px;
    //background-color: pink;
    > div:first-child {
      //makepay-explore div
      
      //background-color: yellow;
      
      //justify-content: center;
      p:nth-child(1) {
       //background-color: blue;
        margin: 0 0 5px 0;
          font-size:1.3175rem;
        }
        .xx {
        line-height: 28px;
        font-size:17px;
        //margin-bottom:6px;
      }
      .link {
       // margin-top: 4px;
        font-size:1.0510rem;
        .btn-link{
          margin: 0 0;
        }
                
      }
    }
  }
  .makepay-img {
      //background-color: red;
      margin:0 auto;      
      padding:0 10px;
      //margin:auto 0;
      justify-content: center;
      align-items: end;
      object-fit: cover;
      img {
        
        width: 190px;
        height: 160px;
      }
    }
}
  }

  

  /* @media ${devices.xs} {
    > div:first-child {
      max-width: 300px;
      height:500px;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      //background-color: pink;

      > div:first-child {
        width: 100%;
        height: 100%;
        text-align: center;
        margin:0 auto;
       // padding: 100px auto;
        //background-color: red;
        .xx {
          margin: 0 auto;
          max-width:150px;
        }
        .link {
          //background-color: yellow;
          margin: 0 auto;
        }
        p:nth-child(1) {
          //background-color: pink;
          font-size: 24px;
        }
        p:nth-child(2) {
          font-size: 10px;
        }
      }
      > div:last-child {
        width: 100%;
        img {
          max-width: 200px;
          max-height: 200px;
        }
      }
    }
  } */ 
`;