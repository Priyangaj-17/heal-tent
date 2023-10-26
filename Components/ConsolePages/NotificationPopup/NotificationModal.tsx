import { NotificationBody, NotificationModalContent } from './NotificationStyles';
import AsyncImage from '../../../Utils/useAsyncImage';
import { useEffect, useRef } from 'react';

const NotificationModal = ({setNotificationModalOpen,headerRef}:any) => {

    const popupRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (
            popupRef.current &&
            !popupRef.current.contains(event.target as Node) &&
            !headerRef.current.contains(event.target as Node)
          ) {
            // Handle outside click logic here
            setNotificationModalOpen(false);
          }
          if (bodyRef.current?.contains(event.target as Node)) {
            setNotificationModalOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      });

    return (
        <>
            <NotificationBody className="h-100 min-w-100" ref={bodyRef}>

            </NotificationBody>
            <div ref={popupRef}>
                <NotificationModalContent>
                    <div className="popup-container flex fd-col w-100">
                        <div className="top flex al-center js-spb">
                            <p className="bold-600">Notifications</p>
                            <div className='close'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={()=>setNotificationModalOpen(false)}>
                                <path d="M14 2L2 14" stroke="#FF2D2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 2L14 14" stroke="#FF2D2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></div>
                        </div>
                        <div className="bottom flex fd-col al-center">
                            <AsyncImage
                                className="block h-auto"
                                url="/src/Assets/images/logo/image.png"
                                loadType=""
                                alt="Make Pay"
                                hasTooltip={true}
                                tooltip="Make Pay"
                                ariaLabel="Make Pay"
                            />
                            <p className="bold-500">There are no notifications here.</p>
                        </div>
                    </div>
                </NotificationModalContent>
            </div>
        </>
    );
};

export default NotificationModal;