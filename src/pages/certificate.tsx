export default function Certificate() {
  const certificates = [
    { id: 1, name: "Certificate 1", issuedTo: "John Doe" },
    { id: 2, name: "Certificate 2", issuedTo: "Jane Smith" },
    { id: 3, name: "Certificate 3", issuedTo: "Alice Johnson" },
    { id: 4, name: "Certificate 4", issuedTo: "Bob Williams" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 flex flex-col items-center p-4 sm:p-6 max-w-2xl mx-auto">
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6">TON Trust</h1>
      
      <h2 className="text-xl font-semibold mb-4">Issue your certificate</h2>
      
      <ul className="space-y-4 w-full">
        {certificates.map((cert) => (
          <li key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center p-4">
              <div className="w-32 h-32 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="font-semibold text-lg">{cert.name}</h2>
                <p className="text-sm text-gray-500">{cert.issuedTo}</p>
              </div>
              {/* <div className="flex items-center space-x-2">
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    id={`toggle-${cert.id}`}
                    className="sr-only peer"
                  />
                  <label
                    htmlFor={`toggle-${cert.id}`}
                    className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  >
                    <span className="sr-only">Toggle certificate visibility</span>
                  </label>
                </div>
                <label htmlFor={`toggle-${cert.id}`} className="text-sm font-medium text-gray-900">
                  xyz
                </label>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}