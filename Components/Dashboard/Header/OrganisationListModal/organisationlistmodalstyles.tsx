import styled from "styled-components";


export const OlmBody = styled.div`
        position: fixed;
        background: rgba(49, 49, 49, 0.945);
        opacity:0.5;
// top:68px;
z-index: 2;

`

export const OlmContent = styled.div`
      position: absolute;
      right: 20px;
      top:10px;
      z-index:3;


    .container{
        background: #F8F8F8;
        width: 35.125rem;
        padding: 1.875rem 1.25rem 0rem 1.25rem;
        align-items: flex-start;
        gap: 0.625rem;
        border-radius: 1.25rem;
        

        .orgs-lists{
            align-items: flex-start;
            gap: 0.625rem;
            align-self: stretch;
        .info {
            width: 100%;
            padding: 0.9375rem 1.5rem 0.9375rem 0.9375rem;
            justify-content:space-between;
            align-items:center;
            // flex: 1 0 0;

            .title {
                gap:1.125rem;

                .dp{
                    width:4.5rem;
                    height:4.5rem;
                    border-radius: 0.3125rem;
                    border: 1px solid var(--greyscale-70, #B3B3B3);
                    object-fit:cover;
                    //background: url(<path-to-image>), lightgray 50% / cover no-repeat;
                }

                .dp-details {
                    align-items: flex-start;
                    gap: 0.3125rem;

                    p:nth-child(1){
                        font-family: var(--font-sans);
                    }
                    p:nth-child(2){
                        font-size:1rem;
                        font-family: var(--font-sans);
                        color: #606060;
                    }
                }

                
            }
            .close {
                    padding:0.625rem;
                    align-items:center;
                    gap:0.625rem;
                }
        }
        }
        .manage{
            padding: 1.875rem 0rem;
            justify-content: center;
            align-items: center;
            gap: 0.625rem;
            align-self: stretch;  
            border-top: 1px solid var(--greyscale-80, #CCC);
            
            p{
                color: var(--primary-color, #006BFF);
                font-family: Roboto;
                font-size: 1.3125rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        
    }
    }


`
