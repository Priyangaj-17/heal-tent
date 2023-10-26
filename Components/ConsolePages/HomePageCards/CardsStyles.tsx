import styled from "styled-components";
import { devices } from "../../../styles/common/StyleConstants";

export const CardContent = styled.div`
  background-color: white;
  border: 1px solid var(--greyscale-75, #bfbfbf);
  border-radius: 0.9375rem;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  .top {
    width:1315px;
    height: 140px;
    justify-content: space-between;
    padding:30px;
    //background-color:  pink;
    .top-left {
      //left
      
      //background-color:yellow ;
      > div:nth-child(1) {
        border-radius: 1.5rem;

        img {
          //background-color: blue;
          width: 80px;
          height: 80px;
        }
      }
      > div:nth-child(2) {
        //background-color: red;
        margin-left: 30px;
        p {
          font-size:1.75rem;
          margin: 3px 0 16px 0;
        }
        span {
          font-size:1.3175rem;
        }
      }
    }
    .top-right {
      
      justify-content: flex-end;
      
      //background-color: violet;
      > div:first-child {
        //background: blue;
        align-items: start;
        gap:20px;
        span {
          border-radius: 0.5rem;
          text-align: center;
          padding: 18px 36px;
          font-size:21px;
          color: var(--highlight-red);
          background: rgba(255, 45, 45, 0.10);
        }
        .green {
          color: #01AF2E;
          background: rgba(15, 150, 20, 0.10);
        }
        .btn-dot{
            padding: 0 0!important;
            //justify-content: flex-end !important;
          }
      }
    }
  }
  .bottom {
    width:1315px;
    height: 140px;
    padding: 30px;
    justify-content: space-between;
    .bottom-left {
      
      
      margin:auto 0;
      .btn {
        color: var(--primary) !important;
        background-color: #ffffff !important;
        font-family: var(--font-sans);
        font-size:1.5rem;
        

        &:hover {
          background-color: var(--primary) !important;
          border: 1px solid black !important;
          color: white !important;
        }
      }
      .btn-primary {
        padding: 15px 40px !important;
      }
    }
    .bottom-right {
      
      
      > div:first-child {
        //background-color: blue;
        text-align: right;
        gap: 8px;
        span:first-child {
          //background-color: red;
          font-size: 21px;
          margin:10px 0;
          color: var(--greyscale-75, #4e4c4c);
        }
        span:last-child {
          font-size: 24px;
          font-weight: 500;
        }
      }
    }
  }
  @media ${devices.xl}{
   background-color: white;
  border: 1px solid var(--greyscale-75, #bfbfbf);
  border-radius: 0.9375rem;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  .top {
    max-width:1100px;
    max-height: 120px;
    justify-content: space-between;
    padding:20px;
    //background-color:  pink;
    .top-left {
      //left
      
      //background-color:yellow ;
      > div:nth-child(1) {
        border-radius: 1.5rem;

        img {
          //background-color: blue;
          width: 80px;
          height: 80px;
        }
      }
      > div:nth-child(2) {
        //background-color: red;
        margin-left: 30px;
        p {
          font-size:1.75rem;
          margin: 3px 0 16px 0;
        }
        span {
          font-size:1.3175rem;
        }
      }
    }
    .top-right {
      
      justify-content: flex-end;
      
      //background-color: violet;
      > div:first-child {
        //background: blue;
        align-items: start;
        gap:20px;
        span {
          border-radius: 0.5rem;
          text-align: center;
          padding: 18px 36px;
          font-size:21px;
          color: var(--highlight-red);
          background: rgba(255, 45, 45, 0.10);
        }
        .green {
          color: #01AF2E;
          background: rgba(15, 150, 20, 0.10);
        }
        .btn-dot{
            padding: 0 0!important;
            //justify-content: flex-end !important;
          }
      }
    }
  }
  .bottom {
    max-width:1100px;
    height: 120px;
    padding: 20px;
    justify-content: space-between;
    .bottom-left {
      
      
      margin:auto 0;
      .btn {
        color: var(--primary) !important;
        background-color: #ffffff !important;
        font-family: var(--font-sans);
        font-size:1.5rem;
        

        &:hover {
          background-color: var(--primary) !important;
          border: 1px solid black !important;
          color: white !important;
        }
      }
      .btn-primary {
        padding: 15px 40px !important;
      }
    }
    .bottom-right {
      
      
      > div:first-child {
        //background-color: blue;
        text-align: right;
        gap: 8px;
        span:first-child {
          //background-color: red;
          font-size: 21px;
          margin:8px 0;
          color: var(--greyscale-75, #4e4c4c);
        }
        span:last-child {
          font-size: 24px;
          font-weight: 500;
        }
      }
    }
  }
  }

  @media ${devices.lg} {
  background-color: white;
  border: 1px solid var(--greyscale-75, #bfbfbf);
  border-radius: 0.9375rem;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  .top {
    max-width:750px;
    max-height: 90px;
    justify-content: space-between;
    padding:15px;
    //background-color:  pink;
    .top-left {
      //left
      
      //background-color:yellow ;
      > div:nth-child(1) {
        border-radius: 1.5rem;

        img {
          //background-color: blue;
          width: 60px;
          height: 60px;
        }
      }
      > div:nth-child(2) {
        //background-color: red;
        margin-left: 15px;
        margin-bottom:5px;
        p {
          font-size:1.3125rem;
          margin: 0px 0 0px 0;
        }
        span {
          font-size:1.1rem;
         
        }
      }
    }
    .top-right {
      
      justify-content: flex-end;
      
      //background-color: violet;
      > div:first-child {
        //background: blue;
        align-items: start;
        gap:15px;
        span {
          border-radius: 0.5rem;
          text-align: center;
          padding: 12px 22px;
          font-size:18px;
          color: var(--highlight-red);
          background: rgba(255, 45, 45, 0.10);
        }
        .green {
          color: #01AF2E;
          background: rgba(15, 150, 20, 0.10);
        }
        .btn-dot{
            padding: 0 0!important;            
            //justify-content: flex-end !important;
            ::after {
              height: 40px;
              content: url("data:image/svg+xml,%3Csvg width='38' height='40' viewBox='0 0 36 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='more-horizontal'%3E%3Cg id='Icon'%3E%3Cpath d='M18 19.5C18.8284 19.5 19.5 18.8284 19.5 18C19.5 17.1716 18.8284 16.5 18 16.5C17.1716 16.5 16.5 17.1716 16.5 18C16.5 18.8284 17.1716 19.5 18 19.5Z' stroke='%23101828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M28.5 19.5C29.3284 19.5 30 18.8284 30 18C30 17.1716 29.3284 16.5 28.5 16.5C27.6716 16.5 27 17.1716 27 18C27 18.8284 27.6716 19.5 28.5 19.5Z' stroke='%23101828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.5 19.5C8.32843 19.5 9 18.8284 9 18C9 17.1716 8.32843 16.5 7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5Z' stroke='%23101828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");

            }
          }
      }
    }
  }
  .bottom {
    max-width:750px;
    height: 90px;
    padding: 15px;
    justify-content: space-between;
    .bottom-left {
      
      
      margin:auto 0;
      .btn {
        color: var(--primary) !important;
        background-color: #ffffff !important;
        font-family: var(--font-sans);
        font-size:1.2rem;
        

        &:hover {
          background-color: var(--primary) !important;
          border: 1px solid black !important;
          color: white !important;
        }
      }
      .btn-primary {
        padding: 10px 32px !important;
      }
    }
    .bottom-right {
      
      
      > div:first-child {
        //background-color: blue;
        text-align: right;
        gap: 2px;
        span:first-child {
          //background-color: red;
          font-size: 18px;
          margin:2px 0;
          color: var(--greyscale-75, #4e4c4c);
        }
        span:last-child {
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
  }

  @media ${devices.md}{
    //background-color: brown;
    .top {
      max-height: 80px;
      max-width: 600px;
      //background-color: red;
      padding:15px;
      .top-left {
        //background-color: #01AF2E;
        
        align-items: center;
        img {
          //background: red;
          max-width: 50px;
          max-height: 50px;
        }
        > div:nth-child(2) {
          //background-color: red;

          margin: 0px 0 6px 8px;

          p {
            font-size: 18px;
            margin-bottom:0;
          }
          span {
            //background-color: red;
            font-size:16px;
            width:215px;
          }
        }
      }
      .top-right {
       
        > div:first-child {
          gap:10px;
          span {
            padding: 10px 10px;
            font-size:16px;
          }
          .btn-dot {
            padding:auto 0;
            
               ::after {
                //background-color: blue;
                 content: url("data:image/svg+xml,%3Csvg width='38' height='40' viewBox='0 0 36 42' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='more-horizontal'%3E%3Cg id='Icon'%3E%3Cpath d='M18 19.5C18.8284 19.5 19.5 18.8284 19.5 18C19.5 17.1716 18.8284 16.5 18 16.5C17.1716 16.5 16.5 17.1716 16.5 18C16.5 18.8284 17.1716 19.5 18 19.5Z' stroke='%23101828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M28.5 19.5C29.3284 19.5 30 18.8284 30 18C30 17.1716 29.3284 16.5 28.5 16.5C27.6716 16.5 27 17.1716 27 18C27 18.8284 27.6716 19.5 28.5 19.5Z' stroke='%23101828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.5 19.5C8.32843 19.5 9 18.8284 9 18C9 17.1716 8.32843 16.5 7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5Z' stroke='%23101828' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
                height:35px;
               }       
          }
        }
      }
    }
    .bottom {
      max-height: 80px;
      max-width: 600px;
      padding:15px;
      //background-color: lightgreen;
      .bottom-left{
        //background-color: red;
       
        .btn-primary {
        padding: 10px 20px !important;
        font-size:16px;
      }
      }
      .bottom-right {
        
        > div:first-child {
          gap:2px;
          
          span:first-child {
            font-size:16px;
            margin:0;
          }
          span:last-child {
            font-size:16px;
          }
          
         
        }
      }
    }
  }
  @media ${devices.sm}{
    //background-color: brown;
    .top {
      max-width:500px;
      max-height: 80px;
      //background-color: red;
      padding:15px;
      .top-left {
       
        align-items: center;
        img {
          background: red;
          max-width: 50px;
          max-height: 50px;
        }
        > div:nth-child(2) {
          //background-color: red;

          margin: 0px 0 6px 8px;

          p {
            font-size: 16px;
          }
          span {
            //background-color: red;
            font-size:16px;
            max-width:214px;
          }
        }
      }
      .top-right {
        
        > div:first-child {
          gap:7px;
          span {
            width:100px;
            padding: 8px 8px;
            font-size:16px;
            line-height: 17px;
            
          }
        }
      }
    }
    .bottom {
      max-height: 80px;
      max-width:500px;
      padding:15px;
      //background-color: lightgreen;
      .bottom-left{
        //background-color: red;
        
        .btn-primary {
        padding: 8px 28px !important;
      }
      }
      .bottom-right {
        
        > div:first-child {
          gap:2px;
          
          span:first-child {
            font-size:16px;
          }
          span:last-child {
            font-size:16px;
          }
          
         
        }
      }
    }
  }
`;
