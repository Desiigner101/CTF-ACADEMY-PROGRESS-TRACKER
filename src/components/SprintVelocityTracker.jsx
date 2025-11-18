import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SprintVelocityTracker = () => {
  const [expandedSprints, setExpandedSprints] = useState({});

  const sprintData = [
    {
      id: 'sprint1',
      name: 'Sprint 1',
      date: 'Sept 22, 2025',
      totalPoints: 23,
      completed: 23,
      pending: 0,
      totalTasks: 8,
      completedTasks: 8,
      tasks: [
        { name: 'Project Setup (GITHUB)', points: 1, completed: true },
        { name: 'Setting Up Database (User Models)', points: 8, completed: true },
        { name: 'Implement User Registration (Part 1/2)', points: 3, completed: true },
        { name: 'Add User Role (Part 1/2)', points: 3, completed: true },
        { name: 'Implement Login', points: 3, completed: true },
        { name: 'User Logout Functionality', points: 1, completed: true },
        { name: 'Implement Persistent Screen Navigation', points: 3, completed: true },
        { name: 'Session Handling [Tokens]', points: 3, completed: true }
      ]
    },
    {
      id: 'sprint2',
      name: 'Sprint 2',
      date: 'Oct 6, 2025',
      totalPoints: 49,
      completed: 49,
      pending: 0,
      totalTasks: 43,
      completedTasks: 43,
      tasks: [
        { name: 'Implement User Login (Part 2/2)', points: 2, completed: true },
        { name: 'Implement User Registration (Part 2/2)', points: 2, completed: true },
        { name: 'Add User Role (Part 2/2)', points: 2, completed: true },
        { name: 'Session Handling [Tokens] (Part 2/2)', points: 2, completed: true },
        { name: 'Implement navigation bar layout', points: 1, completed: true },
        { name: 'Implement footer layout', points: 1, completed: true },
        { name: 'Add role-based navigation items', points: 1, completed: true },
        { name: 'Test responsive design', points: 1, completed: true },
        { name: 'Backend Development (Part 1/2)', points: 1, completed: true },
        { name: 'Implement new API endpoints for core admin features', points: 1, completed: true },
        { name: 'Optimize database queries', points: 1, completed: true },
        { name: 'Add error handling and logging', points: 1, completed: true },
        { name: 'Write unit tests for new backend services', points: 1, completed: true },
        { name: 'Create API documentation', points: 1, completed: true },
        { name: 'CRUD Operations', points: 2, completed: true },
        { name: 'Home Page Wireframe', points: 1, completed: true },
        { name: 'Landing Page Wireframe', points: 1, completed: true },
        { name: 'Dashboard Wireframe', points: 1, completed: true },
        { name: 'Profile Page Wireframe', points: 1, completed: true },
        { name: 'Admin & Registration Pages Wireframe', points: 1, completed: true },
        { name: 'Challenge List & Challenge Description Wireframe', points: 1, completed: true },
        { name: 'Set Visual Theme and Fonts', points: 1, completed: true },
        { name: 'Design Navigation Elements (Navbar, Sidebar, Footer)', points: 1, completed: true },
        { name: 'Create Component Library (buttons, forms, cards, modals)', points: 1, completed: true },
        { name: 'Apply Consistent Layouts (UI system, spacing, alignment)', points: 1, completed: true },
        { name: 'Interactive States (hover, active, loading spinners, error states)', points: 1, completed: true },
        { name: 'Create Solo Page Design', points: 1, completed: true },
        { name: 'Design Landing Page', points: 1, completed: true },
        { name: 'Design Dashboard Page', points: 1, completed: true },
        { name: 'Design Home Page', points: 1, completed: true },
        { name: 'Design Profile Page', points: 1, completed: true },
        { name: 'Design Online Users & Friends Description', points: 1, completed: true },
        { name: 'Frontend Development (Part 1/2)', points: 1, completed: true },
        { name: 'Implement Challenge List UI & Challenge Description layout', points: 1, completed: true },
        { name: 'Connect frontend components to backend APIs', points: 1, completed: true },
        { name: 'Implement collapsed layout', points: 1, completed: true },
        { name: 'Implement home page layout', points: 1, completed: true },
        { name: 'Implement landing page layout', points: 1, completed: true },
        { name: 'Implement Profile Page layout', points: 1, completed: true }
      ]
    },

    {
      id: 'sprint3',
      name: 'Sprint 3',
      date: 'Oct 20, 2025',
      totalPoints: 29,
      completed: 17,
      pending: 12,
      totalTasks: 17,
      completedTasks: 13,
      tasks: [
        { name: 'Api Testing Via Postman', points: 1, completed: true },
        { name: 'Add Security Measures (Input Sanitization)', points: 1, completed: true },
        { name: 'Finalization of Backend', points: 3, completed: false },
        { name: 'Apply Global Look & Feel', points: 2, completed: true },
        { name: 'Perform frontend testing', points: 1, completed: true },
        { name: 'Add loading indicators and error messages', points: 1, completed: true },
        { name: 'Leaderboards Page', points: 1, completed: true },
        { name: 'FInalization of Frontend', points: 3, completed: true },
        { name: '10 - 15 Core Challenges', points: 5, completed: false },
        { name: 'Challenge Descriptions', points: 1, completed: true },
        { name: 'Difficulty Labels', points: 1, completed: true },
        { name: 'Add Scoring System', points: 2, completed: false },
        { name: 'Search Feature For Challenges', points: 1, completed: true },
        { name: 'Leaderboard System', points: 2, completed: true },
        { name: 'Show Completed Challenges', points: 1, completed: true },
        { name: 'Show Incomplete Challenges', points: 1, completed: true },
        { name: 'Favorites Feature', points: 2, completed: false },
      ]
    }
  ];

  const chartData = sprintData.map(sprint => ({
    name: `${sprint.name}\n${sprint.date}`,
    Completed: sprint.completed,
    Pending: sprint.pending
  }));

  const avgVelocity = (sprintData.reduce((sum, s) => sum + s.completed, 0) / sprintData.length).toFixed(2);
  const totalCompleted = sprintData.reduce((sum, s) => sum + s.completed, 0);
  const sprint2And3TotalPoints = sprintData[1].totalPoints + sprintData[2].totalPoints;
  const sprint2And3Completed = sprintData[1].completed + sprintData[2].completed;
  const sprint2And3Progress = ((sprint2And3Completed / sprint2And3TotalPoints) * 100).toFixed(1);

  const toggleTasks = (sprintId) => {
    setExpandedSprints(prev => ({
      ...prev,
      [sprintId]: !prev[sprintId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-2">CTF Academy Progress</h1>
        <p className="text-center text-gray-600 text-lg mb-10">Team Progress Dashboard</p>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform">
            <h3 className="text-xs uppercase tracking-wider opacity-90 mb-2">Average Velocity</h3>
            <div className="text-4xl font-bold mb-1">{avgVelocity}</div>
            <div className="text-sm opacity-80">Story Points/Sprint</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform">
            <h3 className="text-xs uppercase tracking-wider opacity-90 mb-2">Total Completed</h3>
            <div className="text-4xl font-bold mb-1">{totalCompleted}</div>
            <div className="text-sm opacity-80">Story Points</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform">
            <h3 className="text-xs uppercase tracking-wider opacity-90 mb-2">Sprint 2 & 3 Progress</h3>
            <div className="text-4xl font-bold mb-1">{sprint2And3Progress}%</div>
            <div className="text-sm opacity-80">Combined Completion Rate</div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-50 p-8 rounded-2xl mb-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sprint Velocity Overview</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" tick={{ fontSize: 14, fontWeight: 'bold' }} />
              <YAxis label={{ value: 'Story Points', angle: -90, position: 'insideLeft', style: { fontWeight: 'bold' } }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px', color: 'white' }}
                formatter={(value) => `${value} points`}
              />
              <Bar dataKey="Completed" stackId="a" fill="#4caf50" radius={[0, 0, 8, 8]} />
              <Bar dataKey="Pending" stackId="a" fill="#ffc107" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-8 mt-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded"></div>
              <span className="text-gray-700">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-yellow-500 rounded"></div>
              <span className="text-gray-700">Pending</span>
            </div>
          </div>
        </div>

        {/* Sprint Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sprintData.map(sprint => (
            <div key={sprint.id} className="border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-indigo-500">
                <h3 className="text-xl font-semibold text-indigo-600">
                  {sprint.name} ({sprint.date})
                </h3>
                <button
                  onClick={() => toggleTasks(sprint.id)}
                  className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  {expandedSprints[sprint.id] ? 'Hide Tasks' : 'Show Tasks'}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <div className="text-xs text-gray-600 mb-1">Total Points</div>
                  <div className="text-2xl font-bold">{sprint.totalPoints}</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-xs text-gray-600 mb-1">Completed</div>
                  <div className="text-2xl font-bold text-green-600">{sprint.completed}</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg text-center">
                  <div className="text-xs text-gray-600 mb-1">Pending</div>
                  <div className="text-2xl font-bold text-yellow-600">{sprint.pending}</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="text-xs text-gray-600 mb-1">Tasks Done</div>
                  <div className="text-2xl font-bold text-blue-600">{sprint.completedTasks}/{sprint.totalTasks}</div>
                </div>
              </div>

              <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center text-white font-bold text-sm transition-all duration-1000"
                  style={{ width: `${(sprint.completed / sprint.totalPoints) * 100}%` }}
                >
                  {((sprint.completed / sprint.totalPoints) * 100).toFixed(1)}%
                </div>
              </div>

              {expandedSprints[sprint.id] && (
                <div className="mt-5 pt-5 border-t-2 border-gray-200 max-h-96 overflow-y-auto">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Tasks List</h4>
                  {sprint.tasks.map((task, idx) => (
                    <div 
                      key={idx}
                      className={`flex justify-between items-center p-3 mb-2 rounded-lg transition-all hover:translate-x-1 ${
                        task.completed ? 'bg-green-50' : 'bg-yellow-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                          task.completed ? 'bg-green-500' : 'bg-white border-2 border-yellow-500'
                        }`}>
                          {task.completed && <span className="text-white text-sm font-bold">✓</span>}
                        </div>
                        <span className="text-sm text-gray-700">{task.name}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                        task.completed ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                      }`}>
                        {task.points} pt{task.points !== 1 ? 's' : ''}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SprintVelocityTracker;