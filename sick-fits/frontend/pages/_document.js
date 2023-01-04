import Document, { Html, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Main />
        <NextScript />
      </Html>
    );
  }
}
