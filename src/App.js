import React from "react";
import Index from "pages/index";
import SentimentAnalysis from "pages/sentimentAnalysis";
import SentimentAnalysis1 from "pages/sentimentAnalysis1";
import SentimentAnalysis11 from "pages/sentimentAnalysis11";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/sentiment-analysis' component={SentimentAnalysis}/>
			<Route exact path='/sentiment-analysis1' component={SentimentAnalysis1}/>
			<Route exact path='/sentiment-analysis11' component={SentimentAnalysis11}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
