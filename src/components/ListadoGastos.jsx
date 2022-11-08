import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          {gastosFiltrados.length ? (
            <p
              style={{
                textAlign: "center",
                fontSize: 18,
                backgroundColor: "black",
                padding: 10,
                color: "#fff",
              }}
            >
              desliza a la derecha para{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "green",
                  padding: 5,
                }}
              >
                editar
              </span>{" "}
              y a la izquierda para{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#b91c1c",
                  padding: 5,
                }}
              >
                eliminar
              </span>{" "}
              gastos
            </p>
          ) : (
            ""
          )}

          <h2>
            {gastosFiltrados.length
              ? "Gastos"
              : "No Hay Gastos en esta categoría"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          {gastos.length ? (
            <p
              style={{
                textAlign: "center",
                fontSize: 18,
                backgroundColor: "black",
                padding: 10,
                color: "#fff",
              }}
            >
              desliza a la derecha para{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "green",
                  padding: 5,
                }}
              >
                editar
              </span>{" "}
              y a la izquierda para{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#b91c1c",
                  padding: 5,
                }}
              >
                eliminar
              </span>{" "}
              gastos
            </p>
          ) : (
            ""
          )}

          <h2 style={{ marginBottom: 50, textAlign: "center" }}>
            {gastos.length ? "Gastos" : "No Hay Gastos aún"}
          </h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
