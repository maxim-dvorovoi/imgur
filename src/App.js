import React, { Component } from 'react';
import './App.css';
import Viral from './pages/Viral'
import Top from './pages/Top'
import Header from './components/Header'
import Footer from './components/Footer'
import ArticleItem from './pages/ArticleItem'
import NotFound from './pages/404'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
            <div>
                <Switch>
                    <Route exact path="/" component={Viral} />
                    <Route exact path="/top" component={Top} />
                    <Route path="/:id/:id" component={ArticleItem} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
