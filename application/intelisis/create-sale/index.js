const { requestPromise } = require('../../../helpers/logged-request');
const config = require('../../../config');

const createSale = params => {
  const parameters = {
    Cliente: params.Cliente,
    Total: params.Total,
    Moneda: params.MonedaPago,
    TipoCambio: params.TipoCambio,
    IdFormaPago: params.IdFormaPago,
    UEN: params.UEN,
    IVA: params.IVA,
    CreditoDistribuidor: params.Credito,
    IdPedidoMarketPlace: params.IdPedido,
    OrdenCompra: params.OrdenCompra,
    Proyecto: params.Proyecto,
    Vencimiento: params.Vencimiento,
    Agente: params.Agente,
    IdPrimerPedido: params.IdPrimerPedido, // credito
    EsquemaRenovacion: params.EsquemaRenovacion, // credito
    Observaciones: params.Observaciones,
    UfRFC: params.UfRFC,
  };
  const options = {
    method: 'POST',
    uri: config.ApiErp + 'Venta',
    form: parameters,
    headers: {
      token: config.TokenERP,
    },
  };

  return requestPromise(options)
    .catch((error) => {
      throw error;
    })
    .then(result => result);
};

module.exports = createSale;
