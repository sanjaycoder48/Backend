import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex justify-center gap-8 mb-8">
          <img 
            src="/vite.svg" 
            alt="Vite logo" 
            className="h-20 w-20 hover:scale-110 transition-transform"
          />
          <img 
            src="./assets/react.svg" 
            alt="React logo" 
            className="h-20 w-20 hover:scale-110 transition-transform animate-spin-slow"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Vite + React
        </h1>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            Count is {count}
          </button>
        </div>

        <p className="text-gray-600 text-center mb-4">
          Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">src/App.jsx</code> and save to test HMR
        </p>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
