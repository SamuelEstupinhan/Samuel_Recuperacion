import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { useEffect, useState } from "react";
import { API_URL } from "../config/config";

export default function InformeUsuarios() {
  const cols = [{ title: "Nombre", field: "nombre" }, { title: "Login", field: "login", filtering: false }, { title: "Contraseña", field: "password", filtering: false }, { title: "Rol", field: "rol", filtering: false }];

  const [tableInform, setTableInform] = useState([]);

  useEffect(() => {
    const handleShowInfo = (e) => {
      fetch(`${API_URL}/getuser`)
        .then(response => response.json())
        .then(response => setTableInform(response.data))
        .catch(err => console.log(err))
    }

    handleShowInfo();
  }, []);

  return(
    <MaterialTable
      columns={cols} data={tableInform}
      title="Información de usuarios"
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
            exportFunc: (cols, tabla) => ExportPdf(cols, tabla, "UsuariosPDF"),
          },
          {
            label: "Exportar a CSV",
            exportFunc: (cols, tabla) => ExportCsv(cols, tabla, "UsuariosCSV")
          }
        ],
      }}
    />
  );
}
