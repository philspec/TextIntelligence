import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"sentiment-analysis"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			min-width="100px"
			min-height="100px"
			height="768px"
			background="rgba(0, 0, 0, 0) radial-gradient(circle at top left,rgba(0,0,0,0) 0%,#76d777 100%) 0% 0% /auto repeat scroll padding-box"
			display="flex"
			flex-direction="column"
			align-items="center"
			overflow-x="auto"
			overflow-y="scroll"
			max-width="100%"
			max-height="fit-content"
		>
			<Text
				margin="0px 0px 0px 0px"
				padding="50px 0px 0px 0px"
				display="flex"
				width="50%"
				justify-content="center"
				align-items="center"
				font="42px --fontFamily-googleCourgette"
				height="100px"
			>
				Sentiment Analysis
			</Text>
			<Box
				min-width="100px"
				min-height="50%"
				width="50%"
				display="flex"
				align-items="center"
				justify-content="space-around"
				align-content="space-around"
				flex-direction="column"
				height="fit-content"
				border-color="rgba(0, 0, 0, 0.48)"
				margin="50px 0px 0px 0px"
			>
				<Components.QuarklycommunityKitTextarea
					placeholder="Type some text to analyze sentiment"
					width="75%"
					height="fit-content"
					overflow-y="auto"
					padding="0 0 0 0"
					placeholder-display="flex"
					placeholder-justify-content="center"
					placeholder-align-items="center"
					display="flex"
					justify-content="flex-start"
					max-height="fit-content"
					max-width="100%"
				/>
				<Text
					margin="0px 0px 0px 0px"
					width="60%"
					text-align="center"
					font="16px/160% sans-serif"
					border-color="rgba(0, 0, 0, 0.8)"
					color="rgba(0, 0, 0, 0.85)"
				>
					Type anything from a simple word to a paragraph to analyze the overall sentiment of the text with outputs as positive, negative and neutral.{" "}
				</Text>
				<Button border-radius="10px" hover-box-shadow="1px 1px 2px 2px #669bde">
					Submit
				</Button>
				<Text margin="0px 0px 0px 0px" font="22px --fontFamily-sansHeavy" color="#f90808">
					Some text
				</Text>
			</Box>
			<Text
				margin="0px 0px 0px 0px"
				width="70%"
				font="20px/160% --fontFamily-sans"
				text-align="center"
				padding="40px 0px 0px 0px"
			>
				This is just an illustration of the integration of this sentiment analysis service by Microsoft Azure. This can be very easily scaled to enterprise level usage for processing sentiment analysis of large amounts of data and provide valuable insights about the customer satisfaction for a wide range of products and services.
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