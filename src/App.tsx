import { ApolloProvider } from "@apollo/client"
import LocaleContext from "./contexts/LocaleContext"
import { AnimatePresence } from "framer-motion"
import { Suspense, useState } from "react"
import { Loading } from "./components/Loading";
import i18n from "./i18n";
import { client } from "./lib/apollo"
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {

  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => { setLocale(i18n.language); });

  return (
    <ApolloProvider client={client}>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', position: "fixed", backgroundColor: "rgba(var(--bg-primary-rgb), 1)" }}><Loading /></div>}>
          <AnimatePresence>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </AnimatePresence>
        </Suspense>
      </LocaleContext.Provider>
    </ApolloProvider>
  )
}

export default App
