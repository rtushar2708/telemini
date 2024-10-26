'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ChevronRight, Send } from 'lucide-react'

interface Video {
  id: number
  title: string
  progress: number
}

export default function FeedBack() {
  const [videos, setVideos] = useState<Video[]>([
    { id: 1, title: "Introduction to TON", progress: 75 },
    { id: 2, title: "Smart Contracts Basics", progress: 50 },
    { id: 3, title: "TON Storage", progress: 25 },
    { id: 4, title: "TON Payments", progress: 0 },
    { id: 5, title: "Advanced TON Concepts", progress: 10 },
  ])

  const [showFeedback, setShowFeedback] = useState(false)
  const [feedback, setFeedback] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 flex flex-col items-center p-4 sm:p-6 max-w-2xl mx-auto">
      <header className="w-full text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-800">TON Trust</h1>
        <p className="text-indigo-600 mt-2">Your journey to mastering TON</p>
      </header>

      <main className="w-full flex-1 flex flex-col space-y-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4 p-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="flex-grow space-y-2">
                  <h2 className="font-semibold text-lg text-indigo-800">{video.title}</h2>
                  <div className="w-full bg-indigo-100 rounded-full h-2">
                    <div 
                      className="bg-indigo-500 h-2 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${video.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-indigo-600">{video.progress}% completed</p>
                </div>
                <ChevronRight className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
          </motion.div>
        ))}

        <motion.section 
          className="space-y-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setShowFeedback(!showFeedback)}
            className="w-full py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            {showFeedback ? 'Hide Feedback' : 'Give Feedback'}
          </button>
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Please enter your feedback here..."
                  className="w-full h-32 p-3 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                ></textarea>
                <button
                  onClick={() => {
                    alert('Feedback submitted: ' + feedback)
                    setFeedback('')
                    setShowFeedback(false)
                  }}
                  className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center space-x-2"
                >
                  <span>Submit Feedback</span>
                  <Send className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </main>

      <footer className="w-full text-center mt-8 text-sm text-indigo-600">
        © 2023 TON Trust. All rights reserved.
      </footer>
    </div>
  )
}