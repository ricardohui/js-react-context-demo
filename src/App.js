import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "./LanguageContext";
import ThemeContext from "./ThemeContext";
class App extends Component {
  state = { language: "english", theme: "day" };

  onLanguageChange = language => {
    this.setState({ language });
  };
  onThemeChange = theme => {
    this.setState({ theme });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag cn"
            onClick={() => this.onLanguageChange("chinese")}
          />
        </div>
        <div>
          Select a theme:
          <i className="sun icon" onClick={() => this.onThemeChange("day")} />
          <i
            className="moon icon"
            onClick={() => this.onThemeChange("night")}
          />
        </div>
        <ThemeContext.Provider value={this.state.theme}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
