import Stanza from 'togostanza/stanza';

export default class Preview01 extends Stanza {
  async render() {
    this.renderTemplate({
      template: 'stanza.html.hbs',
      parameters: {
        message: `The value is ${this.params.data.value}.`,
      },
    });
  }
//  async render() {
//    this.renderTemplate({
//      template: 'stanza.html.hbs',
//      parameters: {
//        message: this.params.flag ? 'yes' : 'no',
//      },
//    });
//  }
//  async render() {
//    this.renderTemplate(
//      {
//        template: 'stanza.html.hbs',
//        parameters: {
//          greeting: `Hello, ${this.params['say-to']}!`
//        }
//      }
//    );
//  }
}
