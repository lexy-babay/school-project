function StudentList() {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 shadow mt-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Student List</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left border-b">Name</th>
              <th className="p-2 text-left border-b">Grade</th>
              <th className="p-2 text-left border-b">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-2 border-b">John Doe</td>
              <td className="p-2 border-b">Grade 5</td>
              <td className="p-2 border-b">+1 234 567 890</td>
            </tr>
            {/* Additional rows can go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
