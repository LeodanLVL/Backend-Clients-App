const { request, response } = require("express");
const Provider = require("../models/Provider");

const getProviders = async (req = request, resp = response) => {
  try {
    const providers = await Provider.find();
    return resp.json({
      ok: true,
      data: providers,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: "Contacte al admin",
      error,
    });
  }
};

const getProviderById = async (req = request, resp = response) => {
  try {
    const { id } = req.params;
    const provider = (await Provider.findById(id)) || false;

    // Check if there is not a provider
    if (!provider) {
      return resp.json({
        ok: false,
        data: null,
        msg: `We could not find an element with this id(${id})`,
      });
    }

    return resp.json({
      ok: true,
      data: provider,
    });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: "Contacte al admin",
      error,
    });
  }
};

const insertProvider = async (req = request, resp = response) => {
  try {
    const provider = await Provider.create({ ...req.body });

    return resp.json({ ok: true, data: provider });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: "Contacte al admin",
      error,
    });
  }
};

const updateProvider = async (req = request, resp = response) => {
  try {
    return resp.json({ ok: true, msg: "Al validations passed" });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: "Contacte al admin",
      error,
    });
  }
};

const deleteProvider = async () => {
  try {
    return resp.json({ ok: true, msg: "Al validations passed" });
  } catch (error) {
    console.log(error);
    resp.status(500).json({
      ok: false,
      msg: "Contacte al admin",
      error,
    });
  }
};

module.exports = {
  getProviders,
  getProviderById,
  insertProvider,
  updateProvider,
  deleteProvider,
};
