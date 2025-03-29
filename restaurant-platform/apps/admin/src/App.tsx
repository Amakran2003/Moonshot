import React from 'react';
import { Button } from '@restaurant-platform/ui';
import { defaultConfig } from '@restaurant-platform/config';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Restaurant Platform Admin</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">Settings</Button>
            <Button variant="primary" size="sm">Add Restaurant</Button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="mt-1 text-gray-500">Manage your restaurant platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4">Active Restaurants</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-100 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{defaultConfig.name}</span>
                  <span className="text-sm text-green-600">Active</span>
                </div>
                <p className="text-sm text-gray-500">{defaultConfig.contact.address}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4">Platform Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Orders</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Active Users</span>
                <span className="font-medium">567</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Revenue</span>
                <span className="font-medium">$12,345</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="text-sm">
                <p className="text-gray-900">New restaurant onboarded</p>
                <p className="text-gray-500">2 hours ago</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-900">System update completed</p>
                <p className="text-gray-500">5 hours ago</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default App;