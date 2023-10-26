import { CardContent } from "./CardsStyles";
import AsyncImage from "../../../Utils/useAsyncImage";
import {useNavigate } from "react-router-dom";

const Card = () => {
  const Navigate = useNavigate();
  
  const data = [{
        id:'1',
        profilePicture:"/src/Assets/images/logo/Htm-rec.png",
        organizationName: 'Amir Document Clearing',
        organizationId: '60022068955',
        label:'Expires in 12 days',
        expires: '28 Jun 2023'
      },
      {
        id:'2',
        profilePicture:"/src/Assets/images/logo/lorem.png",
        organizationName: 'Lorem Ipsum',
        organizationId: '60022068957',
        label:'Active',
        expires: '28 Jun 2023'
      }, 
      {
        id:'3',
        profilePicture:"/src/Assets/images/logo/lorem.png",
        organizationName: 'Lorem Ipsum',
        organizationId: '60022068957',
        label: 'Active',
        expires: '28 Jun 2023'
      }
    ];

  console.log(data);
  
  return (
      <>
      {data.map((item)=>(
      <CardContent key={item.id} className="flex fd-col">
        <div className="top flex">
          <div className="top-left flex">
            <div className="block">
              <AsyncImage
                className="flex"
                url={item.profilePicture || ''}
                loadType=""
                alt="Make Pay"
                hasTooltip={true}
                tooltip="Make Pay"
                ariaLabel="MakePay"
              />
            </div>
            <div className="flex fd-col">
              <p className="size:2xl bold-600">{item.organizationName}</p>
              <span className="size:base color:mute-dark">
                Organization ID: {item.organizationId}
              </span>
            </div>
          </div>
          <div className="top-right flex">
            <div className="flex">
              <span className={`size:xl bold-600 ${item.label === 'Active' ? 'green' : 'span'}`}>{item.label}</span>
              <button className="flex btn-dot"></button>
            </div>
          </div>
        </div>
        <div className="bottom flex">
          <div className="bottom-left block">
            <button
              id="login-btn"
              className="btn btn-primary"
              type="submit"
              data-display="0"
              rel="nofollow"
              onClick={() => Navigate("/auth/home")}
            >
              Go to Organisation
            </button>
          </div>

          <div className="bottom-right">
            <div className="flex fd-col">
              <span>Expires on</span>
              <span className="size:xl color:black">{item.expires}</span>
            </div>
          </div>
        </div>
      </CardContent>
      ))}
     </>
      
   
  );
};

export default Card;
