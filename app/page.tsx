import React from "react";
import FormClient from "./_components/form-client";
import { Box } from "@mui/material";
import { ClienteApi } from "./services/clients";
import { Client } from "./@types/client";

export default async function Home() {
  const response = await ClienteApi.buscarClientes();
  const sortedClients = response.sort(
    (a: Client, b: Client) =>
      new Date(b.dtCadastro).getTime() - new Date(a.dtCadastro).getTime()
  );

  const clients = sortedClients.slice(0, 5);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <FormClient clients={clients} />
    </Box>
  );
}
