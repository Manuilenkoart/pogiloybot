const { arryImg } = require("./arryImg");
const { arryReply } = require("./arryReply");

const voiceReplyText = () => {
  return Reply(arryReply);
  // const randomNumber = getRandomInt(arryReply.length - 1);
  // console.log("randomNumber", randomNumber);

  // return arryReply[randomNumber];
};
const voiceReplyImg = () => {
  return Reply(arryImg);

  // const randomImg = getRandomInt(arryImg.length - 1);
  // console.log("randomImg", randomImg);
  // return arryImg[randomImg];
};
const Reply = (parametr) => {
  const randomNumber = getRandomInt(parametr.length - 1);
  console.log("randomNumber", randomNumber);

  return parametr[randomNumber];
};
const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max - 0 + 1) + 0);
};

module.exports = { voiceReplyText, voiceReplyImg, getRandomInt };
