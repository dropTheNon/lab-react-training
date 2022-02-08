import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div>
      <IdCard lastName="McBroom" firstName="Josh" gender="male" height={1.8034} birth={new Date("1982-07-01")} picture="https://randomuser.me/api/portraits/men/47.jpg"/>
      <IdCard lastName="McBroom" firstName="Gina" gender="female" height={1.7526} birth={new Date("1989-11-18")} picture="https://randomuser.me/api/portraits/women/13.jpg"/>
      <Greetings lang="de">Klaus</Greetings>
      <Greetings lang="es">Mario</Greetings>
      <Random max={47} min={13}/>
      <BoxColor r={255} g={0} b={0}/>
      <CreditCard 
        type="Visa"
        number="0123456789070182"
        expirationMonth={7}
        expirationYear={2025}
        bank="BECU"
        owner="Smokey the Bear"
        bgColor="#11aa99"
        color="white"
      />
    </div>
  );
}

export default App;
