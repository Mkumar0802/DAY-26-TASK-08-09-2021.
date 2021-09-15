import './App.css';

function App() {
  return (
    <div className="App">
      <Plans />
    </div>
  );
}

function Plans(){
  const details=[{
    plan:"FREE",
    price:"$0",
    features:[" Single User"," 5GB Storage"," Unlimited Public Projects"," Community Access"," Unlimited Private Projects"," Dedicated Phone Support"," Free Subdomain"," Monthly Status Reports"],
  },
  {
    plan:"PLUS",
    price:"$9",
    features:[" 5 Users"," 50GB Storage"," Unlimited Public Projects"," Community Access"," Unlimited Private Projects"," Dedicated Phone Support"," Free Subdomain"," Monthly Status Reports"],
  },
  {
    plan:"PRO",
    price:"$49",
    features:[" Unlimited Users"," 150GB Storage"," Unlimited Public Projects"," Community Access"," Unlimited Private Projects"," Dedicated Phone Support"," Unlimited Free Subdomain"," Monthly Status Reports"],
  }]
  return (
    <>
    <div className="features">
      {details.map((data) => (< Card name={data.plan} price={data.price} features={data.features} />))}
    </div></>
  )
}

function Card(props){
  return (
   <div className="card">
     <h5 className="plan-name">{props.name}</h5>
     <p className="price">{props.price}<span className="price-duration">/month</span></p>
     <hr></hr>
     <ul className="features">
     {props.features.map((features)=>(
       <li>{features}</li>
     ))}
     </ul>
     <button className="buy">BUY</button>
   </div>
  )
}

export default App;


