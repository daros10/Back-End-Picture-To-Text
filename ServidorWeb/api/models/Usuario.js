/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreUsuario:{
      type:"string"
    },
    contrasenaUsuario:{
      type:"string"
    },

    texto:{
      collection:"Texto",
      via:"usuarioId"

    },

    celebridad:{
      collection:"Celebridad",
      via:"usuarioId"

    }


  },

};

