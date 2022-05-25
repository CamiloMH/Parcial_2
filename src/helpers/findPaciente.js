const Paciente = require("../models/pacientes");
const { verificarRut } = require("./verificarRut");
const { Op } = require('sequelize')

const findId = async (id) => {
  id = parseInt(id);
  const paciente = await Paciente.findOne({
    where: {
      id,
    },
  });
  if (!paciente) {
     throw new Error("El paciente no existe");
  }
  return true
};

const findRutParam = async (rut,req) => {
  const { rutValido, rutFormat } = verificarRut(rut)
  if (!rutValido) throw new Error("Rut invalido")
  
  const arrayRut = rutFormat.split('-').shift()
  const rutParse = parseInt(arrayRut)
  const paciente = await Paciente.findOne({
    where: {
      rut: rutParse,
    }
  })
  if (!paciente) {
    throw new Error("El paciente no existe");
  }
  return true
}

const validateRut = async (value,req) => {
  const { dv, rut } = req.body
  if(typeof value === 'string') throw new Error("El rut no debe ser un string")

  if(value < 10000000 || value > 99999999) throw new Error("El rut debe tener 8 digitos")
  const { rutValido, rutFormat } = verificarRut(`${rut}-${dv}`)
  if (!rutValido) throw new Error("Rut invalido")

  const arrayRut = rutFormat.split('-').shift()
  const rutParse = parseInt(arrayRut)
  const paciente = await Paciente.findOne({
    where: {
      rut: rutParse,
    }
  })
  if (paciente) {
    throw new Error("El paciente ya existe");
  }
  return true
}

const validateAge = async (value,req) => {
  if(typeof value === 'string') throw new Error("La edad no debe ser un string")
  if(value < 1 || value > 120) throw new Error("La edad debe estar entre 1 y 120")
  return true
}

const validateMobilePhone = async (value,req) => {
  if(typeof value === 'string') throw new Error("El celular no debe ser un string")
  if(value < 100000000 || value > 999999999) throw new Error("El celular debe tener 9 digitos")
  return true
}

const validateEmailExists = async (value,req, method) => {
  if(method === 'post'){
    const paciente = await Paciente.findOne({
      where: {
        correo: value,
      }
    })
    if (paciente) throw new Error("El correo ya existe");
    return true
  }

  if(method === 'put'){
    const { id } = req.params
    const paciente = await Paciente.findOne({
      where: {
        correo: value,
        id: {
          [Op.ne]: id
        }
      }
    })
    if (paciente) throw new Error("El correo ya existe");
    return true
  }
}



module.exports = {findId, findRutParam, validateRut, validateAge, validateMobilePhone, validateEmailExists};
