import React from "react";
import Layout from "@theme/Layout";

function Roles() {
  return (
    <Layout title='Roles'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          Edit <code>pages/roles/index.js</code> and save to reload.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "colunn",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </Layout>
  );
}

export default Roles;
