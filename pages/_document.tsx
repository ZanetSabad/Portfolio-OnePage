import Document, { Html, Head, Main, NextScript } from 'next/document';
const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

export default class MyDocumnet extends Document {
	render() {
	return (
		<Html lang="cs">
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="icon" type="image/png" href="/favicon1.png" />
				{/* Google Analytics Measurement ID*/}
				<script async src={gtag} />
          {/* {/ Inject the GA tracking code with the Measurement ID /} */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname
                });
              `,
            }}
          />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
		);
	}
}
