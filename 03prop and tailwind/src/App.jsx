
import './App.css'
import Card from './component/Card'
function App() {
return(
<>
<h1 className="text-3xl font-bold underline bg-red-500 mb-10">
  Hello world!
</h1>  
<Card username="Govind" view="visit me" ></Card>
<Card username="Mohan" view="Follow me"></Card>
</>
)
}

export default App
