import React from 'react';

function StudentList({ students }) {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 shadow mt-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Student List</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-2 text-left border-b">ID</th>
              <th className="p-2 text-left border-b">Name</th>
              <th className="p-2 text-left border-b">Grade</th>
              <th className="p-2 text-left border-b">Phone</th>
              <th className="p-2 text-left border-b">Email</th>
              <th className="p-2 text-left border-b">Address</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                <td className="p-2 border-b">{student.id}</td>
                <td className="p-2 border-b">{student.name}</td>
                <td className="p-2 border-b">{student.grade}</td>
                <td className="p-2 border-b">{student.phone}</td>
                <td className="p-2 border-b">{student.email}</td>
                <td className="p-2 border-b">{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Sample data to test the component
const sampleStudents = [
  { id: 1, name: 'John Doe', grade: 'Grade 5', phone: '+1 234 567 890', email: 'john@example.com', address: '123 Main St' },
  { id: 2, name: 'Jane Smith', grade: 'Grade 6', phone: '+1 987 654 321', email: 'jane@example.com', address: '456 Maple Ave' },
  // Additional students can be added here
];

export default function App() {
  return <StudentList students={sampleStudents} />;
}
