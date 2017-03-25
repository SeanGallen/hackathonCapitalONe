/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 *  * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 *   * nodejs skill development kit.
 *    * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 *     * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 *      * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 *       **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {


  'en-US': {
    translation: {

      GET_FACT_MESSAGE: "Hi, what credit information would you like to know? ",
      GET_NEW_MESSAGE: "I like farts.",
      HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
      HELP_REPROMPT: 'What can I help you with?',
      STOP_MESSAGE: 'Goodbye!',
    },
  },

};

const handlers = {
  'LaunchRequest': function () {
    this.emit('OfferMeCapitalOne');
  },

  'BestCreditCards': function () {
    var slotValue = this.event.request.intent.slots;
    console.log("this is one I am consoling ", slotValue);

    const speechOutput = this.t('GET_NEW_MESSAGE');
    this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'));
  },
  'OfferMeCapitalOne': function () {

    const speechOutput = this.t('GET_FACT_MESSAGE');
    this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'));
  },


  'AMAZON.HelpIntent': function () {
    const speechOutput = this.t('HELP_MESSAGE');
    const reprompt = this.t('HELP_MESSAGE');
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'SessionEndedRequest': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
};

exports.handler = (event, context) => {
  const alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  // To enable string internationalization (i18n) features, set a resources object.
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

