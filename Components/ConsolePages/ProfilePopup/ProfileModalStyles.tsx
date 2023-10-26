import styled, { createGlobalStyle } from "styled-components";
import { devices } from "../../../styles/common/StyleConstants";



export const ProfileModalBody = styled.div `
position:fixed;
top:68px;
right:0;
background: rgba(49, 49, 49, 0.945);
opacity:0.5;
z-index: 2;

@media ${devices.md}{
  position:fixed;
top:64px;
}
`;

export const ProfileModalContent = styled.div`
 position: absolute;
  
  top: 80px;
  right:20px;
  
  z-index:3;
  

  
  .popup-container {
    width: 26.25rem;
    border-radius: 0.5rem;
    border: 1px solid var(--greyscale-75, #bfbfbf);
    background: var(--white, #fff);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0.625rem;
    

    .info {
      gap: 1.12rem;
      align-items: center;
      padding: 1.5rem 0.9375rem;
      border-bottom: 1px solid #e6e6e6;
      img {
        width: 54px;
        height: 54px;
      }
      p {
        margin: 0;
        font-weight: 600;
      }
    }
    .list {
      padding: 0.625rem 0rem;
      .boxes {
        align-items: center;
        padding: 0.75rem 1.5rem;
        gap: 0.94rem;
        height: 3.75rem;
        cursor: pointer;
        &:hover {
          background-color: lightgrey;
        }
        .sign-out {
          color: #ff2d2d;
        }
        .icon {
          margin-top: 2.5px;
        }
      }
    }
  }
`;
