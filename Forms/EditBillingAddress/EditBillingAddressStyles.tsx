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

  .container {
    width: 49rem;
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
      align-items: center;
      align-self: stretch;

      .body-content {
        width: 100%;
        align-items: center;

        .form {
          align-items: flex-start;
          gap: 1.75rem;
          margin-bottom: 0;
        }
        div {
          gap: 1.25rem;

          .address-container {
            label {
              padding: 0.625rem 0rem;
            }
            textarea {
              display: flex;
              align-items: flex-start;
              width: 23.5rem;
              height: 6rem;
              padding: 0.75rem 1.25rem;
              resize: none;
              color: var(--text-color-dark-grey, #606060);
              font-family: Arial;
              font-size: 1.3125rem;
            }
          }

          input {
            width: 23.5rem;
            height: 3rem;
            padding: 0.625rem 1.25rem;
            gap: 0.625rem;
            color: var(--text-color-dark-grey, #606060);
            font-family: Arial;
            font-size: 1.3125rem;
          }
          label {
            width: 11.25rem;
            color: var(--text-color-black, #2d2d2d);
            font-family: Arial;
            text-transform: none;
            font-size: 1.3125rem;
            font-style: normal;
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;
