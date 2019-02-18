import React from "react";
import LanguageContext from "./LanguageContext";
import ThemeContext from "./ThemeContext";

class Button extends React.Component {
  renderTheme = theme => {
    const style = theme === "day" ? "primary" : "secondary";
    return (
      <button className={`ui ${style} button`} type="submit">
        <LanguageContext.Consumer>
          {langauge => this.renderButtonText(langauge)}
        </LanguageContext.Consumer>
      </button>
    );
  };
  renderButtonText = language => {
    const buttonText = language === "english" ? "Submit" : "送出";
    return buttonText;
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => this.renderTheme(theme)}
      </ThemeContext.Consumer>
    );
  }
}

export default Button;
