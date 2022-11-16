import icon from '../../assets/img/notification-icon.svg';

import './styles.css';
 
function NotificationButton() {
    return(// o React não aceita class, so aceita className
        <div className="dsmeta-red-btn"> 
            <img src= {icon} alt="Notificar" />
        </div>
    )
  }
  
  export default NotificationButton;
  