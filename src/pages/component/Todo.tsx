import React from "react";

type TodoProps = {
  id: number;
  text: string;
  completed: boolean;
};

const Todo = ({ id, text, completed }: TodoProps) => {
  return (
    <div className="flex items-center mt-2">
      <table className="table-auto border border-collapse border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Age</th>
          </tr>
        </thead>
        <tbody>

          

          <tr>
            <td className="px-4 py-2 border">1</td>
            <td className="px-4 py-2 border">{text}</td>
            <td className="px-4 py-2 border">
              <div className="border bg-black text-white cursor-pointer rounded px-2 py-1">Delete</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
