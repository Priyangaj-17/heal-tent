import styled from "styled-components";

export const NotificationBody = styled.div`
    position:fixed;
    top:68px;
    right:0;
    background: rgba(49, 49, 49, 0.945);
    opacity:0.5;
    z-index: 2;

`;

export const NotificationModalContent = styled.div`
    position: absolute;
    top:84px;
    right:20px;
    z-index:3;

    .popup-container {
        width:30rem;        
        border-radius: 1.25rem;
        gap:1.875rem;
        border-right: 1px solid var(--greyscale-85, #D9D9D9);
        background: var(--grey-f-8, #F8F8F8);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        .top {
            padding:1.25rem 1.875rem;
            border-radius: 1.25rem 1.25rem 0rem 0rem;
            background: var(--greyscale-95, #F0F0F0);
            p{
                font-size: 1.3125rem;
            }

            .close {
                
            display: flex;
            padding: 0.625rem;
            align-items: flex-start;

            }
        }

        .bottom {
            //height:49rem;
            padding:3.125rem 0rem;
            gap:3.125rem;
            flex: 1 0 0;
            p{
                font-size: 1.3125rem;
            }
        }
    

    }
`;

