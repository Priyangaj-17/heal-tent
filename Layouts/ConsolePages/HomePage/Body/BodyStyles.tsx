import styled from "styled-components";
import { devices } from "../../../../styles/common/StyleConstants";

export const BodyContent = styled.div``;

export const Cards = styled.div`
  width: 1315px;

  padding-bottom: 40px;

  border-bottom: 2px solid #c5c3c3;
  position: relative;
  bottom: 141px;

  @media ${devices.xl} {
    max-width: 1100px;
  }

  @media ${devices.lg} {
    max-width: 750px;
    position: relative;
    bottom: 91px;
    padding-bottom: 20px;
  }

  @media ${devices.md} {
    max-width: 600px;
    position: relative;
    bottom: 80px;
    padding-bottom: 20px;
  }

  @media ${devices.sm} {
    max-width: 500px;
    position: relative;
    bottom: 81px;
  }
`;

export const BodyUpperContent = styled.div`
  .left {
    //background:pink;
    margin-bottom: 80px;
    /* padding-left:1px; */
    justify-content: center;
    align-items: center;
    > div:nth-child(1) {
      p:nth-child(2) {
        font-weight: 600;
      }
      .btn {
        margin-top: 20px;
        font-size: 1.3175rem;
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
    justify-content: start;
    //background:yellow;
    //max-height:300px;

    img {
      width: 650px;
      height: 600px;
    }
  }
  @media ${devices.xl} {
    .left {
      //background:pink;
      //margin-bottom: 80px;
      //padding-left:60px;
      justify-content: center;
      align-items: center;
      > div:nth-child(1) {
        p:nth-child(1) {
          font-size: 40px;
        }
        p:nth-child(2) {
          //background-color: blue;
          font-size: 21px;
        }
        .btn {
          margin-top: 20px;
          font-size: 1.3175rem;
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
      justify-content: start;
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
      margin-bottom: 130px;
      padding-left: 60px;
      justify-content: center;
      align-items: center;
      > div:nth-child(1) {
        p:nth-child(1) {
          font-size: 30px;
          margin: 0;
        }
        p:nth-child(2) {
          //background-color: blue;
          margin-bottom: 0;
          font-size: 18px;
        }
        .btn {
          margin-top: 10px;
          font-size: 18px;
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
          padding: 6px 18px !important;
          font-weight: 600 !important;
          font-family: var(--font-sans);
          align-self: flex-start;
        }
      }
    }

    .right {
      display: flex;
      justify-content: start;
      //background:yellow;
      //max-height:300px;

      img {
        max-width: 350px;
        max-height: 350px;
      }
    }
  }

  @media ${devices.md} {
    margin-top: 20px;
    .left {
      //background:pink;
      margin-bottom: 100px;
      padding-left: 85px;
      justify-content: start;
      align-items: center;
      > div:nth-child(1) {
        p:nth-child(1) {
          font-size: 28px;
          margin: 0;
        }
        p:nth-child(2) {
          //background-color: blue;
          font-size: 16px;
          margin-top: 10px;
        }
        .btn {
          margin-top: 10px;
          font-size: 1rem;
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
      justify-content: start;
      //background:yellow;
      //max-height:300px;

      img {
        max-width: 250px;
        max-height: 260px;
      }
    }
  }

  @media ${devices.sm} {
    .left {
      //background:pink;
      //margin-bottom: 80px;
      //padding-left:60px;
      width: 100%;
      padding-left: 0;
      justify-content: center;
      text-align: center;
      //margin:50px 0;
      > div:nth-child(1) {
        p:nth-child(1) {
          font-size: 24px;
          margin: 2px 0;
        }
        p:nth-child(2) {
          //background-color: blue;
          font-size: 16px;
          margin-bottom: 20px;
        }
        .button {
          margin-bottom: 20px;
        }
        .btn {
          // margin-top: 10px;
          font-size: 16px;
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
          padding: 6px 18px !important;
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
    position: relative;
    bottom: 60px;

    width: 1315px;
    height: 280px;

    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.625rem;
    border: 1px solid var(--greyscale-75, #bfbfbf);

    .makepay-explore {
      padding: 40px 80px;
      width: 650px;
      //background-color: pink;
      > div:first-child {
        //makepay-explore div

        //background-color: yellow;

        //justify-content: center;
        p:nth-child(1) {
          //background-color: blue;
          margin-bottom: 20px;
          //font-size:1.7rem;
        }
        .xx {
          line-height: 28px;
          font-size: 1.3175rem;
          margin-bottom: 12px;
        }
        .link {
          margin-top: 8px;
          font-size: 1.3175rem;
          width: 130px;
          .btn-link {
            margin: 0 0 !important;
          }
        }
      }
    }
    .makepay-img {
      //background-color: red;
      margin: 0 auto;
      width: 455px;
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

  @media ${devices.xl} {
    .container {
      max-width: 1100px;
      max-height: 240px;
      position: relative;
      bottom: 60px;
      //margin: 80px auto;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
      border-radius: 0.625rem;
      border: 1px solid var(--greyscale-75, #bfbfbf);

      .makepay-explore {
        padding: 40px 70px;

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
            font-size: 1.3175rem;
            margin-bottom: 6px;
          }
          .link {
            margin-top: 4px;
            font-size: 1.3175rem;
          }
        }
      }
      .makepay-img {
        //background-color: red;
        margin: 0 auto;

        //margin:auto 0;
        justify-content: center;
        align-items: end;
        object-fit: cover;
        img {
          max-width: 250px;
          max-height: 200px;
        }
      }
    }
  }
  @media ${devices.lg} {
    .container {
      position: relative;
      bottom: 40px;
      max-width: 750px;
      max-height: 190px;
      margin-bottom: 40px;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
      border-radius: 0.625rem;
      border: 1px solid var(--greyscale-75, #bfbfbf);

      .makepay-explore {
        padding: 20px 30px;
        //max-width: 650px;
        //background-color: pink;
        > div:first-child {
          //makepay-explore div

          //background-color: yellow;
          
          //justify-content: center;
          p:nth-child(1) {
            //background-color: blue;
            margin: 0px 0 1px 0;
            font-size:1.5rem;
          }
          .xx {
            line-height: 28px;
            font-size: 18px;
            margin-bottom:0;            
          }
          .link {
            //margin-top: 4px;
            font-size: 1.1rem;
          }
        }
      }
      .makepay-img {
        //background-color: red;
        margin: 0 auto;

        //margin:auto 0;
        justify-content: center;
        align-items: end;
        object-fit: cover;
        img {
          max-width: 180px;
          max-height: 160px;
        }
      }
    }
  }
  @media ${devices.md} {
    .container {
      position: relative;
      bottom: 20px;
      max-width: 600px;
      height: 175px;
      //margin: 80px auto;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
      border-radius: 0.625rem;
      border: 1px solid var(--greyscale-75, #bfbfbf);

      .makepay-explore {
        padding: 10px 30px;
        //max-width: 650px;
        //background-color: pink;
        > div:first-child {
          //makepay-explore div

          //background-color: yellow;

          //justify-content: center;
          p:nth-child(1) {
            //background-color: blue;
            margin: 0 0 1px 0;
            font-size: 1.3125rem;
          }
          .xx {
            line-height: 28px;
            font-size: 1rem;
            margin-bottom: 0;
          }
          .link {
            margin-top: 0;
            font-size: 1rem;
            .btn-link {
              //margin: 0 0;
            }
          }
        }
      }
      .makepay-img {
        //background-color: red;
        margin: 0 auto;

        //margin:auto 0;
        justify-content: center;
        align-items: end;
        object-fit: cover;
        img {
          max-width: 180px;
          max-height: 150px;
        }
      }
    }
  }
  @media ${devices.sm} {
    .container {
      max-width: 500px;
      max-height: 170px;
      //margin: 80px auto;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
      border-radius: 0.625rem;
      border: 1px solid var(--greyscale-75, #bfbfbf);

      .makepay-explore {
        padding: 5px 20px;
        //max-width: 650px;
        //background-color: pink;
        > div:first-child {
          //makepay-explore div

          //background-color: yellow;

          //justify-content: center;
          p:nth-child(1) {
            //background-color: blue;
            //margin: 0 0 5px 0;
            font-size: 1.25rem;
          }
          .xx {
            line-height: 24px;
            font-size: 16px;
            //margin-bottom:6px;
          }
          .link {
            // margin-top: 4px;
            font-size: 1rem;
            .btn-link {
              margin: 0 0;
            }
          }
        }
      }
      .makepay-img {
        //background-color: red;
        margin: 0 auto;
        padding: 0 10px;
        //margin:auto 0;
        justify-content: center;
        align-items: end;
        object-fit: cover;
        img {
          max-width: 180px;
          max-height: 150px;
        }
      }
    }
  }
`;
