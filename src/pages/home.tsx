import { CheckCircle, SkipForward, XCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 flex flex-col items-center p-4 sm:p-6 max-w-2xl mx-auto">
      <header className="w-full text-center mb-6">
        <h1 className="text-2xl font-bold">TON Trust</h1>
      </header>
      
      <main className="w-full flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <p className="text-lg">
            Welcome to TON Trust. Please review the terms and conditions before proceeding.
          </p>
        </div>
        
        <div className="w-full flex flex-row justify-between space-x-2">
          <button 
            className="flex-1 py-4 px-2 bg-green-500 text-white rounded-md flex items-center justify-center text-sm font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            <CheckCircle className="mr-1 h-4 w-4" />
            Accept
          </button>
          <button 
            className="flex-1 py-4 px-2 bg-gray-300 text-gray-700 rounded-md flex items-center justify-center text-sm font-medium hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            <SkipForward className="mr-1 h-4 w-4" />
            Skip
          </button>
          <button 
            className="flex-1 py-4 px-2 bg-red-500 text-white rounded-md flex items-center justify-center text-sm font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            <XCircle className="mr-1 h-4 w-4" />
            Reject
          </button>
        </div>
      </main>
      
      <footer className="w-full text-center mt-6 text-sm text-gray-600">
        © 2023 TON Trust. All rights reserved.
      </footer>
    </div>
  )
}