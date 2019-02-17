import React from "react";
import LanguageContext from "./LanguageContext";

class Button extends React.Component {
  renderButton = language => {
    const buttonText = language === "english" ? "Submit" : "送出";
    return (
      <button className="ui primary button" type="submit">
        {buttonText}
      </button>
    );
  };

  render() {
    return (
      <LanguageContext.Consumer>
        {langauge => this.renderButton(langauge)}
      </LanguageContext.Consumer>
    );
  }
}

export default Button;
