import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import TrendingRoute from './components/TrendingRoute'
import './App.css'
import ThemeContext from './context/ThemeContext'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  changeTheTheme = () => {
    this.setState(pre => ({isDark: !pre.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <ThemeContext.Provider
        value={{isDark, changeTheTheme: this.changeTheTheme}}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
            <ProtectedRoute exact path="/trending" component={TrendingRoute} />
            <ProtectedRoute exact path="/gaming" component={GamingRoute} />
            <ProtectedRoute
              exact
              path="/savedvideos"
              component={SavedVideosRoute}
            />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}

export default App
