import { useState } from "react"
import Bar from "../components/elementos/bar"
import TableControl from "../components/elementos/table"
import Navbar_Staff from "../components/layout/Navbar_Staff"


const Controls_news = () => {
  const [search, setsearch] = useState("")
  /**
   * Todo agregar barra con buscador
   */
  // console.log(search);
  
  return (
    <>
    <Navbar_Staff />
    <article className="p-10">
      <Bar setsearch={setsearch} />
      <TableControl />
    </article>
    </>
  )
}

export default Controls_news