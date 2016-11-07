/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


    schema : true,
  attributes: {
    name : {
      type : 'string',
      required : true
    },
    title : {
      type : 'string'
    },
    email: {
      type : 'string',
      email : true,
      required : true,
      unique : true
    },

    encryptedPassword:{
      type : 'string'
    }
     ,
  /*  json으로 넘기기 전에 여기서 처리를 해줍니다.
    그런데 데이터베이스에는 여전히 이런것들이 들어가 있게된다.
    하지만 요즘은 그냥 안남게하는듯?
    하지만 위 강의에서는 그렇다고 하였고 schema :true를 쓰면 확실히
    db에는 저장안될 것이므로 그렇게 알고 따를 듯.
    확인결과 실제로 이 펑션은 제이슨형태로 뿌리기 전에만 이렇게 되는 것이고
    schema를 설정하지 않으면 database에는 모든 관련정보가 저장되어있게 됨.
    ㅣㅣ*/
    // toJSON : function(){
    //   var obj= this.toObject();
    //   delete obj.password;
    //   delete obj.confirmation;
    //   delete obj.encryptedPassword;
    //   delete obj._csrf;
    //   return obj;
    // }


  }
};
