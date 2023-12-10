import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { useEffect, useState } from "react";
import { API_URL } from "../config/config";


export default function InformeColeccion() {
  const cols = [{ title: "Nombre", field: "nombre", filtering: false, }, { title: "Marca", field: "marca" }, { title: "Tipo", field: "tipo" }, { title: "Precio", field: "precio", type: "numeric", filtering: false, }];
  const [tableInform, setTableInform] = useState([]);

  useEffect(() => {
    const handleShowInfo = (e) => {
    fetch(`${API_URL}/getItems`)
      .then(response => response.json())
      .then(response => setTableInform(response.data))
      .catch(err => console.log(err))
    }

    handleShowInfo();
  }, []);

  return(
    <MaterialTable
      columns={cols} data={tableInform}
      renderSummaryRow={({ column, data }) =>
        column.field === "precio"
          ? {
            value: data.reduce((agg, row) => agg + row.precio, 0),
          }
          : undefined
      }
      title="Supermercado Samuel"
      options={{
        draggable: true,
        columnsButton: true,
        filtering: true,
        headerStyle: {
          backgroundColor: "#b2ffc3",
          color: "rgba(70,69,69,0.87)",
        },
        exportMenu: [
          {
            label: "Exportar a PDF",
            exportFunc: (cols, tabla) => ExportPdf(cols, tabla, "SupermeracadoPDF"),
          },
          {
            label: "Exportar a CSV",
            exportFunc: (cols, tabla) => ExportCsv(cols, tabla, "SupermercadoCSV")
          }
        ],
      }}
    />
  );
}
