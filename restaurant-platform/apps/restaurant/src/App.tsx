import React from 'react';
import { Button } from '@restaurant-platform/ui';
import { defaultConfig } from '@restaurant-platform/config';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Kitchen Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{defaultConfig.name}</span>
            <Button variant="outline" size="sm">Settings</Button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-4">Active Orders</h2>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Table 12</span>
                  <span className="text-sm text-yellow-600">In Progress</span>
                </div>
                <ul className="text-sm space-y-1">
                  <li>1x Margherita Pizza</li>
                  <li>2x Caesar Salad</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-4">Completed Orders</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Table 8</span>
                  <span className="text-sm text-green-600">Ready</span>
                </div>
                <ul className="text-sm space-y-1">
                  <li>2x Spaghetti Carbonara</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-4">Kitchen Status</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Average Prep Time</span>
                <span className="font-medium">18 mins</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Active Staff</span>
                <span className="font-medium">4</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default App;