import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
