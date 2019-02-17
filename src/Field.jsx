import React from "react";
import LangaugeContext from "./LanguageContext";

class Field extends React.Component {
  renderLabel = language => {
    const text = language === "english" ? "Name" : "姓名";
    return <label>{text}</label>;
  };
  render() {
    return (
      <div className="ui field">
        <LangaugeContext.Consumer>
          {langauge =>
            this.renderLabel(langauge) /* use PropsObject.property here */}
        </LangaugeContext.Consumer>

        <input />
      </div>
    );
  }
}

export default Field;
