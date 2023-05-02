import './App.css'
import { AppProviders } from './providers/app-providers'
// import Application from "./components/application/Application";
// import Skills from "./components/skills/Skills";
// import Counter from "./components/counter/Counter";
import { MuiMode } from './components/mui/mui-mode'
import { CounterTwo } from './components/counter-two/CounterTwo'
import { useCounter } from './hooks/use-counter/useCounter'
import { Users } from './components/users/Users'

function App() {
  const { count, increament, decreament } = useCounter({ initialCount: 0 })
  // const skills = ["HTML", "CSS", "JavaScript"];
  return (
    <AppProviders>
      <div className="App">
        {/* <Application />
      <hr />
      <Skills skills={skills} />
      <hr /> */}
        {/* <Counter /> */}
        <MuiMode />

        <CounterTwo
          count={count}
          handleIncreament={increament}
          handleDencreament={decreament}
        />
        <Users />
      </div>
    </AppProviders>
  )
}

export default App
