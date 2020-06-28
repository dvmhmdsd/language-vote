import React, { Component } from "react";

import LanguageItem from "./components/language-item";

import "./styles.css";

class App extends Component {
  state = {
    languages: [
      { name: "PHP", voteCount: 0, clicked: false },
      { name: "Java", voteCount: 0, clicked: false },
      { name: "Python", voteCount: 0, clicked: false },
      { name: "Javascript", voteCount: 0, clicked: false },
    ],
  };

  renderLanguagesList = (languages) => {
    return languages.map((language, index) => {
      return (
        <LanguageItem
          language={language}
          index={index}
          key={index}
          increaseCount={this.increaseVote}
        />
      );
    });
  };

  increaseVote = (index) => {
    let { languages } = this.state,
      language = languages[index];

    language.voteCount += 1;
    language.clicked = true;

    this.setState({
      languages,
    });
  };

  render() {
    let { languages } = this.state;
    return (
      <>
        <header>
          <h1 className="vote__heading">Vote your language</h1>
        </header>

        <ul className="vote__list">{this.renderLanguagesList(languages)}</ul>
      </>
    );
  }
}

export default App;
