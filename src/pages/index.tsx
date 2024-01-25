import { SquidWidget } from "@0xsquid/widget"

export default function App() {
  return <SquidWidget config={{
    integratorId: "squid-test",
    apiUrl: "https://v2.api.squidrouter.com"
  }
  } />
}
