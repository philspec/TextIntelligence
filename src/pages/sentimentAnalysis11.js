import React from "react";
import theme from "theme";
import { Theme, Link, Text, LinkBox, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"sentiment-analysis11"} />
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
				Text Query - Tensorflow.js
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
					placeholder="Type some text "
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
				<Components.QuarklycommunityKitTextarea
					placeholder="Type a question about a detail from above text"
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
					Ask a query from the text{" "}
				</Text>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					justify-content="space-around"
					align-items="center"
				>
					<LinkBox flex-direction="column">
						<Text margin="0px 0px 0px 0px">
							Click for a sample text and question
						</Text>
					</LinkBox>
				</Box>
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
				padding="10px 0px 0px 0px"
			>
				This service is powered by Tensorflow.js models by Google.{" "}
				<br />
				<br />
				This model is a light-weight text analysis ML Neural network that runs purely on the client side infrastructure itself. So, based a little latency and less accuracy is observed compared to the Azure's version. Models like these can be particularly beneficial in scenarios where low latency, real-time data processing, reduced bandwidth usage, and enhanced security and privacy are critical.{"\n\n"}
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