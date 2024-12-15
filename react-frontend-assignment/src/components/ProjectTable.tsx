import React from "react";
import { TableData } from "../types";

interface ProjectTableProps {
  tableData: TableData[];
  currentPage: number;
  itemsPerPage: number;
}

const ProjectTable: React.FC<ProjectTableProps> = ({
  tableData,
  currentPage,
  itemsPerPage,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTableData = tableData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <table className="project-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {currentTableData.map((data) => (
          <tr key={data["s.no"]}>
            <td>{data["s.no"] + 1}</td>
            <td>{data?.["percentage.funded"]}%</td>
            <td>{data?.["amt.pledged"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;