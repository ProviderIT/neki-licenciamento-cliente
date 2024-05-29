"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Client } from "../@types/client";
import { ContratosApi } from "../services/contract";
import { toast } from "react-toastify";

interface FormClientProps {
  clients: Client[];
}

export default function FormClient({ clients }: FormClientProps) {
  const { register, handleSubmit, control, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [dataContract, setDataContract] = React.useState<any>({} as any);
  const [criandoCheckout, setCheckout] = React.useState<boolean>(false);

  const onSubmit = async (data: any) => {
    const dados = {
      tabelaPrecoFrequenciaId: parseInt(data.tabelaPrecoFrequenciaId),
      clienteId: parseInt(data.clienteId),
      quantidade: data.quantidade,
      dtInicio: data.dtInicio,
      dtFim: data.dtFim,
      usuarioId: 1,
    };
    if (dados) {
      setCheckout(true);
      await ContratosApi.criarRascunho(dados)
        .then((response) => {
          if (response) {
            const novaUrl = response.urlRecuperacaoContrato.replace(
              "servico-front",
              "checkout"
            );
            window.open(novaUrl, "_blank");
          }
        })
        .catch((error) => {
          if (error) {
            toast.error(`${error.response.data.userMessage}`);
          }
        })
        .finally(() => {
          reset();
          setCheckout(false);
        });
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <Card sx={{ width: "100%", overflow: "auto" }}>
      <CardContent sx={{ py: 5 }}>
        <Box paddingX={1}>
          <Typography variant="h4">Dados do cadastro</Typography>
          <Divider />
        </Box>
        <Grid container spacing={4} mt={2} px={1}>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth disabled={criandoCheckout}>
              <InputLabel id="select-label1">
                Tabela preço frequência ID
              </InputLabel>
              <Select
                labelId="select-label1"
                id="simple-select-ID1"
                label="Tabela preço frequência ID"
                {...register("tabelaPrecoFrequenciaId")}
              >
                <MenuItem value={1}>Plano Platinium</MenuItem>
                <MenuItem value={2}>Plano Bronze</MenuItem>
                <MenuItem value={3}>Plano Prata</MenuItem>
                <MenuItem value={4}>Plano Ouro</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth disabled={criandoCheckout}>
              <InputLabel id="select-clientes">Clientes</InputLabel>
              <Controller
                name="clienteId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    labelId="select-clientes"
                    id="simple-select-clientsID"
                    label="Clientes"
                    {...field}
                  >
                    {clients.map((client) => (
                      <MenuItem value={client.id} key={client.id}>
                        {client.nomeFantasia}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              label="Quantidade"
              type="number"
              fullWidth
              disabled={criandoCheckout}
              {...register("quantidade")}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              label="Data Início"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              disabled={criandoCheckout}
              defaultValue={today}
              inputProps={{ min: today }}
              {...register("dtInicio")}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              label="Data Fim"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              disabled={criandoCheckout}
              defaultValue={today}
              inputProps={{ min: today }}
              {...register("dtFim")}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              label="Usuário ID"
              type="number"
              disabled={criandoCheckout}
              value={1}
              fullWidth
              {...register("usuarioId")}
            />
          </Grid>
        </Grid>
        <CardActions sx={{ py: 5 }}>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            gap={4.5}
            justifyContent="center"
          >
            <Divider />
            <Button
              type="submit"
              variant="outlined"
              sx={{ width: 345 }}
              onClick={handleSubmit(onSubmit)}
              disabled={criandoCheckout}
            >
              {criandoCheckout ? (
                <CircularProgress size={20} />
              ) : (
                "Iniciar checkout"
              )}
            </Button>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
}
