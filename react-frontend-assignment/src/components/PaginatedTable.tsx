import { useEffect, useState } from "react";
import { TableData } from "../types";
import { fetchTableData } from "../api/api";
import ProjectTable from "./ProjectTable";
import Pagination from "./Pagination";
import "../styles/style.css";

const PaginatedTable: React.FC = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const itemsPerPage = 5;

  useEffect(() => {
    const loadTable = async () => {
      try {
        const data = await fetchTableData();
        setTableData(data);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };
    loadTable();
  }, []);

  return (
    <div className="table-container">
      <h1 className="table-heading">SaaS Labs Assignment</h1>

      <ProjectTable
        tableData={tableData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        loading={loading}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default PaginatedTable;
