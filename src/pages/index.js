import React from "react";
import theme from "theme";
import { Theme, Link, Text, LinkBox, Box, Em, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			min-width="100px"
			min-height="150px"
			background="rgba(0, 0, 0, 0) conic-gradient(from 0deg at top,#0068ff 48.1%,rgba(0,0,0,1) 100%) 0% 0% /auto repeat scroll padding-box"
			display="flex"
			flex-direction="column"
			align-items="center"
			justify-content="space-around"
			height="auto"
			position="sticky"
			z-index="0"
			top={0}
		>
			<Text margin="0px 0px 0px 0px" height="auto" color="#ffda00" font="50px --fontFamily-googleCourgette">
				Text Intelligence
			</Text>
			<Box
				display="flex"
				height="auto"
				align-items="center"
				justify-content="space-around"
				width="40%"
				min-width="none"
			>
				<LinkBox
					font="normal 900 22px sans-serif"
					color="#f0f005"
					hover-color="#f0056d"
					href="/sentiment-analysis"
					text-decoration-line="underline"
				>
					<Text margin="0px 0px 0px 0px" font="300 20px sans-serif" hover-color="#f005e7" text-shadow="2px 2px 5px #e41139">
						Sentiment Analysis
					</Text>
				</LinkBox>
				<LinkBox
					font="normal 900 22px sans-serif"
					color="#f0f005"
					hover-color="#f0056d"
					href="/sentiment-analysis1"
					text-decoration-line="underline"
				>
					<Text margin="0px 0px 0px 0px" font="300 20px sans-serif" hover-color="#f005e7" text-shadow="2px 2px 5px #e41139">
						Text QnA
					</Text>
				</LinkBox>
				<LinkBox
					font="normal 900 22px sans-serif"
					color="#f0f005"
					hover-color="#f0056d"
					href="/sentiment-analysis11"
					text-decoration-line="underline"
				>
					<Text margin="0px 0px 0px 0px" font="300 20px sans-serif" hover-color="#f005e7" text-shadow="2px 2px 5px #e41139">
						Text QnA - TF
					</Text>
				</LinkBox>
			</Box>
		</Box>
		<Box
			min-width="100px"
			min-height="618px"
			display="flex"
			max-height="max-content"
			background="rgba(0, 0, 0, 0) radial-gradient(ellipse at top left,rgba(0,0,0,0) 0%,#cf71f4 100%) 0% 0% /auto repeat scroll padding-box"
			align-items="center"
			flex-direction="column"
			justify-content="space-around"
			flex-wrap="nowrap"
			overflow-x="auto"
			padding="50px 0px 50px 0px"
			overflow-y="auto"
		>
			<Text
				margin="0px 0px 0px 0px"
				display="flex"
				width="75%"
				font="24px/260% sans-serif"
				text-align="center"
				flex-direction="column"
				align-items="center"
				white-space="inherit"
			>
				Azure Cognitive Services provides a powerful set of text analytics AI capabilities that enable developers to extract valuable insights from unstructured text data.
				<br />
				<br />
				The text analytics AI services offered by Azure Cognitive Services include:
				<br />
				<Span
					text-align="left"
					width="50%"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="40px --fontFamily-sansHelvetica"
				>
					<Em
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						font="italic 22px Frutiger, &quot;Frutiger Linotype&quot;, Univers, Calibri, &quot;Gill Sans&quot;, &quot;Gill Sans MT&quot;, &quot;Myriad Pro&quot;, Myriad, &quot;DejaVu Sans Condensed&quot;, &quot;Liberation Sans&quot;, &quot;Nimbus Sans L&quot;, Tahoma, Geneva, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif"
					>
						1. Sentiment Analysis
						<br />
						2. Key Phrase Extraction
						<br />
						3. Named Entity Recognition
						<br />
						4. Language Detection
						<br />
						{" "}5. Entity Linking
						<br />
						6. Text Analytics for Health
						<br />
						<br />
					</Em>
				</Span>
				Azure Cognitive Services provides robust APIs and SDKs for different programming languages, making it accessible for developers to incorporate text analytics AI functionalities into their applications without needing extensive knowledge in machine learning or natural language processing.
			</Text>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"648874eb72a6d3001823bded"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});