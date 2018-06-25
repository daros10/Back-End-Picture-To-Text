/**
 * Celebridad.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:"string"
    },
    genero:{
      type:"string"
    },
    edad:{
      type: "number"
    },
    clothe:{
      type: "string"
    },
    lugarFoto:{
      type:"string"
    },
    imgCelebridad:{
      type:"string"
    },

    usuarioId:{
      model:"Usuario"
    }

  },

};

