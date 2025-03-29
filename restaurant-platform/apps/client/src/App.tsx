import React from 'react';
import { Button } from '@restaurant-platform/ui';
import { defaultConfig } from '@restaurant-platform/config';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">{defaultConfig.name}</h1>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm">Menu</Button>
            <Button variant="primary" size="sm">Order Now</Button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to {defaultConfig.name}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the finest dining in town
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">View Menu</Button>
            <Button variant="outline" size="lg">Make a Reservation</Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;