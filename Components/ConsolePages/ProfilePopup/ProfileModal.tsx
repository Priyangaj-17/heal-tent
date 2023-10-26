import { useEffect, useRef } from "react";
import { ProfileModalBody, ProfileModalContent } from "./ProfileModalStyles";
import AsyncImage from "../../../Utils/useAsyncImage";
import { useLocation, useNavigate } from "react-router-dom";



const ProfileModal = ({setModalOpen, headerRef }: any) => {
  const navigate = useNavigate();
  const popupRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const token = localStorage.getItem("credentials");
  // const decoded = decodePayload(token);
  //navigate from current page to next page with previous page name
  const location = useLocation();
  const host = location.pathname.split("/")[2];
  let path = " ";
  if (host === "welcomepage") {
    path = "/auth/welcomepage";
  } else {
    path = "/auth/home";
  }

  //Logic for popup

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !headerRef.current.contains(event.target as Node)
      ) {
        // Handle outside click logic here
        setModalOpen(false);
      }
      if (bodyRef.current?.contains(event.target as Node)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

 

//   const BodyStyle = createGlobalStyle`
// body {
//   overflow: ${(props: any) => (props.modalOpen ? "hidden" : "auto")};
  

// }
// `;
  //design for popup
  return (
    <>
      {/* <BodyStyle modalOpen={modalOpen} /> */}
      <ProfileModalBody
        ref={bodyRef}
        className="min-h-100 min-w-100"
      ></ProfileModalBody>
      <div ref={popupRef}>
        <ProfileModalContent className="flex fd-col">
          <div className="popup-container w-100 h-100">
            <div className="info flex">
              <div>
                <AsyncImage
                  className="block m-auto-rl"
                  url="/src/Assets/images/logo/change-dp.png"
                  loadType=""
                  alt="Make Pay"
                  hasTooltip={true}
                  tooltip="Make Pay"
                  ariaLabel="Make Pay"
                />
              </div>
              <div className="flex fd-col">
                <p className="size:lg bold-500">add name</p>
                <span>add email</span>
              </div>
            </div>
            <div className="list flex fd-col">
              <div
                className="flex boxes al-center"
                onClick={() => navigate(`${path}/profile`)}
              >
                <div className="icon flex al-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 15C14.7 15 17.8 16.29 18 17V18H6V17.01C6.2 16.29 9.3 15 12 15ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
                      fill="#606060"
                    />
                  </svg>
                </div>
                <span className="text size:2xl bold-400">Profile</span>
              </div>
              <div
                className="flex boxes al-center"
                onClick={() => navigate(`${path}/changepassword`)}
              >
                <div className="icon flex al-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09Z"
                      fill="#606060"
                    />
                    <path d="M13 14H11V16H13V14Z" fill="#606060" />
                    <path d="M13 7H11V12H13V7Z" fill="#606060" />
                  </svg>
                </div>
                <span className="text size:2xl bold-400">Change Password</span>
              </div>
              <div
                className="flex boxes al-center"
                onClick={() => navigate("/auth/login")}
              >
                <div className="icon signout-svg flex al-center js-right ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33325 19.9998H5.77775C5.30626 19.9998 4.85408 19.8125 4.52069 19.4791C4.1873 19.1457 4 18.6935 4 18.222V5.77775C4 5.30626 4.1873 4.85408 4.52069 4.52069C4.85408 4.1873 5.30626 4 5.77775 4H9.33325"
                      stroke="#FF2D2D"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5557 16.4444L20 12L15.5557 7.55566"
                      stroke="#FF2D2D"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.9995 12H9.33301"
                      stroke="#FF2D2D"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text sign-out size:2xl bold-400" onClick={()=>localStorage.clear()}>
                  Sign out
                </span>
              </div>
            </div>
          </div>
        </ProfileModalContent>
      </div>
    </>
  );
};

export default ProfileModal;
