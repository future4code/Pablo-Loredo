import express,{Express,Request,response,Response} from "express"
import cors from "cors"
import { countries, country } from "./data"

const app : Express = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
  console.log("Server is running in http://localhost:3003")
})


//Retorna todos os países 
app.get("/countries", (req:Request, res:Response)=>{
  res.send(countries)
})

//Buscar país por id 
app.get("/countries/:id", (req:Request, res:Response)=>{
  const id =req.params.id

  console.log(id)

  const result = countries.find((country)=>{
      return country.id === Number(id)
  })
  if (result)
      res.send(result)
  else
      res.status(404).send("País não encontrado")
  
})

app.get("countries/search/:id",(req,res)=>{
   
  try {
    let result = countries

  if(req.query.name){
    result = result.filter(
      country=>country.name.includes(req.query.name as string) 

    )
  }

  if (req.query.capital) {
    result = result.filter(
       country => country.capital.includes(req.query.capital as string)
    )
 }
 
 if (req.query.continent) {
    result = result.filter(
       country => country.continent.includes(req.query.continent as string)
    )
 }
  } catch (error) {
    res.status(404).send("Paâmeto inválidos")
    
  }
})

  

 