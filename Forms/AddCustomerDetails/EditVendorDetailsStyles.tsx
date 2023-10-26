import { styled } from "styled-components";

export const EODBody = styled.div`
  position: fixed;
  background: rgba(49, 49, 49, 0.945);
  opacity: 0.5;
  top: 68px;
  z-index: 2;
`;

export const Wholecontainer = styled.div`
  position: fixed;
  top: 74px;
  z-index: 3;
  width: 100%;

  .container {
    width: 52rem;
    align-items: flex-start;
    border-radius: 1.875rem;
    background: var(--white, #fff);

    .top {
      padding: 0rem 2.5rem;
      gap: 1.5rem;
      align-self: stretch;
      border-radius: 1.875rem 1.875rem 0rem 0rem;
      background: var(--white, #fff);

      p {
        font-size: 1.75rem;
        font-family: Arial, Helvetica, sans-serif;
      }

      .top-content {
        padding: 0.875rem 0rem;
        height: 7.5rem;
        flex: 1 0 0;
        border-bottom: 1px solid var(--greyscale-85, #d9d9d9);

        .topright {
          padding: 0rem 1.25rem;
          gap: 1.25rem;

          .save-btn {
            width: 7.5rem;
            height: 3.1875rem;
            font-size: 1.125rem;
            font-family: Arial, Helvetica, sans-serif;
            padding: 0.9375rem 1.25rem;
            gap: 0.625rem;
          }

          .close {
            height: 4rem;
            width: 4rem;
            gap: 0.625rem;
            cursor: pointer;
          }
        }
      }
    }
    .body {
      padding: 3.125rem 2.5rem 3.75rem 2.5rem;
      gap: 3.125rem;
      align-items: flex-start;
      align-self: stretch;
      width: 100%;

      .body-content {
        .form {
          margin-bottom: 0;
          align-items: flex-start;
          gap: 2.25rem;

             div {
              gap: 1.125rem;
              margin-bottom: 0;

              .name-inputbox {
                gap: 1.125rem;

                input:first-child{
                    width:10.125rem;
                }
                input{
                  width:11.125rem;
                }
              } 
          }
          .middle-input{
              input{
                width:31.2rem;
              }
             }
        }
        label {
          width: 11.25rem;
          color: var(--text-color-black, #2d2d2d);
          font-family: Arial;
          font-size: 1.3125rem;
          margin-bottom: 0;
          text-transform: none;
        }
      }
    }
  }
`;
