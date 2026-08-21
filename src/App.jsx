import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { LanguageProvider } from './context/LanguageContext'
import NotFound from './pages/NotFound'
import StoryDetail from './pages/StoryDetail'
import StoryList from './pages/StoryList'
import Footer from './components/Footer'

function App() {

  return (
    <LanguageProvider>
    <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header/>
          <main className="flex-grow">
            <Routes >
              <Route 
                path="/"
                element={<StoryList />}
              />
              <Route
                path="/story/:id"
                element={<StoryDetail />}
              />
              <Route 
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
    </BrowserRouter>


    </LanguageProvider>
  )
}

export default App
