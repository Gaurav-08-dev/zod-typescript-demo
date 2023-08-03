import Form from "./components/Form"
import fetchUsers from "./lib/fetchUsers"


fetchUsers()

function App() {


  return (
    <main className="">
      {Form()}
    </main>
  )
}

export default App
