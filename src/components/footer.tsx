import { SiFacebook} from 'react-icons/si'
import phone from '../assets/images/call.png'
import address from '../assets/images/location.png'
import mail from '../assets/images/mail.png'

export const Block = () => {
  return (
    <div className="row">
      <div className="column side">
        <h2>SC GLOBALECO SRL</h2>
        <div className='details'>
          <img src={address} className='details-icon'></img>
          <p>Comuna Cașin, Strada Andresesti, Nr. 66, Județul Bacău</p>
        </div>
        <div className='details'>
          <img src={phone} className='details-icon'></img>
          0754286653
        </div>
        <div className='details'>
          <img src={mail} className='details-icon'></img>
          office@globaleco.org
        </div>
      </div>

      <div className="column middle">
        <div>
          <h2 className='hover-underline-animation'>Misiunea noastră</h2>
          <p>
            Misiunea GLOBALECO este de a contribui activ la un mediu mai curat și mai sănătos printr-o gestionare corectă a deșeurilor și promovarea reciclării. 
            Compania se angajează să utilizeze metode sustenabile pentru a reduce poluarea și a optimiza procesele de colectare și transport.
          </p>
        </div>
      </div>

      <div className="column side">
        <h2>Follow us</h2>
        <div className="column-side-right">
          <SiFacebook className='facebook-icon'></SiFacebook>
        </div>
      </div>
    </div>
  )
}
